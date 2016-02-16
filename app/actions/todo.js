import uuid from 'node-uuid'

export var ADD_TODO = 'ADD_TODO'
export var UPDATE_TODO = 'UPDATE_TODO'
export var DELETE_TODO = 'DELETE_TODO'

export function addTodo (task) {

	return {
		type: ADD_TODO,
		id: uuid.v4(),
		task
	}
}

export function updateTodo (id, task) {

	return {
		type: UPDATE_TODO,
		id,
		task
	}
}

export function deleteTodo (id) {

	return {
		type: DELETE_TODO,
		id
	}
}
