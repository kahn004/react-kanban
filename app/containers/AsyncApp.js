import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
	constructor (props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount () {
		const { dispatch, selectedSubreddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
			const { dispatch, selectedSubreddit } = this.props
			dispatch(fetchPostsIfNeeded(selectedSubreddit))
		}
	}

	handleChange (nextSubreddit) {
		this.props.dispatch(selectSubreddit(nextSubreddit))
	}

	handleRefreshClick (e) {
		e.preventDefault()

		const { dispatch, selectedSubreddit } = this.props
		dispatch(invalidateSubreddit(selectedSubreddit))
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	render () {
		return (
			<h1>AsyncApp</h1>
		)
	}
}

AsyncApp.propTypes = {

}

function mapStateToProps (state) {
	return state
}

export default connect(mapStateToProps)(AsyncApp)