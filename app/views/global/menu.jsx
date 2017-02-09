const React = require('react')

const menu = React.createClass({
	render () {
		return (
			<ul>
				<li><a href='/'>Home</a></li>
				<li><a href='/menu'>About</a></li>
			</ul>
		)
	}
})

export default menu