import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
    return c.redirect("https://gjtiquia.com/?utm_source=gjt")
})

export default app
