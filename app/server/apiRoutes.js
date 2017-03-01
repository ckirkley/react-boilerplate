const Wreck = require('wreck')

export default (server) => {
	server.route({
		method: 'GET',
		path: '/api/defaultdata',
		handler: {
			proxy: {
				mapUri: (request, callback) => {
					console.log('imcoming API request')

					callback(null, 'http://localhost:4000/api/defaultdata')
				},
				onResponse: (err, res, request, reply, settings, ttl) => {
					console.log('receiving response from the upstream')
					if (err) console.log(err)

					Wreck.read(res, {json: true}, (err, payload) => {
						if (err) return console.log(err)
						reply(payload)
					})
				}
			}
		}
	})

}
