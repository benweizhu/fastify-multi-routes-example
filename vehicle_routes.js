
module.exports = function (fastify, opts, done) {
    fastify.get('/get-vehicle', function (request, reply) {
        reply.send({ hello: 'get vehicle' })
    })
    done()
}