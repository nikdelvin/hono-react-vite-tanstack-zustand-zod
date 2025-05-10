import { z } from 'zod'

export const schema = z.object({
    ping: z.boolean().or(z.string())
})