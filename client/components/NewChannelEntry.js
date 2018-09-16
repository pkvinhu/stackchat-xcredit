import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postChannel, writeChannel } from '../store'

class NewChannelEntry extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.writeChannel(e.target.value)
  }

  handleSubmit(e){
    e.preventDefault()
    const { postChannel, newChannelEntry, writeChannel, history } = this.props
    postChannel({name: newChannelEntry}, history)
    writeChannel('')
  }

  render() {
  const { handleSubmit, handleChange } = this
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" 
               type="text" name="channelName"
               value={this.props.newChannelEntry} 
               onChange={handleChange} 
               placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  )
}
}

const mapStateToProps = (state, ownProps) => ({
  newChannelEntry: state.newChannelEntry,
  history: ownProps.history
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  postChannel: (channel) => dispatch(postChannel(channel, ownProps.history)),
  writeChannel: (content) => dispatch(writeChannel(content))
})
/** Write your `connect` component below! **/

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)