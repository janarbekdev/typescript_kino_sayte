import {combineReducers, configureStore} from "@reduxjs/toolkit";
import poplularSlice from '../../src/Store/CompanentSlice/PopularSlice'
   import topRatedSclice from '../../src/Store/CompanentSlice/TopRetedSlice'
import DetailSlice from '../../src/Store/CompanentSlice/DetailSlice'
import actorSlice from "./CompanentSlice/ActorSlice";
  import jobSlice from './CompanentSlice/Jobslice'
import prodcutSlice from './CompanentSlice/ProdcutSlice'
 import Actor2SLice from "./CompanentSlice/Actor2Slice"
 import basketSlice from "./CompanentSlice/basketSlice"
 import nextSlice from "./CompanentSlice/next"
 import searchslice from "./CompanentSlice/SearchSlice"
 import homeSlice from "./CompanentSlice/HomeSlice"
 import ActorBasketSLice from "./CompanentSlice/ActorBasket"
 import productSlice from "./CompanentSlice/ProdcutSlice"
import {symlink} from "fs";
import {useAppDispatch} from "../hook/useAppDispatch";
import {useDispatch} from "react-redux";
export const rootReducer = combineReducers({
    poplularSlice,
    topRatedSclice,
    DetailSlice,
    actorSlice,
    jobSlice,
    prodcutSlice,
    Actor2SLice,
    basketSlice,
    nextSlice,
    searchslice,
    homeSlice,
    ActorBasketSLice,
    productSlice
})
export const setUPStore = ()=> {
     return configureStore({
          reducer: rootReducer
     })
}
 export type rooteStore = ReturnType<typeof rootReducer>
  type AppStore = ReturnType<typeof setUPStore>
   export type  AppDispatch = AppStore['dispatch']




















