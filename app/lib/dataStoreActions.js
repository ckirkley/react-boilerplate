const dataStore = require('../lib/dataStore').default

export default {
	setData: (data) => {
		const action = {
			type: 'SET_DATA',
			payload: data || null
		}
		dataStore.dispatch(action)
	},
	clearData: () => {
		const action = {
			type: 'CLEAR_DATA'
		}
		dataStore.dispatch(action)
	}
	
}