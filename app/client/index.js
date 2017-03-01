import dataStore from '../lib/dataStore.js'

import React from 'react'
import {render} from 'react-dom'

import AppComponent from '../views/app.jsx'
const App = React.createFactory(AppComponent)

let state = window.state


require('../styles/default.sass')

dataStore.subscribe(() => {
	renderApp(state)
})

renderApp(state)

if (window) {
	window.addEventListener('popstate', (e) => {
		state = window.state = window.history.state
		renderApp(window.state)
	})
}

function renderApp(state) {
	render(
		<AppComponent {...state} />
		, document.getElementById('app-mount')
	)
}
