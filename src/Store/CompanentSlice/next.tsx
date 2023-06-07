import React from 'react';
import {Inext} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface sonun {
      next:Inext[]
}
export const initialState : sonun = {
        next :[]
}
 export const nextSlice = createSlice({
       name:'bro',
        initialState,
       reducers : {
           fetchingNext (state,action: PayloadAction<any>){
                 const tasks = state.next.find(el=> el.id ===action.payload.id)
                 if (tasks){
                    state.next = state.next.map(el=> el.id === tasks.id ? {...el,quantity: el.quantity +1  }: el )
                 } else {
                    state.next=[...state.next,{...action.payload,quantity : 1}]
                 }
           }





       }
 })
export default nextSlice.reducer
  export const {fetchingNext} = nextSlice.actions
