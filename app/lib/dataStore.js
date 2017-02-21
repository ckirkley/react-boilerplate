const {createStore} = require('redux')

const defaultState = {
	isLoading: false,
	error: null,
	isComplete: false,
	data: null
}

const updateState = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return Object.assign({}, state, {data: action.payload})
			break
		case 'CLEAR_DATA':
			return Object.assign({}, state, {data: null})
			break
		default:
			return state
	}
}

const dataStore =  createStore(updateState)

export default dataStore