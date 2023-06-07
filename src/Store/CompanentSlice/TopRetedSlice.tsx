import React from 'react';
import {topRatedI} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
 interface ItopRated {
      top:topRatedI[]
       loader:boolean
       error: string
 }
  export const initialState : ItopRated ={
       top:[],
         loader:true,
        error:''
  }
   export const topRatedSclice = createSlice({
         name: 'topRated',
           initialState,
          reducers : {
             fetchingTopRated (state){
                  state.loader = false

             },
              fetchingTopRatedSucces (state,action: PayloadAction<topRatedI[]>) {
                   state.top = action.payload
                    state.loader = true
                    state.error = ''
              },
              fetchingTopRatedError (state,action:PayloadAction<string>){
                   state.top=[]
                    state.loader =false
                    state.error = action.payload

              }

          }
   })
export default topRatedSclice.reducer
 export const {fetchingTopRated,fetchingTopRatedSucces,fetchingTopRatedError} = topRatedSclice.actions