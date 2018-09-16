<<<<<<< HEAD
import React, { Component } from 'react';
import NameEntry from './NameEntry';
=======
import React, { Component } from 'react'
import NameEntry from './NameEntry'
import { connect } from 'react-redux'
import store, { authorName } from '../store'
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88

class Navbar extends Component {
  constructor(props){
  	super(props)
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
  	console.log(this.props)
  	this.props.changeName(e.target.value)
  }

  render () {
  	const {handleChange} = this
    return (
      <nav>
        <h3># channelname goes here</h3>
<<<<<<< HEAD
        <NameEntry />
=======
        <NameEntry handleChange={handleChange}/>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => dispatch(authorName(name))
})

export default connect(null, mapDispatchToProps)(Navbar)
