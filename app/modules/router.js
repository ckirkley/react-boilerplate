const React = require('react')
const toRegex = require('path-to-regexp')

const dataStore = require('../lib/dataStore').default

const Home = require('../views/home.jsx').default
const About = require('../views/about.jsx').default

const routes = [
	{ path: '', action: (props) => <Home {...props} /> },
	{ path: '/about', action: (props) => <About {...props} /> }
]

const matchUri = (path, uri) => {
	const keys = []
	const pattern = toRegex(path, keys)
	const match = pattern.exec(uri)
	if (!match) return null
	const params = Object.create(null)
	for  (let i = 1; i < match.length; i++) {
		params[keys[i-1].name] = match[i] !== undefined ? match[i] : undefined
	}
	Object.assign(params, {dataStore: dataStore.getState()})
	return params
}

const Router = (uri) => {
	for (const route of routes) {
		const props = matchUri(route.path, uri)
		if (!props) continue
		return route.action(props)
	}
}



const Link = React.createClass({
	onClick (event) {
		event.preventDefault()
		window.history.pushState(null, null, this.props.to)
		window.dispatchEvent(new window.PopStateEvent('popstate'))
	},
	render () {
		const link = <a href={this.props.to} onClick={this.onClick}>{this.props.children}</a>

		return link
	}
})

const Capitalize = (string) => {
	return string.replace(/^[a-z]/, (str) => {
		return str.toUpperCase()
	})
}

export {Router, Link, Capitalize}