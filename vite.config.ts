import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/settings/colors.scss" as *;
                    @use "@/styles/settings/fonts.scss" as *;
                    @use "@/styles/settings/containers.scss" as *;
                `
            }
        }
    }
})
