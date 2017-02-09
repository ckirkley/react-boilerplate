const React = require('react')
const Menu = require('./global/menu.jsx').default

const home =  React.createClass({
	render () {
		return (
			<div>
				<h1>Home</h1>
				<p>Donec aliquam malesuada lectus a egestas. Ut ante diam, aliquet eget tellus id, ultrices dapibus quam.</p>
				<Menu />
			</div>
		)
	}
})

export default home