<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName } from '../store';

class NameEntry extends Component {

  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.props.updateName(evt.target.value);
  }

  render () {
    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={this.handleChange}
          value={this.props.name}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(NameEntry);
=======
import React, {Component} from 'react'

export default class NameEntry extends Component {
  constructor(props){
  	super(props)
  }
  render() {
  	const {handleChange} = this.props
  	return (
  	  <form className="form-inline">
  	    <label htmlFor='name'>Your name:</label>
  	    <input
  	      type='text'
  	      name='name'
  	      placeholder='Enter your name'
  	      onChange={handleChange}
  	      className='form-control'
  	    />
  	  </form>
  	)
  }
}
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
