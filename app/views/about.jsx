import React from 'react'

import store from '../lib/dataStore'
import callAPI from '../lib/apiMiddleware'
import {setData, clearData} from '../lib/dataStoreActions'

const about = React.createClass({
	propTypes: {
		dataStore: React.PropTypes.object.isRequired
	},
	componentDidMount () {
	},
	handleUpdateData () {
		setData('Button clicked!!!')
	},
	handleClearData (event) {
		event.preventDefault()
		clearData()
	},
	handleFetchAsyncData (event) {
		event.preventDefault()
		callAPI(
			{
				method: 'get',
				path: '/api/defaultdata',
				sendingType: 'FETCH_DATA_REQUEST',
				successType: 'FETCH_DATA_SUCCESS',
				failureType: 'FETCH_DATA_FAILURE'

			}
		)
	},
	componentWillReceiveProps (nextProps) {
	},
	render () {
		const {dataStore} = this.props

		return (
			<div>
				<h1>About</h1>
				<p>Maecenas aliquam lectus non volutpat egestas. Nam ac semper augue.</p>
				<p>This is the current dataStore data: {dataStore.updateState.data}</p>
				<button onClick={this.handleClearData}>Clear dataStore</button>
				<button onClick={this.handleUpdateData}>Update dataStore</button>
				<button onClick={this.handleFetchAsyncData}>Fetch async data</button>
				<p>{JSON.stringify(dataStore.fetchData.data)}</p>
			</div>
		)
	}
})

export default about