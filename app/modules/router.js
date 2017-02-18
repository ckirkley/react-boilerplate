const React = require('react')
const Home = require('../views/home.jsx').default
const About = require('../views/about.jsx').default

const Router = (location) => {
	switch (location) {
		case '':
			return <Home />
			break
		case 'about':
			return <About />
			break
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