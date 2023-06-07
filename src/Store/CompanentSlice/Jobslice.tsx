import React from 'react';
import {jobI} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Ijob {
     job:Partial<jobI>
     loader:boolean
      error:string
}
export const initialState : Ijob ={
     job:{},
      loader:true,
      error:''
}
export const jobSlice = createSlice({
      name: 'asan',
      initialState,
       reducers : {
           fetchingJob (state){
                  state.loader =false

           },
           fetchingJobSucces (state,action: PayloadAction<jobI>){
                state.job=action.payload
                 state.error =''
                 state.loader = true
           },
           fetchingJobError (state,action:PayloadAction<string>){
                 state.error =action.payload
                   state.loader = false
                   state.job ={}

           }


       }
})
export default jobSlice.reducer
export const {fetchingJobSucces,fetchingJobError,fetchingJob} = jobSlice.actions
