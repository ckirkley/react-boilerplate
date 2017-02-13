const React = require('react')
const Menu = require('./global/menu.jsx').default
const Home = require('./home.jsx').default
const About = require('./about.jsx').default

const app =  React.createClass({
	render () {
		const {view} = this.props
		let content = null

		switch (view) {
			case 'home':
				content = <Home />
				break
			case 'about':
				content = <About />
				break
		}

		return (
			<div>
				{content}
				<Menu />
			</div>
		)
	}
})

export default app