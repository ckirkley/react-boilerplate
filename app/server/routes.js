const Path = require('path')

export default (server) => {
	server.route({
		method: 'GET',
		path: '/assets/{param}',
		handler: {
			directory: {
				path: Path.join(__dirname, '../assets'),
				redirectToSlash: true
			}
		}
	})

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			const context = {
				title: 'Home',
				location: '/'
			}
			context.state = 'window.state = ' + JSON.stringify(context) + ';'

			reply.view('app', context)
		}
	})

	server.route({
		method: 'GET',
		path: '/about',
		handler: (request, reply) => {
			const id = request.params.id ? request.params.id : ''
			const context = {
				title: 'About',
				location: '/about'
			}
			context.state = 'window.state = ' + JSON.stringify(context) + ';'

			reply.view('app', context)
		}
	})
}
