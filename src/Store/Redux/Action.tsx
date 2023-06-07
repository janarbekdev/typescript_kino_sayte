import React, {useState} from 'react';
import {AppDispatch} from "../Store";
import {
    fetchingLanguage,
    fetchingPopular,
    fetchingPopularError,
    fetchingPopularSucces
} from "../CompanentSlice/PopularSlice";
import axios from "axios";
import {APY} from "../../APY/APY";
import {fetchingTopRated, fetchingTopRatedError, fetchingTopRatedSucces} from "../CompanentSlice/TopRetedSlice";
import {fetchingDetail, fetchingDetailError, fetchingDetailSucces} from "../CompanentSlice/DetailSlice";
import {fetchingActor, fetchingActorError, fetchingActorSucces} from "../CompanentSlice/ActorSlice";
import {fetchingJob, fetchingJobError, fetchingJobSucces} from "../CompanentSlice/Jobslice";
import {fetchingActor2, fetchingActor2Error, fetchingActor2Succes} from "../CompanentSlice/Actor2Slice";
import {fetchingSearch} from "../CompanentSlice/SearchSlice";
import App from "../../App";
import {fetchingHome} from "../CompanentSlice/HomeSlice";
import home from "../../Companent/Home/Home";
export const getPopular = (language:any,page:number) => async (dispatch: AppDispatch) =>
{
    try {
        dispatch(fetchingPopular())
        const responsive = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc&api_key=${APY}`)
        dispatch(fetchingPopularSucces(responsive.data.results))
    } catch (e: any) {
        dispatch(fetchingPopularError(e.message))
    }
}
 export default getPopular
export const getTopRated =(language:any,page:number) => async (dispatch:AppDispatch)=> {
    try {
           dispatch(fetchingTopRated())
           const topresponsive = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}S&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${APY}`)
             dispatch(fetchingTopRatedSucces(topresponsive.data.results))
    }catch (e:any){
         dispatch(fetchingTopRatedError(e.message))

    }
}
export const getDeatil = (id:any,language:any) => {
       return async (dispatch: AppDispatch) => {
           try {
               dispatch(fetchingDetail())
               const deatailnav=  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APY}&language=${language}`)
               dispatch(fetchingDetailSucces(deatailnav.data))
           } catch (e : any){
               dispatch(fetchingDetailError(e.message))
           }
       }
}
export const getActor = (id:any)=> {
      return async (dispatch:AppDispatch)=> {
          try {
              dispatch(fetchingActor())
              const actorres = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APY}&language=en-US`)
              dispatch(fetchingActorSucces(actorres.data.cast))
          } catch (e:any){
              dispatch(fetchingActorError(e.message))
          }


      }
}
export const getJob = (id:any,language:any)=> {
    return async (dispatch: AppDispatch)=> {
        try {
            dispatch(fetchingJob())
            let jobgive = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${APY}&language=${language}`)
            dispatch(fetchingJobSucces(jobgive.data))
        } catch (e:any){
            dispatch(fetchingJobError(e.message))

        }
    }
}
export const getActor2 = (id:any,language:any)=> {
     return async  (dispatch:AppDispatch)=> {
         try {
             dispatch(fetchingActor2())
               const responsive= await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APY}&language=${language}`)
               dispatch(fetchingActor2Succes(responsive.data.cast))
         }catch (e :any){
              dispatch(fetchingActor2Error(e.message))

         }

     }
}
export const getHome = (id: any)=> {
       return async (dispatch: AppDispatch)=> {
            try {
                 const homeresponsive = await  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APY}&language=ru-RU`)
                     dispatch(fetchingHome(homeresponsive.data))
            } catch (e) {
            }

       }
}
export const getSearch = (movieName:any)=> {
      return async (dispatch: AppDispatch)=> {
            try {
                const searchresponsive = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APY}&query=${movieName}`)
                  dispatch(fetchingSearch(searchresponsive.data.results))

            } catch (e){

            }

      }
}
export const getLanguage = (language:any)=> {
       return async (dispatch:AppDispatch)=> {
             dispatch(fetchingLanguage(language))
       }
}

export const getnext = ()=> {
       return async (dispatch: AppDispatch)=> {


       }
}