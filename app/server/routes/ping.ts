import { zValidator } from '@hono/zod-validator'
import { sleep } from '@u/promises'
import { Hono } from 'hono'
import { z } from 'zod'

const schema = z.object({
    pong: z.boolean().or(z.string())
})

const ping = new Hono()
    .get('/', zValidator('query', schema), async (c) => {
        const { pong } = c.req.valid('query')
        await sleep(1)
        return c.json({ pong })
    })
    .post('/', zValidator('form', schema), async (c) => {
        const { pong } = c.req.valid('form')
        await sleep(1)
        return c.json({ pong })
    })

export default ping
