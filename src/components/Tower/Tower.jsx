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
    const disks = [
      { color: '#669BBC', width: 20 },
      { color: '#A8C686', width: 40 },
      { color: '#F3A712', width: 60 },
      { color: '#29335C', width: 80 },
      { color: '#E4572E', width: 100 }
    ]

    return (
      <div className="Tower"> 
        {disks.map(d => {
          return <div className="Disk" style={diskStyle(d)}></div>
        })}
      </div>
    )
  }
}
