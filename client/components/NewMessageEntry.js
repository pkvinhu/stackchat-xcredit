<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMessage, writeMessage } from '../store';

class NewMessageEntry extends Component {

  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.props.writeMessage(evt.target.value);
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const { name, newMessageEntry } = this.props;
    const content = newMessageEntry;
    const { channelId } = this.props;

    this.props.postMessage({ name, content, channelId });
    this.props.writeMessage('');
=======
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
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
  }

  render () {
    const {handleChange, handleSubmit} = this
    return (
<<<<<<< HEAD
      <form id="new-message-form" onSubmit={this.handleSubmit}>
=======
      <form id="new-message-form" onSubmit={handleSubmit}>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
<<<<<<< HEAD
            value={this.props.newMessageEntry}
            onChange={this.handleChange}
=======
            onChange={handleChange}
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
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

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    name: state.name, 
    newMessageEntry: state.newMessageEntry 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => dispatch(postMessage(message)),
    writeMessage: (string) => dispatch(writeMessage(string))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
=======
const mapStateToProps = (state) => ({
  msg: state.newMsg,
  name: state.authorName
})

const mapDispatchToProps = (dispatch) => ({
  write: (content) => dispatch(writeMsg(content)),
  post: (entry) => dispatch(postMessage(entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry)
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
