import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { writeMsg, postMessage } from '../store'
import { bindActionCreators } from 'redux'

class NewMessageEntry extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.props.write(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { post, channelId, msg, name } = this.props
    const content = msg
    post({ content, name, channelId })
  }

  render () {
    const {handleChange, handleSubmit} = this
    return (
      <form id="new-message-form" onSubmit={handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            onChange={handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  msg: state.newMsg,
  name: state.authorName
})

const mapDispatchToProps = (dispatch) => ({
  write: (content) => dispatch(writeMsg(content)),
  post: (entry) => dispatch(postMessage(entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry)
