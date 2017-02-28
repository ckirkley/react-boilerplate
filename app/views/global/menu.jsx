const React = require('react')
const {Link} = require('../../modules/router')

export default React.createClass({
	render () {

		return (
			<div className='main-menu'>
				<ul>
					<li><Link to='/' title='Home'>Home</Link></li>
					<li><Link to='/about' title='About'>About</Link></li>
				</ul>
			</div>
		)
	}
})
