const dataStore = require('../lib/dataStore.js').default

const React = require('react')
const {render} = require('react-dom')

const AppComponent = require('../views/app.jsx').default
const App = React.createFactory(AppComponent)
const state = window.state


require('../styles/default.sass')

dataStore.subscribe(() => {
	console.log('dataStore updated: ', dataStore.getState())
})

dataStore.dispatch({type: 'SET_DATA', payload: 'qwerty data dump'})

renderApp(state)

if (window) {
	window.addEventListener('popstate', (e) => {
		const location = window.location.pathname
		const newState = Object.assign({}, state, {location: location})
		window.state = newState
		renderApp(newState)
	})
}

function renderApp(state) {
	render(
		<AppComponent {...state} />
		, document.getElementById('app-mount')
	)
}
