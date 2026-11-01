/**
 * Web Speech API wrapper for Text-To-Speech Accessibility
 */
let synth: SpeechSynthesis | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

export function speakText(text: string, onEnd?: () => void, lang: string = 'en-IN'): boolean {
  if (!synth) return false;

  stopSpeaking();

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95; // slightly slower for clear comprehension
    utterance.pitch = 1.0;

    // Pick an Indian English or Hindi voice if available
    const voices = synth.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('hi-IN')) || voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
    };

    currentUtterance = utterance;
    synth.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    return false;
  }
}

export function stopSpeaking(): void {
  if (synth) {
    synth.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking(): boolean {
  return synth ? synth.speaking : false;
}

