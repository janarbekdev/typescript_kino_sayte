import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getTopRated} from "../../Store/Redux/Action";
import Include from "../Include/Include";
import wait from "../../img/wait.png";
const TopRated = () => {
     const {top,loader,error} = useAppSelector(state => state.topRatedSclice)
      const {language}= useAppSelector(state => state.poplularSlice)
      const dispatch = useAppDispatch()
       const [next] = useState(1)
       useEffect(()=> {
            dispatch(getTopRated(language,next))
       },[language])
    console.log(top)
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    <div className="popular--top">
                        {
                            error &&
                            <div style={{
                                marginLeft:'30rem',

                            }}>
                                <div  className='popular--top__next--wait'>
                                    <img  className='popular--top__wait' src={wait} alt="img"/>


                                </div>
                                <h1 style={{
                                    color:'red',
                                    fontSize: '20px'
                                }}>there have Error possible Thereower you all something  look again please     </h1>

                            </div>

                        }
                        {
                            top.map(el=> (
                                <Include el={el}/>

                            ))
                        }

                    </div>
                </div>
            </div>

        </div>

    );
};
export default TopRated;