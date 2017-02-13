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
				title: 'Home'
			}
			context.state = 'window.state = ' + JSON.stringify(context) + ';'

			reply.view('home', context)
		}
	})

	server.route({
		method: 'GET',
		path: '/about',
		handler: (request, reply) => {
			const context = {
				title: 'About'
			}
			context.state = 'window.state = ' + JSON.stringify(context) + ';'

			reply.view('about', context)
		}
	})
}
