import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import axios from 'axios';
import store, { fetchMessages } from '../store'

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
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  fetchInitialMessages: () => dispatch(fetchMessages())
})


 export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)

