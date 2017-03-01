import React from 'react'
import toRegex from 'path-to-regexp'

import dataStore from '../lib/dataStore'

import Home from '../views/home.jsx'
import About from '../views/about.jsx'

const routes = [
	{ path: '', action: (props) => <Home {...props} /> },
	{ path: '/about', action: (props) => <About {...props} /> }
]

const matchUri = (path, uri) => {
	const keys = []
	const pattern = toRegex(path, keys)
	const match = pattern.exec(uri)
	if (!match) return null
	const params = Object.create(null)
	for  (let i = 1; i < match.length; i++) {
		params[keys[i-1].name] = match[i] !== undefined ? match[i] : undefined
	}
	Object.assign(params, {dataStore: dataStore.getState()})
	return params
}

const Router = (uri) => {
	for (const route of routes) {
		const props = matchUri(route.path, uri)
		if (!props) continue
		return route.action(props)
	}
}



const Link = React.createClass({
	onClick (event) {
		event.preventDefault()
		if (typeof window.history.pushState === 'undefined') {
			return window.location.href = this.props.to
		}
		const state = {title: this.props.title, location: this.props.to}
		window.history.pushState(state, this.props.title, this.props.to)
		window.dispatchEvent(new window.PopStateEvent('popstate'))
	},
	render () {
		const link = <a href={this.props.to} onClick={this.onClick}>{this.props.children}</a>

		return link
	}
})

const Capitalize = (string) => {
	return string.replace(/^[a-z]/, (str) => {
		return str.toUpperCase()
	})
}

export {Router, Link, Capitalize}