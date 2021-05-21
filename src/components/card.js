import * as React from 'react'
import { Link } from 'gatsby'

const Card = ({ sentence, children }) => {
  return (
    <div className = "card">
        {children}
    </div>
  )
}

export default Card