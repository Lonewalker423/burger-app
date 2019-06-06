import React ,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from './../../components/Burger/Burger'
import BurgerControls from './../../components/Burger/BuildControls/BuildControls';
const ingPrice ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.6,
}
class BurgerBuilder extends Component
{   
    state = {
        ing :{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,

        },
        totalPrice : 4
     }  

    addIngHandler =(type) =>{
        const oldCount = this.state.ing[type];
        const updatedCount = oldCount+1
        const updatedIng ={
            ...this.state.ing
        };
        updatedIng[type] = updatedCount;
        const priceAdd = ingPrice[type];
        const oldPrice =this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({totalPrice :newPrice, ing : updatedIng});

    }

    removeIngHandler =(type) =>{

    }

    render(){
       return(
           <Aux>
               <Burger ing={this.state.ing} />
               <BurgerControls
                ingAdd={this.addIngHandler}/>
           </Aux>

       );
    }

}
console.log(6>7>8);
console.log(8<7<6);
export default BurgerBuilder;

