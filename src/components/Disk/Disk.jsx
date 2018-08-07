import React from 'react'

import './Disk.css'

const diskStyle = d => {
  return {
    backgroundColor: d.color,
    width: d.width + '%'
  }
}

const Disk = (props) => {
  return (
    <div className="Disk" style={diskStyle(props.disk)}></div>
  )
}

export default Disk