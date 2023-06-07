import {Isearch} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface searchI {
      search:Isearch[]

}
  export const initialState : searchI ={
       search:[]
  }
  export const searchslice = createSlice({
        name: 'searc',
         initialState,
         reducers : {
            fetchingSearch(state,action: PayloadAction<Isearch[]>) {
                 state.search =action.payload

}
         }
  })

export default searchslice.reducer
  export const {fetchingSearch} = searchslice.actions