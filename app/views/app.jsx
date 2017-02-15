const React = require('react')
const isNode = require('detect-node')

const Menu = require('./global/menu.jsx').default

const {Router} = require('../modules/router')

const App =  React.createClass({
	componentDidMount () {
	},
	render () {
		const {location} = this.props
		const component = Router(location)
		return (
			<div>
				<Menu />
				{component}
			</div>
		)
	}
})

export default App