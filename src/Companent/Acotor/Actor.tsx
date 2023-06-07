import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getActor} from "../../Store/Redux/Action";
import {Link, useNavigate, useParams} from "react-router-dom";
import gift from'../../img/gift.jpeg'
import gift2 from'../../img/Aza.jpg'
import joni from'../../img/joni.jpg'
import {fetchingAcotbasket} from "../../Store/CompanentSlice/ActorBasket";

const Actor = () => {
      const {actor,loader,error} = useAppSelector(state => state.actorSlice)
      const {actorbasket} = useAppSelector(state => state.ActorBasketSLice)
      const dispatch = useAppDispatch()
      const {id} = useParams()
    const [stuffed, setStuffed ] = useState(0)
    const [stuffed2, setStuffed2 ] = useState(0)

      const baskets = (el:any)=> {
              if (stuffed === 0){
                   setStuffed( 1)
              }
              setStuffed(stuffed + 1)
             dispatch(fetchingAcotbasket(el))
      }
      const basket = (el:any)=> {
          if (stuffed === -5){
                  setStuffed2(-1)
          }
          setStuffed2(stuffed2 - 1)
          dispatch(fetchingAcotbasket(el))

      }
       useEffect(()=> {
            dispatch(getActor(id))
       },[])
    console.log(actorbasket)
    console.log(actor)
     const nav = useNavigate()

    return (
        <div style={{
            boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)"
        }} id='actor'>
                <div className="actor">
                    {
                        actor.map(el=> (
                            <div  className='actor--nock'>
                                    {
                                            <div style={{
                                                boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)"
                                            }} className='actor--nock'>
                                                <Link to={`/job_com/${el.id}`} >

                                                {
                                                    el.profile_path === null ? <img className="actor--nock__block" src={gift2} alt="img"/>

                                                        : <img  className="actor--nock__block"
                                                            src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                            alt="img"/>
                                                }
                                                </Link>

                                                <div className='actor--nock__block--basket'>
                                                    <h1 onClick={()=> basket(el)}>{el.name}</h1>
                                                    <p style={{
                                                        color:'red'
                                                    }}>{stuffed2}</p>
                                                    <button onClick={()=> baskets(el)}>Basket</button>
                                                    <p style={{
                                                        color:'red'
                                                    }}>{stuffed}</p>
                                                </div>

                                            </div>

                                    }



                            </div>
                        ))
                    }
                </div>
            </div>
    );
};

export default Actor;