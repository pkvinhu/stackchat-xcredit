import io from 'socket.io-client';
<<<<<<< HEAD
import store, { getMessage, getChannel } from './store';
=======
import store, {newMsgFromServer} from './store'
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');

  socket.on('new-message', message => {
<<<<<<< HEAD
    store.dispatch(getMessage(message));
  });

  socket.on('new-channel', channel => {
  	store.dispatch(getChannel(channel))
  })

=======
  	store.dispatch(newMsgFromServer(message))
  })
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
});

export default socket;
