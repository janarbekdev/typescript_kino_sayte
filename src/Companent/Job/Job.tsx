import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getJob} from "../../Store/Redux/Action";
import {useParams} from "react-router-dom";
import Actor2 from "../Actor2/Actor2";
const Job = () => {
     const {job} = useAppSelector(state => state.jobSlice)
     const {language} = useAppSelector(state => state.poplularSlice)
      const dispatch = useAppDispatch()
      const [keep,setKeep] = useState(true)
       const getBack = ()=> {
            setKeep(!keep)
       }
      const {id} = useParams()
      useEffect(()=> {
            dispatch(getJob(id,language))
      },[language])
    console.log(job)
    return (
        <div id='job'>
            <div className="container">
                <div className="job">
                     <div className="job--light">
                         <img style={{
                             borderRadius: '10px'
                         }} className='w-[400px] border-r-8 h-[400px]'
                              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${job.profile_path}`} alt="img"/>
                         <div className="job--light__lif">
                                <div className="job--light__lif--pinch">
                                    <h1>Персональная информация</h1>
                                       <h2>{job.known_for_department}</h2>
                                </div>
                                <div className="job--light__lif--pinch">
                                   <h1>Известно авторство
                                   </h1>
                                     <h2>{job.gender}</h2>
                                </div>
                                <div className="job--light__lif--pinch">
                                    <h1>Пол</h1>
                                     <h2></h2>
                                </div>
                                <div className="job--light__lif--pinch">
                                     <h1>Дата рождения
                                     </h1>
                                     <h2>{job.birthday}</h2>
                                </div>
                             <div className="job--light__lif--pinch">
                                     <h1>Ded
                                     </h1>
                                     <h2>{job.deathday}</h2>
                                </div>
                             <div className="job--light__lif--pinch">
                                     <h1>Место рождения
                                         { job.also_known_as && job.also_known_as.map(el=> el)}
                                     </h1>
                                     <h2>{job.place_of_birth}</h2>
                                </div>

                               <h2>{job.popularity && Math.floor(job.popularity)}%</h2>
                         </div>
                     </div>
                     <div className="job--left">
                         <h1>{job.name}</h1>
                         {
                             job.birthday ?  <p>{keep ? job.biography && job.biography.slice(1000) : job.biography && job.biography .slice(1)}</p> :<h1> there no biography</h1>
                         }
                         <h2 onClick={() => getBack()}> <span style={{
                             color: keep ? 'blue' : 'black',
                             display: keep ? "block" : "none"
                         }} className='text-[30px]'> Get out Cont</span> <span style={{
                             color: keep ? 'blue' : 'red',
                             display: keep ? "none" : "block",
                              borderBottom:'2px soled blue'

                         }} className='text-[30px]'>  walk Bask  </span></h2>
                     </div>
                </div>
            </div>
            <Actor2/>
        </div>
    );
};

export default Job;