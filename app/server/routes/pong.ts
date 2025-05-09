import { zValidator } from '@hono/zod-validator'
import { sleep } from '@u/promises'
import { Hono } from 'hono'
import { z } from 'zod'

const schema = z.object({
    ping: z.boolean().or(z.string())
})

const pong = new Hono()
    .get('/', zValidator('query', schema), async (c) => {
        const { ping } = c.req.valid('query')
        await sleep(1)
        return c.json({ ping })
    })
    .post('/', zValidator('form', schema), async (c) => {
        const { ping } = c.req.valid('form')
        await sleep(1)
        return c.json({ ping })
    })

export default pong
