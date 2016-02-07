import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
	render () {
		return (
			<h1>This is a boilerplate</h1>
		)
	}
}

export default App

render(
	<App />,
	document.getElementById('app')
)