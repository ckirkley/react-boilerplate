const React = require('react')
const {render} = require('react-dom')

const isNode = ('detect-node')

const AppComponent = require('./views/app.jsx').default
const App = React.createFactory(AppComponent)
const state = window.state


require('./styles/default.sass')

renderApp(state)

if (!isNode && window) {
	window.addEventListener('popstate', (e) => {
		const newState = Object.assign({}, state, {location: window.location.pathname})
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
