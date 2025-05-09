import { Hono } from 'hono'
import ping from './routes/ping'
import pong from './routes/pong'

const routes = new Hono().route('/ping', ping).route('/pong', pong)

export default routes
