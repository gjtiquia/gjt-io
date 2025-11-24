import { Hono } from 'hono'

const app = new Hono({
    // so that GET /repo and /repo/ will be treated as the same endpoint
    // docs: https://hono.dev/docs/api/hono#strict-mode
    strict: false
})

    // gjtiquia.com

    .get('/', (c) => c.redirect("https://gjtiquia.com/?utm_source=gjt"))
    .get('/resume', (c) => c.redirect("https://gjtiquia.com/resume/?utm_source=gjt"))

    // github

    .get('/repo', (c) => c.redirect("https://github.com/gjtiquia?tab=repositories"))
    .get('/repos', (c) => c.redirect("/repo"))

    .get('/dotfiles', (c) => c.redirect("https://github.com/gjtiquia/dotfiles"))
    .get('/dotfile', (c) => c.redirect("/dotfiles"))

    .get('/vpsrice', (c) => c.redirect("https://github.com/gjtiquia/.vpsrice"))

    .get('/vim', (c) => c.redirect("https://github.com/gjtiquia/.vim"))

    .get('/nvim', (c) => c.redirect("https://github.com/gjtiquia/kickstart.nvim"))
    .get('/neovim', (c) => c.redirect("/nvim"))

    .get('/tmux', (c) => c.redirect("https://github.com/gjtiquia/.tmux"))

    // projects

    .get('/txt', (c) => c.redirect("https://minitextarea.gjt.io/"))
    .get('/textarea', (c) => c.redirect("/txt"))

    .get('/cp', (c) => c.redirect("https://cp.gjt.io"))
    .get('/copypaste', (c) => c.redirect("https://ijustwannacopypaste.gjt.io/"))

    .get('/base64', (c) => c.redirect("https://base64anything.gjt.io/"))
    .get('/bored', (c) => c.redirect("https://beingbored.gjt.io/"))

    .get('/seat', (c) => c.redirect("https://whereismyseat.gjt.io/e/gj-eunice-wedding-2025/landing"))
    .get('/wedding', (c) => c.redirect("https://twitch.tv/gjtiquia"))

export default app
