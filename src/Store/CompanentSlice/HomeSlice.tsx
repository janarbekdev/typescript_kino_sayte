import {homeI} from "../../Type/Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Ihome {
    home:Partial<homeI>
}
export const initialState : Ihome = {
        home:{}

}
 export const homeSlice = createSlice({
        name:'home',
         initialState,
          reducers : {
              fetchingHome(state,action:PayloadAction<homeI>){
                   state.home = action.payload

              }
          }
 })
export default homeSlice.reducer
 export const {fetchingHome} = homeSlice.actions