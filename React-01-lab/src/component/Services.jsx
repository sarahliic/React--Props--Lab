import React from 'react'

function Services(props) {
  return (
    <div className='box-services'>
        <h2>Services</h2>
        <div>Servise: {props.servicesTypes}</div>
        <div>Prices: {props.prices}</div>
        <div>=====================================</div>
    </div>
  )
}

export default Services