import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActorI2} from "../../Type/Interface";
interface IAcor2{
    actor2:ActorI2[]
     loader:boolean
      error:string
}
export const initialState : IAcor2 ={
       actor2: [],
      loader:true,
        error:''
}
export const Actor2SLice = createSlice({
      name:"actor2",
       initialState,
     reducers: {
           fetchingActor2  (state) {
               state.loader = false
           },
         fetchingActor2Succes (state,action:PayloadAction<ActorI2[]>){
             state.loader= true
             state.actor2 =action.payload
             state.error = ''
         },
         fetchingActor2Error (state,action:PayloadAction<string>){
               state.actor2 = []
              state.loader =false
               state.error = action.payload
         }
     }
})
export default Actor2SLice.reducer
  export const {fetchingActor2,fetchingActor2Succes,fetchingActor2Error} =Actor2SLice.actions