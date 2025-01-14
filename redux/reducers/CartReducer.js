


import { stat } from "react-native-fs";
import {

 
    ADD_TO_CART_FAILED,
    ADD_TO_CART_REQUEST, 
    ADD_TO_CART_SUCCESS, 
    FETCH_CART_FAILED,
    FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS
  } from "../Types/CartTypes";



const initialstate={
    

    Cart:[],
    total:0,
    totalPrice:0,
    loading:false,
    
}


const CartReducer=(state=initialstate,action)=>


{

    switch(action.type)
    {
        case FETCH_CART_REQUEST:
           return {...state,loading:true}
        case FETCH_CART_SUCCESS:
             const data=action.payload
             return Object.assign({},state,{Cart:data.Cart,total:data.total,totalPrice:data.totalprice,loading:false})
        case FETCH_CART_FAILED:
             return Object.assign({},state,{loading:false})
        case ADD_TO_CART_REQUEST:
            console.log('added in cart')
        case ADD_TO_CART_SUCCESS:
            console.log(action.payload+"SUCCED PAYLOAD")
            
        case ADD_TO_CART_FAILED:
            console.log(JSON.stringify(action.payload)+"Cart add ERROR")

            
        default:
            return state

    }

}
export default CartReducer