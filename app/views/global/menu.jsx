const React = require('react')
const {Link} = require('../../modules/router')

export default React.createClass({
	render () {

		return (
			<ul>
				<li><Link to='home'>Home</Link></li>
				<li><Link to='about'>About</Link></li>
			</ul>
		)
	}
})
