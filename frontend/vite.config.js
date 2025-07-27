import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.VITE_PORT) || 3000,
    allowedHosts: [
      '*',  // Allow all hosts
      'projectf-alb-1900968882.ap-northeast-1.elb.amazonaws.com',
      'prod-fe.examplesite.jp',
      'prod-be.examplesite.jp'
    ]
  },
});
