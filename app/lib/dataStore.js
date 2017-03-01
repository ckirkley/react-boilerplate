const {createStore, combineReducers} = require('redux')

const defaultState = {
	updateState: {
		isLoading: false,
		error: null,
		isComplete: false,
		data: null
	},
	fetchData: {
		isLoading: false,
		error: null,
		isComplete: false,
		data: null
	}
}

function updateState(state = defaultState.updateState, action) {
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

function fetchData(state = defaultState.fetchData, action) {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return Object.assign({}, state, {isLoading: true, error: null})
			break
		case 'FETCH_DATA_FAILURE':
			return Object.assign({}, state, {error: action.error})
			break
		case 'FETCH_DATA_SUCCESS':
			return Object.assign({}, state, {isLoading: false, data: action.payload})
			break
		default:
			return state
	}
}

const reducers = combineReducers({
	updateState,
	fetchData
})

const dataStore =  createStore(reducers)

export default dataStore