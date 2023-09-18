import routes from 'next-routes'

routes()
    .add('index', '/')
    .add('about', '/about')
    .add('contact', '/contact')
    .add('blog', '/blog/:slug')

module.exports = routes