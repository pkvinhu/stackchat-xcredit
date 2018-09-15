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