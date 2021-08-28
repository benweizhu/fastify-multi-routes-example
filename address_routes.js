
module.exports = function (fastify, opts, done) {
    fastify.get('/get-address', function (request, reply) {
        reply.send({ hello: 'get address' })
    })
    done()
}