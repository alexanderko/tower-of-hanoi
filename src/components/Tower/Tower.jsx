import React, { Component } from 'react'

import './Tower.css'

const diskStyle = d => {
  return {
    backgroundColor: d.color,
    width: d.width + '%'
  }
}

export default class Tower extends Component {

  render() {
    const {disks, onClick, onEnter} = this.props

    return (
      <div className="Tower" onClick={onClick} onMouseEnter={onEnter}> 
        {disks.map(d => {
          return <div className="Disk" style={diskStyle(d)}></div>
        })}
      </div>
    )
  }
}
