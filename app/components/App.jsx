import uuid from 'node-uuid'
import {connect} from 'react-redux'
import {addTodo, updateTodo, deleteTodo} from '../actions/todo'
import React, {Component} from 'react'
import Notes from './Notes'

class App extends Component {

	constructor (props) {

		super(props)

		this.addNote = this.addNote.bind(this)
		this.editNote = this.editNote.bind(this)
		this.deleteNote = this.deleteNote.bind(this)
	}

	render () {

		var {dispatch, notes} = this.props

		return (
			<div>
				<h1>Redux Kanban</h1>
				<button className="add-note" onClick={this.addNote}>+</button>
				<Notes
					notes={notes}
					onEdit={this.editNote}
					onDelete={this.deleteNote} />
			</div>
		)
	}

	addNote () {
		this.props.dispatch(addTodo('New task'))
	}

	editNote (id, task) {

		if (!task.trim()) {
			return
		}

		this.props.dispatch(updateTodo(id, task))
	}

	deleteNote (id) {
		this.props.dispatch(deleteTodo(id))
	}
}

function select (state) {

	return {
		notes: state.todos
	}
}

export default connect(select)(App)
