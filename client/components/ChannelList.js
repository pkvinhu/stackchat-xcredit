import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import store from '../store'
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

class ChannelList extends Component {
<<<<<<< HEAD

  render () {
    const { messages, channels } = this.props;

=======
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    const {messages} = this.props
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
    return (
      <ul>
      {channels.map(channel=> {
        return (
        <div key={channel.id}>
        <li>
<<<<<<< HEAD
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span># {channel.name}</span>
            <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
=======
          <NavLink to={RANDOM_CHANNEL} activeClassName="active">
            <span># really_random</span>
            <span className="badge">{messages.filter(message=>message.channelId === 1).length}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={GENERAL_CHANNEL} activeClassName="active">
            <span># generally_speaking</span>
            <span className="badge">{messages.filter(message=>message.channelId === 2).length}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={DOGS_CHANNEL} activeClassName="active">
            <span># dogs_of_fullstack</span>
            <span className="badge">{messages.filter(message=>message.channelId === 3).length}</span>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
          </NavLink>
        </li>
        </div>
        )
        })}
        <li>
<<<<<<< HEAD
          <NavLink to="/new-channel">Create a channel...</NavLink>
=======
          <NavLink to={LUNCH_CHANNEL} activeClassName="active">
            <span># lunch_planning</span>
            <span className="badge">{messages.filter(message=>message.channelId === 1).length}</span>
          </NavLink>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
<<<<<<< HEAD
    messages: state.messages,
    channels: state.channels
})

export default withRouter(connect(mapStateToProps)(ChannelList));
=======
  messages: state.messages  
})

export default withRouter(connect(mapStateToProps)(ChannelList))
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
