import {combineReducers} from 'redux'
import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../actions/todo'

function todoEdit (state, action) {
	
	if (state.id !== action.id) {
		return state
	}

	return Object.assign({}, state, {
		task: action.task
	})
}

function todos (state = [], action) {

	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					task: action.task
				}
			]
		case UPDATE_TODO:
			return state.map(t =>
				todoEdit(t, action)
			)
		case DELETE_TODO:
			return state.filter(t => t.id !== action.id)
		default:
			return state
	}
}

var todoApp = combineReducers({
	todos
})

export default todoApp
