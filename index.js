// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./address_routes'), { prefix: '/address' })
fastify.register(require('./vehicle_routes'), { prefix: '/vehicle' })

// Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})