import React, { Component } from 'react'

import './Tower.css'

export default class Tower extends Component {

  render() {
    return (
      <div className="Tower"> 
        <div className="Disk" style={{backgroundColor: '#669BBC', width: '20%'}}></div>
        <div className="Disk" style={{backgroundColor: '#A8C686', width: '40%'}}></div>
        <div className="Disk" style={{backgroundColor: '#F3A712', width: '60%'}}></div>
        <div className="Disk" style={{backgroundColor: '#29335C', width: '80%'}}></div>
        <div className="Disk" style={{backgroundColor: '#E4572E', width: '100%'}}></div>
      </div>
    )
  }
}
