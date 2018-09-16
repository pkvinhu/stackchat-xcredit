import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
<<<<<<< HEAD

class Messages extends Component {

  render () {
    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.props.messages;
=======
import axios from 'axios';
import store, { fetchMessages } from '../store'
import { connect } from 'react-redux'

class MessagesList extends Component {

  // constructor (props) {
  //   super(props)
  //   this.state = store.getState();
  // }

  async componentDidMount () {
    this.props.fetchInitialMessages()
  }

  render () {
    const {messages} = this.props
    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
<<<<<<< HEAD
        <NewMessageEntry channelId={channelId} />
=======
        <NewMessageEntry channelId={channelId}/>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Messages);
=======
const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  fetchInitialMessages: () => dispatch(fetchMessages())
})


 export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
