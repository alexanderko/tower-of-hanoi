import React, { Component } from 'react'

import './Tower.css'
import Disk from '../Disk/Disk.jsx';

export default class Tower extends Component {

  render() {
    const {disks, onClick, onEnter} = this.props

    return (
      <div className="Tower" onClick={onClick} onMouseEnter={onEnter}> 
        {disks.map(d => <Disk disk={d}></Disk>)}
      </div>
    )
  }
}
