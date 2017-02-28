const dataStore = require('../lib/dataStore.js').default

const React = require('react')
const {render} = require('react-dom')

const AppComponent = require('../views/app.jsx').default
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
