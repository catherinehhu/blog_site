import * as React from 'react'

const Container = ({right, children }) => {
  return (
    <div className = "container">
        <div style = {{order: `1`, flexGrow: `2`, textAlign: `center`}}>{children}</div>
        <div style = {{borderLeft: `thin solid #ff0000`, order: `2`, flexGrow: `2`, padding: `0`}}></div>
        <div style = {{order: `3`, flexGrow: `3`, textAlign: `left`}}>{right}</div>
        {children}
    </div>
  )
}

export default Container