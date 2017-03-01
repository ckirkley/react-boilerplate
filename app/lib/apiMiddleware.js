import dataStore from './dataStore'

import axios from 'axios'

export default ({method, path, query, failureType, successType, sendingType}) => {

	let {dispatch} = dataStore

	dispatch({type: sendingType})

	axios[method](path)
		.then((res) => {
			console.log(res.data)
			dispatch({
				type: successType,
				payload: res.data
			})
		})
		.catch((error) => {
			console.log(error)
			dispatch({
				type: failureType,
				error: error
			})
		})
}