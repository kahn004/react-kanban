import React, { Component } from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './reducers/todo'
import App from './components/App'
import './main.css'

var store = createStore(todoApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)