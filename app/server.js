require('babel-register')({
	presets: ['es2015', 'react'],
})
const Hapi = require('hapi')
const dateFormat = require('dateformat')
const format = 'dd mmm HH:MM:ss'
const Path = require('path')

const server = new Hapi.Server()
server.connection({
	host: 'localhost',
	port: 3000
})

server.register([
	{
		register: require('inert')
	},
	{
		register: require('vision')
	}
], function(err) {
	if (err) return console.error(err)

	server.views({
		engines: {
			jsx: require('hapi-react-views')
		},
		relativeTo: __dirname,
		path: 'views',
		compileOptions: {
			renderMethod: 'renderToString',
			layoutPath: Path.join(__dirname, 'views'),
			layout: 'html'
		}
	})
})

server.route({
	method: 'GET',
	path: '/assets/client.js',
	handler: {
		file: Path.join(__dirname, './aasets/client.js')
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

server.start(function() {
	console.log(dateFormat(new Date(), format) + ' - Server started at: ' + server.info.uri)
})