const routes = [
    {
        name: 'main',
        route: '/',
        resPath: __dirname + '/index.html',
        response: (req) => ({ Result: "SUCCESS" })
    },
    {
        name: 'shopProducts',
        route: '/shop-products',
        resPath: __dirname + '/collections/shop-products.json',
        response: (req) => ({ Result: "SUCCESS" })
    },
    {
        name: 'currenciesDemo',
        route: '/currencies-demo',
        resPath: __dirname + '/collections/currencies-demo.json',
        response: (req) => ({ Result: "SUCCESS" })
    }
];

module.exports = {
    routes
}
