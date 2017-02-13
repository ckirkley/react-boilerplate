const React = require('react')

const HTML = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},
	render () {
		const {title} = this.props

		return (
			<html>
				<head>
					<title>{title}</title>
					<link rel='stylesheet' href='assets/main.css' />
				</head>
				<body>
					<div id="app-mount"
						dangerouslySetInnerHTML={{__html: this.props.children}}>
					</div>
					<script id="app-state"
						dangerouslySetInnerHTML={{__html: this.props.state}}>
					</script>
				</body>
			</html>
		)
	}
})

export default HTML