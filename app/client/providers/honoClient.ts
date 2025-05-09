import type { AppType } from '@s/index'
import { hc } from 'hono/client'

const client = hc<AppType>('/')

export default client
