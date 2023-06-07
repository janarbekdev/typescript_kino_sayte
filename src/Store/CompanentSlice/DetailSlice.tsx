import React from 'react';
import { detailI} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Ideatil {
      detail:Partial<detailI>
       error:string
        loader:boolean

}
 export const initialState : Ideatil = {
    detail:{},
       error:'',
       loader: false
 }
 export const DetailSlice = createSlice({
       name:'detail',
       initialState,
       reducers : {
            fetchingDetail (state){
                 state.loader = false

            },
           fetchingDetailSucces (state,action: PayloadAction<detailI>){
                 state.detail = action.payload
                   state.loader = false
                 state.error = ''

           },
           fetchingDetailError (state,action:PayloadAction<string>){
                  state.error = action.payload
                  state.loader = false
                   state.detail = {}

           }


       }
 })
export default DetailSlice.reducer
 export const {fetchingDetail,fetchingDetailSucces,fetchingDetailError} = DetailSlice.actions