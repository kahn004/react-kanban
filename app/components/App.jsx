import uuid from 'node-uuid'
import React, {Component} from 'react'
import Notes from './Notes'

export default class App extends Component {

	constructor (props) {

		super(props)

		this.addNote = this.addNote.bind(this)

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
				<button onClick={this.addNote}>+</button>
				<Notes notes={notes} />
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
}
