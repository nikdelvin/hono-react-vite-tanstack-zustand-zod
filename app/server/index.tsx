import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { getEnv } from '@u/env'
import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import routes from './router'

const app = new Hono()
    .use('/static/*', serveStatic({ root: './dist/' }))
    .route('/api', routes)
    .get('*', (c) => {
        return c.html(
            renderToString(
                <html>
                    <head>
                        <title>{`Launched on port: ${getEnv('PORT') ?? 'N/A'}`}</title>
                        <meta charSet="utf-8" />
                        <meta
                            content="width=device-width, initial-scale=1"
                            name="viewport"
                        />
                        {import.meta.env.PROD ? (
                            <>
                            <link rel="preload stylesheet" href="/static/assets/index.css" as="style"/>
                            <script
                                type="module"
                                src="/static/client.js"
                            ></script>
                            </>
                        ) : (
                            <script
                                type="module"
                                src="/app/client/index.tsx"
                            ></script>
                        )}
                    </head>
                    <body>
                        <div id="root"></div>
                    </body>
                </html>
            )
        )
    })

export type AppType = typeof app

export default app

if (import.meta.env.PROD) {
    serve(
        {
            fetch: app.fetch,
            port: Number(getEnv('PORT'))
        },
        (info) => {
            console.log(`Application is running on ${String(info.port)}`)
        }
    )
}
