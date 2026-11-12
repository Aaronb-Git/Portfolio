import { cpSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: ['index.html', 'egelion.html', 'jobboard.html'].map(page => resolve(page)),
        },
    },
    plugins: [{
        name: 'copy-portfolio-assets',
        apply: 'build',
        writeBundle({ dir }) {
            cpSync('assets', resolve(dir, 'assets'), { recursive: true })
        },
    }],
})
