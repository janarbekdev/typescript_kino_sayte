import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getDeatil, getHome, getPopular, getSearch} from "../../Store/Redux/Action";
import {useNavigate, useParams} from "react-router-dom";
import HomeSlice from "../homeSlice/HomeSlice";
import Actorbasket from "../ActorBasket/Actorbasket";
const images = {
    id:{
    id: 1,
        url: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
}
}
const Home = () => {
     const {search} = useAppSelector(state => state.searchslice)
      const {popular} = useAppSelector(state => state.poplularSlice)
        const dispatch  = useAppDispatch()
       const [values,setValues] = useState('')
      const navigate = useNavigate()
       const {id} = useParams()
      useEffect(()=> {
          dispatch(getSearch(search))
      },[search])
    return (
     <>
         <div>
             <div
                 style={{
                     background:`url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${images.id.url}) no-repeat center/cover`,
                     boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)", borderRadius:"10px",
                 }} id='home'>
                 <div className="container">
                     <div className="home">
                         <div className="home--hi">
                             <h1>Добро пожаловать.</h1>
                             <img src={``} alt=""/>
                             <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                             <div className="home--hi__dictricdute">
                                 <input onChange={(e)=> setValues(e.target.value)} type="search" placeholder='     Search vidio end on other....'/>
                                 <button onClick={()=>navigate(`/search/${values}`)}>Search</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <HomeSlice />


         </div>
         <Actorbasket/>

     </>
    );
};
export default Home;