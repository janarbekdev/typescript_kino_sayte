import React, {useEffect} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getActor2} from "../../Store/Redux/Action";
import {Link, useNavigate, useParams} from "react-router-dom";
import peel from "../../img/Aza.jpg";

const Actor2 = () => {
    const {actor2,error,loader} = useAppSelector(state => state.Actor2SLice)
    const {language} = useAppSelector(state => state.poplularSlice)

      const dispatch = useAppDispatch()
      const {id} = useParams()
     useEffect(()=> {
          dispatch(getActor2(id,language))
     },[language])
    console.log(actor2)
    const nav = useNavigate()
    return (
        <div style={{ zIndex:'99'
        }} id='actor'>
            <div className="actor">
                {
                    actor2.map(el=> (
                        <div className='actor--nock'>
                            {/*<Link  >*/}
                                {
                                    <div style={{
                                        boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)"
                                    }} className='actor--nock'>
                                        {
                                            el.profile_path === null ? <img className="actor--nock__block" src={peel} alt="img"/>

                                                : <img onClick={()=> nav(`/detail_com/${el.id}`)} className="actor--nock__block"
                                                       src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.backdrop_path}`}
                                                       alt="img"/>

                                        }
                                        <h1>{el.name}</h1>
                                    </div>

                                }
                            {/*</Link>*/}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Actor2;