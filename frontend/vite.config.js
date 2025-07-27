import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.VITE_PORT) || 3000,
    allowedHosts: [
      'projectf-alb-1900968882.ap-northeast-1.elb.amazonaws.com',
      'prod-fe.examplesite.jp'
    ]
  },
});
