import devServer from '@hono/vite-dev-server'
import nodeAdapter from '@hono/vite-dev-server/node'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    if (mode === 'client') {
        return {
            build: {
                rollupOptions: {
                    input: ['./app/client/index.tsx'],
                    output: {
                        entryFileNames: 'static/client.js',
                        chunkFileNames: 'static/assets/[name]-[hash].js',
                        assetFileNames: 'static/assets/[name].[ext]'
                    }
                },
                emptyOutDir: false,
                copyPublicDir: false
            },
            resolve: {
                alias: {
                    '@c': resolve(__dirname, 'app/client'),
                    '@s': resolve(__dirname, 'app/server'),
                    '@u': resolve(__dirname, 'app/utils')
                }
            }
        }
    } else {
        return {
            build: {
                ssr: true,
                minify: true,
                rollupOptions: {
                    input: './app/server/index.tsx',
                    output: {
                        entryFileNames: '_worker.js'
                    }
                }
            },
            ssr: {
                external: ['react', 'react-dom']
            },
            plugins: [
                devServer({
                    adapter: nodeAdapter,
                    entry: './app/server/index.tsx'
                })
            ],
            resolve: {
                alias: {
                    '@c': resolve(__dirname, 'app/client'),
                    '@s': resolve(__dirname, 'app/server'),
                    '@u': resolve(__dirname, 'app/utils')
                }
            },
            server: {
                port: Number(env.PORT)
            }
        }
    }
})
