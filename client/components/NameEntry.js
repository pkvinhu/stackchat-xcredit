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