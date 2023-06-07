import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getSearch} from "../../Store/Redux/Action";
import {useParams} from "react-router-dom";
import Include from "../Include/Include";

const Search = () => {
      const {search} = useAppSelector(state => state.searchslice)
      const dispatch = useAppDispatch()
       const [values] = useState([])
      const {movieName} = useParams()
      useEffect(()=> {
              dispatch(getSearch(movieName))
      },[search])
    console.log(search)
    return (
        <div className='search'>
            <div className="container">
                <div style={{
                     display:'flex',
                    alignItems:'center',
                     justifyContent:'space-between',
                      flexWrap:'wrap'
                }} className="search">
                    {
                        search.map(el=> (
                            <Include el={el}/>

                            // <div>
                            //     <img style={{padding:"10px 35px"}} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            //     <h1>{el.title}</h1>
                            // </div>

                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Search;