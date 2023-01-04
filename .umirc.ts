import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  request: {},
  dva: {},
  routes: [
    {
      path: '/',
      component: './Home',
    },
  ],
  npmClient: 'pnpm',
});
