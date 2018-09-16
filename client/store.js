<<<<<<< HEAD
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import socket from './socket';

// INITIAL STATE

const initialState = {
  messages: [],
  name: 'Reggie',
  newMessageEntry: '',
  channels: [],
  newChannelEntry: ''
};

// ACTION TYPES

const UPDATE_NAME = 'UPDATE_NAME';
const GET_MESSAGE = 'GET_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GET_CHANNELS = 'GET_CHANNELS'
const NEW_CHANNEL = 'NEW_CHANNEL'
const WRITE_CHANNEL = 'WRITE_CHANNEL'

// ACTION CREATORS

export const updateName = (name) => {
  return { type: UPDATE_NAME, name };
}

export const getMessage = (message) => {
  return { type: GET_MESSAGE, message };
}

export const getMessages = (messages) => {
  return { type: GET_MESSAGES, messages };
}

export const writeMessage = (content) => {
  return { type: WRITE_MESSAGE, content };
}

export const getChannels = (channels) => ({
  type: GET_CHANNELS, channels
})

export const getChannel = (channel) => ({
  type: NEW_CHANNEL, channel
})

export const writeChannel = (content) => ({
  type: WRITE_CHANNEL, content
})

// THUNK CREATORS

export const fetchMessages = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/messages');
    const messages = response.data;
    const action = getMessages(messages);
    dispatch(action);
  }
}

export const postMessage = (message) => {
  return async (dispatch) => {
    const response = await axios.post('/api/messages', message);
    const newMessage = response.data;
    const action = getMessage(newMessage);
    dispatch(action);
    socket.emit('new-message', newMessage);
  }
}

export const fetchChannels = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/channels')
    const channels = response.data
    const action = getChannels(channels)
    dispatch(action)
  }
}

export const postChannel = (channel, history) => {
  return async (dispatch) => {
    const response = await axios.post('/api/channels', channel)
    const newChannel = response.data
    const action = getChannel(newChannel)
    dispatch(action)
    socket.emit('new-channel', newChannel)
    history.push(`/channels/${newChannel.id}`)
  }
}

// REDUCER

/**
 * Whoa! What is this { ...state } business?!?
 * This is the spread operator like we've seen before - but this time, we're using it with an Object!
 * When we use the spread operator on an object, it extracts all of the key-value pairs on that object into a new object!
 * Sound familiar? It acts like Object.assign!
 *
 * For example:
 *
 *    const obj1 = { a: 1 };
 *    const obj2 = { ...obj1, b: 2  }
 *    console.log(obj2) // { a: 1, b: 2 }
 *
 * This is the same result we would have gotten if we had said:
 *
 *    const obj2 = Object.assign({}, obj1, { b: 2 })
 *
 * However, it's much less verbose!
 * Is there anything the spread operator DOESN'T do?!?
 *
 * Note: this is still an experimental language feature (though it is on its way to becoming official).
 * We can use it now because we are using a special babel plugin with webpack (babel-preset-stage-2)!
 */
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };

    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };

    case GET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };

    case WRITE_MESSAGE:
      return {
        ...state,
        newMessageEntry: action.content
      };

    case GET_CHANNELS:
      return {
        ...state,
        channels: action.channels
      }

    case NEW_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }

    case WRITE_CHANNEL:
      return {
        ...state,
        newChannelEntry: action.content
      }

    default:
      return state;
  }

}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  ))
);

export default store;
=======
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'
import socket from './socket'

//STATE
const initialState = {
  messages: [],
  newMsg: '',
  authorName: ''
}

//ACTION TYPES
const MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER'
const WRITE_MESSAGE = 'WRITE_MESSAGE'
const NEW_MSG_FROM_SERVER = 'NEW_MSG_FROM_SERVER'
const AUTHOR_NAME = 'AUTHOR_NAME'

//ACTION CREATORS
export const gotMessagesFromServer = (messages) => ({
  type: MESSAGES_FROM_SERVER,
  messages
})

export const fetchMessages = () => {
  return async (dispatch) => {
  	const response = await axios.get('/api/messages');
    const messages = response.data;
    const action = gotMessagesFromServer(messages)
    dispatch(action)
  }
}

export const writeMsg = (input) => ({
  type: WRITE_MESSAGE,
  newEntry: input
})

export const newMsgFromServer = (message) => ({
  type: NEW_MSG_FROM_SERVER,
  message
})

export const postMessage = (message, author) => {
  console.log('hello', message)
  return async (dispatch) => {
  	const response = await axios.post('/api/messages', message)
  	console.log(response.data)
  	const newMsg = response.data
  	const action = newMsgFromServer(newMsg)
  	dispatch(action)
    socket.emit('new-message', newMsg)
  }
} 

export const authorName = (name) => ({
  type: AUTHOR_NAME,
  name
})

//REDUCERS
const reducer = (state = initialState, action) => {
  switch(action.type) {
  	case MESSAGES_FROM_SERVER:
  	  return {...state, messages: action.messages}
  	case WRITE_MESSAGE:
  	  return {...state, newMsg: action.newEntry}
  	case NEW_MSG_FROM_SERVER:
  	  return {...state, messages: [...state.messages, action.message]}
  	case AUTHOR_NAME:
  	  return {...state, authorName: action.name}
  	default:
  	  return state
  }
}

//STORE
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))

export default store;
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
