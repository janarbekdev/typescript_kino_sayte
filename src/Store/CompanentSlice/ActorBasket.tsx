import {IAcorbasket} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const value = localStorage.getItem('key');

localStorage.removeItem('key');

// other:JSON.parse(localStorage.getItem('other')) || [],

interface AcorbasketI{
    actorbasket:IAcorbasket[]

}
export const initialState : AcorbasketI ={
    // other:JSON.parse(localStorage.getItem('other')) || [],
    // actorbasket:JSON.stringify('actorbasket',localStorage.getItem('value'))
    actorbasket:[]

    // actorbasket : JSON.parse(localStorage.getItem('actorbasket')) || []

}
export const ActorBasketSLice = createSlice({
         name:'actorBasket',
         initialState,
         reducers : {
              fetchingAcotbasket (state,action:PayloadAction<any>) {
                   const actorBasket = state.actorbasket.find(el=> el.id === action.payload.id)
                    if (actorBasket){
                         state.actorbasket=state.actorbasket.map(el=> el.id === actorBasket.id ? {...el,quantity: el.quantity + 1}: el)
                    } else {
                     state.actorbasket=[...state.actorbasket,{...action.payload,quantity : 1 }]
                    }
              }
         }
})
export default ActorBasketSLice.reducer
  export const {fetchingAcotbasket} = ActorBasketSLice.actions