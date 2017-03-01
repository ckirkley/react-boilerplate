const React = require('react')

const HTML = React.createClass({
	render () {
		const {title} = this.props

		return (
			<html>
				<head>
					<title>{title}</title>
					<link rel='stylesheet' href='/assets/main.css' />
				</head>
				<body>
					<div id="app-mount"
						dangerouslySetInnerHTML={{__html: this.props.children}}>
					</div>
					<script id="app-entry-state"
						dangerouslySetInnerHTML={{__html: this.props.state}}>
					</script>
					<script src='/assets/client.js'></script>
				</body>
			</html>
		)
	}
})

export default HTML