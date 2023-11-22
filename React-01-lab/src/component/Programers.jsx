import React from 'react'

function Programers(props) {
  return (
    <div className='container'>
        <div  className={props.company ==="Tuwaiq"? "purple box-info":"gray box-info"}>
        <div className='info'>Name: {props.name}</div>
        <div className='info'>Languages: {props.languages}</div>
        <div className='info'>Experinecs: {props.experinces}7 year</div>
        <div className='info' >Company: {props.company}</div>
        
    
        </div>
    </div>
  )
}



export default Programers