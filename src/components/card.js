import * as React from 'react'
import { Link } from 'gatsby'

const Card = ({ sentence, children }) => {
  return (
    <div className = "card">
        <p>{sentence}</p>
        <br></br>
        <p>Hello</p>
        <br></br>
        <p>Hello</p>
        <br></br>
        <p>Hello</p>
        <p>Hello</p>
        <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-lead-full.jpg"></img>
    </div>
  )
}

export default Card