const React = require('react')
const {Link} = require('../../modules/router')

export default React.createClass({
	render () {

		return (
			<div className='main-menu'>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</div>
		)
	}
})
