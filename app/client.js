'use strict'
const React = require('react')
const ReactDOM = require('react-dom')
const AppComponent = require('./views/app.jsx').default

const App = React.createFactory(AppComponent)
const mountNode = document.getElementById('app-mount')
const serverState = window.state

require('./styles/default.sass')

ReactDOM.render(App(serverState), mountNode)
