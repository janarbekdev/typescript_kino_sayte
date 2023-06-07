import React from 'react';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Ibasket} from "../../Type/Interface";

interface basketI {
     basket:Ibasket[]
}
export const initialState : basketI = {
    basket:[]
}
export const basketSlice = createSlice({
      name:'basket',
     initialState,
      reducers : {
            fethchingBasket(state,action: PayloadAction<any>){
                  const ask = state.basket.find(el=> el.id === action.payload.id)
                          if (ask){
                               state.basket= state.basket.map(el=> el.id === ask.id ? {...el,quantity: el.quantity + 1}:el)
                          }   else {
                           state.basket=[...state.basket,{...action.payload, quantity : 1}]
                          }
            }
      }
})
export default basketSlice.reducer
  export const {fethchingBasket} = basketSlice.actions