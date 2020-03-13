const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('products', '/products')
routes.add('product', '/products/:slug')