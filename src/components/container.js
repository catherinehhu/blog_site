import * as React from 'react'

const Container = ({desc, title, imgLocation, link, children}) => {
  return (
        <div className = "container">
          <a href = {link}><img className = "container-img" src={imgLocation} style = {{width: `25vw`, height: `30vh`, objectFit: `contain`}}/></a>
          <div className = "vertical-line"></div>
          <div><ul><h4>{title}</h4>
            <li>{desc}</li></ul></div>
        </div>
  )
}

export default Container