import React, {useEffect} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {getActor2} from "../../Store/Redux/Action";
import peel from '../../img/gift2.jpeg'


const HomeSlice = () => {
    // const {actor2} = useAppSelector(state => state.Actor2SLice)
    //   const dispatch= useAppDispatch()
    //   const {id} = useParams()
    //   useEffect(()=> {
    //        dispatch(getActor2(id,1))
    //   },[])
    // console.log(actor2)

    return (
        <div id='homeslice'>
            {/*<div className="container">*/}
            {/*    <div className="homeslice">*/}
            {/*        {*/}
            {/*            actor2.map(el=> (*/}
            {/*                <div className='actor--nock'>*/}
            {/*                    <Link to={`/job_com/${el.id}`} >*/}
            {/*                        {*/}
            {/*                            <div style={{*/}
            {/*                                boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)"*/}
            {/*                            }} className='actor--nock'>*/}
            {/*                                {*/}
            {/*                                    el.profile_path === null ? <img className="actor--nock__block" src={peel} alt="img"/>*/}

            {/*                                        : <img className="actor--nock__block"*/}
            {/*                                               src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.backdrop_path}`}*/}
            {/*                                               alt="img"/>*/}

            {/*                                }*/}
            {/*                                <h1>{el.name}</h1>*/}
            {/*                            </div>*/}

            {/*                        }*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    );
};

export default HomeSlice;