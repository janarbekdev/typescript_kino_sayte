import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Ipopular} from "../../Type/Interface";


export interface popularI {
    popular:Ipopular[]
      loader:boolean
      error:string
        language:string
}
 export const initialState : popularI ={
      popular:[],
       loader:true,
       error:'',
     language:'en-US'

 }
 export const poplularSlice = createSlice({
      name:'popular',
        initialState,
       reducers:{
           fetchingPopular (state){
                state.loader = true

           },
           fetchingPopularSucces(state,action:PayloadAction<Ipopular[]>){
                   state.loader= false
                    state.popular =action.payload
                   state.error = ""

           // fetchingPopularSucces (state,action:PayloadAction<Ipopular>){
           //      const task = state.popular.find(el => el.id === action.payload.id)
           //        if (task){
           //             state.popular = state.popular.map(el=> el.id  === task.id ? {...el, id: el.id + 1}:el)
           //        }else {
           //            state.popular = [...state.popular, {...action.payload, id: 1}]
           //        }
           //     state.loader = false
           //        state.error =''


           },
           fetchingPopularError(state,action:PayloadAction<string>){
                 state.loader =true
                state.popular =[]
                  state.error=action.payload

           },
               fetchingLanguage (state,action){
                   state.language =action.payload
               }


       }
 })
export default poplularSlice.reducer
  export const {fetchingPopular,fetchingLanguage,fetchingPopularSucces,fetchingPopularError} = poplularSlice.actions