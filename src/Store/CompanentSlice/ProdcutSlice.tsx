import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Iproduct} from "../../Type/Interface";

interface productI {
    product:Iproduct[]
}

export const initialState : productI ={
         product:[]
}
export const productSlice = createSlice({
         name:'product',
          initialState,
          reducers : {
               fetchingProduct (state,action: PayloadAction<any>){
                    const subsribe = state.product.find(el=>el.id === action.payload)
                     if (subsribe){
                         state.product = state.product.filter(el=> el.id == subsribe.id)
                     } else {
                         return  {...state,product:[...state.product,action.payload]}
                     }

               }
          }
})
export default productSlice.reducer
 export const {fetchingProduct} = productSlice.actions