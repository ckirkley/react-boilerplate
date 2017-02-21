const React = require('react')
const dataStore = require('../lib/dataStore').default

const about = React.createClass({
	componentDidMount () {
		dataStore.dispatch({type: 'SET_DATA', payload: 'I have arrived on the \'about\' page'})
	},
	render () {
		return (
			<div>
				<h1>About</h1>
				<p>Maecenas aliquam lectus non volutpat egestas. Nam ac semper augue.</p>
			</div>
		)
	}
})

export default about