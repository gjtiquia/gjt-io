import { Hono } from 'hono'

const app = new Hono()
    .get('/', (c) => c.redirect("https://gjtiquia.com/?utm_source=gjt"))
    .get('/txt', (c) => c.redirect("https://minitextarea.gjt.io/?utm_source=gjt"))

export default app
