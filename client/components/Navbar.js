import React, { Component } from 'react'
import NameEntry from './NameEntry'
import { connect } from 'react-redux'
import store, { authorName } from '../store'

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
        <NameEntry handleChange={handleChange}/>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => dispatch(authorName(name))
})

export default connect(null, mapDispatchToProps)(Navbar)
