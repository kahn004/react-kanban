import uuid from 'node-uuid'
import React, {Component} from 'react'
import Notes from './Notes'

export default class App extends Component {

	constructor (props) {

		super(props)

		this.addNote = this.addNote.bind(this)
		this.editNote = this.editNote.bind(this)
		this.deleteNote = this.deleteNote.bind(this)

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Task One'
				},
				{
					id: uuid.v4(),
					task: 'Task Two'
				},
				{
					id: uuid.v4(),
					task: 'Task Three'
				}
			]
		}
	}

	render () {

		var {notes} = this.state

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

		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		})
	}

	editNote (id, task) {

		if (!task.trim()) {
			return
		}

		var notes = this.state.notes.map(note => {

			if (note.id === id && task) {
				note.task = task
			}

			return note
		})

		this.setState({notes})
	}

	deleteNote (id) {

		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		})
	}
}
