import React, {useContext, useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getLanguage, getPopular} from "../../Store/Redux/Action";
import Include from "../Include/Include";
import wait from '../../img/wait.png'
const Popular = () => {
       const [next,setNext] = useState(1)
    const {popular, loader, language, error} = useAppSelector(state => state.poplularSlice)
    const {product} = useAppSelector(state => state.prodcutSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPopular(language,next))
          setNext(next)
    }, [language,next])

    return (
        <div style={{
            boxShadow: 'inset 900px 00 400px rgb(0,0,0.7)'

        }} id='popular'>
            <div className="container">
                <div className="popular">
                    <div className="popular--top">
                        {
                            error &&
                            <div style={{
                                marginLeft: '30rem',

                            }}>
                                <div className='popular--top__next--wait'>
                                    <img className='popular--top__wait' src={wait} alt="img"/>


                                </div>
                                <h1 style={{
                                    color: 'red',
                                    fontSize: '20px'
                                }}>there have Error possible Thereower you all something look again please </h1>

                            </div>
                        }
                        {
                            popular.map(el => (
                                <Include el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popular;