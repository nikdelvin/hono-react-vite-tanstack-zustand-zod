import { zValidator } from '@hono/zod-validator'
import { sleep } from '@u/promises'
import { schema } from '@v/routes/pong'
import { Hono } from 'hono'

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
