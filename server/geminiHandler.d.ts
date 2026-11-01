export interface GeminiChatResponse {
  status: number;
  data: {
    text?: string;
    model?: string;
    isGeminiLive?: boolean;
    isFactNotice?: boolean;
    isFallback?: boolean;
    billingRequired?: boolean;
    error?: string;
    message?: string;
  };
}

export function handleGeminiChatRequest(body: any): Promise<GeminiChatResponse>;

