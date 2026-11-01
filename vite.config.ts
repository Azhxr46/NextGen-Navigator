import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';
import { handleGeminiChatRequest } from './server/geminiHandler.js';

// Ensure .env is loaded in local Node processes
if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch (e) {
    // ignore
  }
}

export default defineConfig(({ mode }) => {
  // Also load Vite env variables into process.env if needed
  const env = loadEnv(mode, process.cwd(), '');
  if (!process.env.GEMINI_API_KEY && env.GEMINI_API_KEY) {
    process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
  }

  return {
    plugins: [
      react(),
      {
        name: 'backend-api-middleware',
        configureServer(server) {
          server.middlewares.use(handleApiRequests);
        },
        configurePreviewServer(server) {
          server.middlewares.use(handleApiRequests);
        }
      }
    ],
    preview: {
      port: 5173,
      host: true,
    },
  };
});

async function handleApiRequests(req: any, res: any, next: any) {
  const parsedUrl = new URL(req.url, 'http://localhost');

  // Health check
  if (parsedUrl.pathname === '/api/health' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      status: 'healthy',
      app: 'NextGen Navigators',
      geminiConfigured: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.length > 5),
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // Gemini chat endpoint
  if (parsedUrl.pathname === '/api/gemini/chat' && req.method === 'POST') {
    let bodyStr = '';
    req.on('data', (chunk: any) => { bodyStr += chunk; });
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyStr || '{}');
        const result = await handleGeminiChatRequest(body);
        res.statusCode = result.status || 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result.data));
      } catch (e: any) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Failed to process request', message: e?.message }));
      }
    });
    return;
  }

  next();
}
