import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'; 

const control = 
[
   {label:'Salad',type: 'Salad'},
   {label:'Bacon',type: 'Bacon'},
   {label:'Cheese',type: 'Cheese'},
   {label:'Meat',type: 'Meat'},

];
 const buildControls = (props) =>(
    <div className={classes.BuildControls}>
       {control.map(ctrl=>(
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingAdd(ctrl.type)}/> 
       ))}
       
   </div>
 );
 export default buildControls ; 