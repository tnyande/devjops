import React from 'react';
import image from './assets/logos/scoot.svg' ;

const Jobs = (props) => {

    //const color = {props.logoBackground};

    
    return (
        
        <div>
             <img src={image}/>
            <div id={props.id} >
                {props.logo}
                <h5>{props.postedAt}</h5> <span></span> <h5>{props.contract}</h5>
                <h2>{props.position}</h2>
                <h5>{props.company}</h5>
                <h3>{props.country}</h3>
                
            </div>

        </div>
    )

}

export default Jobs;
