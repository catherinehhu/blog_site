import * as React from 'react'

const Card = ({ sentence, children }) => {
  return (
    <div className = "card">
        {children}
    </div>
  )
}

export default Card