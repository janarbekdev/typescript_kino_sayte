import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActorI} from "../../Type/Interface";

export interface Iactor {
     actor:ActorI[]
       loader:boolean
      error:string
}
 export const initialState : Iactor ={
       actor: [],
       loader: true,
       error:''
}
 export const actorSlice = createSlice({
       name:'sss',
       initialState,
        reducers: {
            fetchingActor (state){
                state.loader = false
            },
            fetchingActorSucces (state,action:PayloadAction<ActorI[]>){
                  state.loader = false
                    state.actor =action.payload
                    state.error = ''
            },
            fetchingActorError (state,action: PayloadAction<string>){
                 state.loader = true
                  state.error = action.payload
                  state.actor=[]

            }

        }
 })
 export  default actorSlice.reducer
  export const {fetchingActor,fetchingActorSucces,fetchingActorError} =actorSlice.actions