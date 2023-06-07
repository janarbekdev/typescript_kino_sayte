import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getDeatil} from "../../Store/Redux/Action";
import {Link, useParams} from "react-router-dom";
import {TbHandFinger} from "react-icons/tb";
import Actor from "../Acotor/Actor";
import Home from "../Home/Home";

const Detail = () => {
    const {detail,loader,error} = useAppSelector(state => state.DetailSlice)
    const {language} = useAppSelector(state => state.poplularSlice)
    const {id} = useParams()
    const dispatch = useAppDispatch()
      useEffect(()=> {
           dispatch(getDeatil(id,language))

      },[language])
    console.log(detail)
     const [value,setValue] = useState(true)
    const {poster_path,backdrop_path,title} = detail
    return (
        <div >
            <div  style={{background:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat `, boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)", borderRadius:"10px", margin:"1% 0"}} id="detail">
                {
                    <div className="container">
                        <div className="detail">
                            <div className="detail--title" >
                                <img className="detail--title__img" style={{
                                    margin:"1.5% 2%",
                                    borderRadius:"10px",
                                }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>

                                <div className="detail--nav">
                                    <h1 className="detail--nav__name">{detail.title} <span>
                            ({detail.release_date && detail.release_date.slice(0,4)})
                        </span></h1>
                                      <div style={{
                                          display:'flex',
                                            // justifyContent:'space-between',
                                            alignItems:'center',
                                               padding:"20x 0"
                                      }}>
                                          <h1 className='detail--nav__chip'>  Born  </h1>
                                          <h2 className='detail--nav__die'>{  detail.release_date}</h2>
                                      </div>
                                    <div className="detail--nav__cir">

                                        <div className="detail--nav__cir--circle">
                                            <div className="detail--nav__cir--circle--border">
                                                 <h4>{detail.popularity && Math.floor( detail.popularity /100)}%</h4>
                                                {/*<p>{detail.vote_average &&  Math.floor(detail.vote_average / 4)}%</p>*/}
                                            </div>
                                        </div>
                                        <p className="detail--nav__cir--top">Average</p>
                                    </div>
                                    {/*<Link to={`https://www.fastxmovie.com`}>*/}
                                        <h1 style={{
                                            background:value ? 'red' : '',
                                            display:  value ? 'none': ''
                                        }} className='detail--nav__name2'>{detail.tagline}</h1>
                                    {/*</Link>*/}

                                    <TbHandFinger className='detail--nav__cir--finger' style={{
                                        background:value ? 'red' : '',
                                        display:  value ? 'none': 'block'
                                    }} />

                                    <p className="detail--nav__say">{"«"  + detail.original_title +  "»"}</p>
                                    <p className="detail--nav__overview">Overview : <br/> <br/>
                                        {detail.overview}
                                    </p>
                                    <button onClick={()=> setValue(!value)} >Watch</button>
                                </div>

                                {
                                   <div>

                                   </div>
                                }

                            </div>
                        </div>
                    </div>

                }
            </div>
            <p style={{
                color:"black",
                fontFamily:"Source Code Pro",
                fontSize:"30px",
                fontWeight:"800",
                  marginLeft:'21px'
            }}>Actors :</p>
            <Actor/>
        </div>
    );
};

export default Detail;