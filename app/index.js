import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './main.css'

export default App

render(
	<App />,
	document.getElementById('app')
)