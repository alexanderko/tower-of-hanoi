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
    const disks = this.props.disks

    return (
      <div className="Tower"> 
        {disks.map(d => {
          return <div className="Disk" style={diskStyle(d)}></div>
        })}
      </div>
    )
  }
}
