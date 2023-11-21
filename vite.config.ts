import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { envs } from './src/env';

const baseUrl = envs.VITE_BASE_URL || '/yara';

export default defineConfig({
    root: '.',
    base: baseUrl,
    build: {
        outDir: 'build',
        sourcemap: true,
    },
    resolve: {
        alias: {},
    },
    plugins: [react()],
});
