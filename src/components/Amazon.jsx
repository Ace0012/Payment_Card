
import React from 'react'

const Amazon = (props) => {

  return (
    <div className='Amazon'>
      <div>
      <p>{props.date}</p>
        {props.logo}
      </div>
      <div>
        <h3>{props.sub1}</h3>

      </div>
      <h1>{props.heading}</h1>
      <div>
        <h3>{props.sub2}</h3>
        {props.r}

      </div>

    </div>
  )
}

export default Amazon