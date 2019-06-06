import React from 'react';
import classes from './Burger.css';
import BurgerIng from './BurgerIng/BurgerIng'
//import BurgerControls from './BuildControls/BuildControls';
const burger = (props) => {
   let tranformedIng =Object.keys(props.ing)
         .map(igKey => {
             return [...Array(props.ing[igKey])].map((_,i) => 
             { 
             return <BurgerIng key={igKey+i} type ={igKey}/>;
            });
        })
     .reduce((arr,el)=>{
         return arr.concat(el)
     },[]);
     if(tranformedIng==0)
     {
        tranformedIng=<p>Please start adding ingredients! </p>
     }
    console.log(tranformedIng);
    
             

   return(
       <div className={classes.Burger}>
           <BurgerIng type ="bread-top"/>
           {tranformedIng}
          <BurgerIng type ="bread-bottom"/>
          
       </div>
   );
}

export default burger;