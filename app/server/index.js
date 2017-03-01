require('./config')
require('babel-register')({
	presets: ['es2015', 'react'],
})
const Hapi = require('hapi')
const dateFormat = require('dateformat')
const format = 'dd mmm HH:MM:ss'
const Path = require('path')

const routes = require('./routes').default
const apiRoutes = require('./apiRoutes').default

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
	},
	{
		register: require('h2o2')
	},
	{
		register: require('good'),
		options: {
			reporters: {
				console: [{
					module: 'good-squeeze',
					name: 'Squeeze',
					args: [{
						response: '*',
						log: '*'
					}]
				}, {
					module: 'good-console'
				}, 'stdout']
			}
		}
	}
], function(err) {
	if (err) return console.error(err)

	server.views({
		engines: {
			jsx: require('hapi-react-views')
		},
		relativeTo: __dirname,
		path: '../views',
		compileOptions: {
			renderMethod: 'renderToString',
			layoutPath: Path.join(__dirname, '../views'),
			layout: 'html'
		}
	})
})

routes(server)
apiRoutes(server)


server.start(function() {
	console.log(dateFormat(new Date(), format) + ' - Server started at: ' + server.info.uri)
})