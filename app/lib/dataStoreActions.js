const dataStore = require('../lib/dataStore').default

export function setData (data) {
	const action = {
		type: 'SET_DATA',
		payload: data || null
	}
	dataStore.dispatch(action)
}

export function clearData () {
	const action = {
		type: 'CLEAR_DATA'
	}
	dataStore.dispatch(action)
}

	