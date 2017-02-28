const React = require('react')

const {setData, clearData} = require('../lib/dataStoreActions').default

const about = React.createClass({
	componentDidMount () {
	},
	handleUpdateData () {
		setData('Button clicked!!!')
	},
	handleClearData (event) {
		event.preventDefault()
		clearData()
	},
	render () {
		const {dataStore} = this.props

		return (
			<div>
				<h1>About</h1>
				<p>Maecenas aliquam lectus non volutpat egestas. Nam ac semper augue.</p>
				<p>This is the current dataStore data: {dataStore.data}</p>
				<button onClick={this.handleClearData}>Clear dataStore</button>
				<button onClick={this.handleUpdateData}>Update dataStore</button>
			</div>
		)
	}
})

export default about