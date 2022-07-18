import * as React from 'react'

const Container = ({desc, title, imgLocation, link, children}) => {
  return (
        <div className = "container">
          <a href = {link}><img className = "container-img" src={imgLocation} style = {{display: 'flex',  justifyContent:'center', alignItems:'center', width: `15vw`, height: `20vh`, objectFit: `contain`}}/></a>
          <div className = "vertical-line" style ={{height: `20vh`}}></div>
          <div><ul><h4>{title}</h4>
            <li>{desc}</li>
            </ul></div>
        </div>
  )
}

export default Container