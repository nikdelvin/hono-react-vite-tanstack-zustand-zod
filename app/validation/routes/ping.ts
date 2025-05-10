import { z } from 'zod'

export const schema = z.object({
    pong: z.boolean().or(z.string())
})