import React from 'react'

const ListHeader = (props) => {
  return (
    <div className='col'>
        <h1 style={{fontFamily: 'Rubik Moonrocks', fontSize: '60px', color: '#5f9ae0', WebkitTextStroke: " 1px black"}}>{props.heading}</h1>
    </div>
  )
}

export default ListHeader;