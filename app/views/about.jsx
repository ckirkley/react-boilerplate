const React = require('react')
const Menu = require('./global/menu.jsx').default

const about = React.createClass({
	render () {
		return (
			<div>
				<h1>About</h1>
				<p>Maecenas aliquam lectus non volutpat egestas. Nam ac semper augue.</p>
				<Menu />
			</div>
		)
	}
})

export default about