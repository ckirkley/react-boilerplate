const React = require('react')
const isNode = require('detect-node')

const Menu = require('./global/menu.jsx').default

const {Router} = require('../modules/router')

const App =  React.createClass({
	componentDidMount () {
	},
	render () {
		const {location} = this.props
		const Component = Router(location)
		return (
			<div>
				<Menu />
				<div className='main-content'>
					{Component}
				</div>
			</div>
		)
	}
})

export default App