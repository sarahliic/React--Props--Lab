import React from 'react';
import Programers from './Programers';
import Services from './Services';

function Companies(props) {
  return (
    <div className='box-container'>
      <div className='company-box'>
        <h2>Company Name: {props.companyName}</h2>
        <p>Number of Members: {props.members}</p>
        <p>Year of Founded: {props.history}</p>
        <div>
          <Programers
           name={props.name}
            languages={props.languages}
            experiences={props.experinces}
            company={props.company}
          />
          <Programers
           name={props.name2}
            languages={props.languages2}
            experiences={props.experinces2}
            company={props.company2}
          />
          <Programers
           name={props.name3}
            languages={props.languages3}
            experiences={props.experinces3}
            company={props.company3}
          />
          <Services
            servicesTypes={props.servicesTypes}
            prices={props.prices}
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;