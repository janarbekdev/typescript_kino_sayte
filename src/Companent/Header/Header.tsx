import React, {useEffect, useState} from 'react';
import we from '../../img/kinos.jpeg'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getDeatil, getLanguage, getPopular, getTopRated,} from "../../Store/Redux/Action";
import {useAppSelector} from "../../hook/useAppSelector";
import {FcSearch} from "react-icons/fc";
const Header = () => {
    const [next,setNext] = useState(1)
      const [value,setValue] = useState('')
       const [pinch, sePinch] = useState(true)
      const handleCahge = ()=> {
         sePinch(!pinch)
      }
      const navigate = useNavigate()
        const {home}  = useAppSelector(state => state.homeSlice)
    const {popular, loader, language, error} = useAppSelector(state => state.poplularSlice)
  function getSearch (){
        navigate(`/search/${value}`)
  }

    const dispatch = useAppDispatch()
    useEffect(()=> {
        setNext(next)
        dispatch(getPopular(language,next))
        dispatch(getTopRated(language,next))
        dispatch(getDeatil(language,next))
    },[language,next])
         const as = ()=> {

         }
        const handleChange =(e: React.ChangeEvent<any>)=> {
           dispatch(getLanguage(e.target.value))
    }

    if (next === 0){
           setNext( 1)
    }
  const nav = useNavigate()
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--imgs">

                        <img onClick={()=> nav(`/`)} src={we} alt="img"/>
                        <div className="header--imgS__bro">
                            <NavLink className='header--imgs__log--link' to='/popular' >
                                <a href="#">Popular</a>

                            </NavLink>
                            <NavLink  className='header--imgs__log--link' to='/'>
                                <a href="#">Home</a>

                            </NavLink>
                            <NavLink className='header--imgs__log--link' to='/top' >
                                <a href="#">TopRated</a>

                            </NavLink>
                            <NavLink className='header--imgs__log--link' to='/product' >
                                <a href="#">Product</a>

                            </NavLink>
                            <NavLink className='header--imgs__log--link' to='/basket' >

                                <a href="#">Basket</a>

                            </NavLink>

                            <button style={{
                                   width: '66px',
                                   transition: '3s',
                                    height:'30px',

                                     background:'wheat',
                                      borderRadius:'10px',
                                      fontSize: '17px',
                                      transform:'scale(1)'
                            }}  className='header--imgS__bro--btn'  onClick={()=> setNext(next - 1)} > foword</button>  <button style={{
                                   width: '66px',
                                   transition: '3s',
                                    height:'30px',

                                     background:'wheat',
                                      borderRadius:'10px',
                                      fontSize: '17px',
                                      transform:'scale(1)',
                                      margin:'10px 10px'
                            }}  className='header--imgS__bro--btn'  onClick={()=> setNext(next + 1)} >  Back</button>
                        </div>
                         <select onChange={(e)=> handleChange(e)}>
                             <option value="en-US">English</option>
                             <option value="ru-RU">Russia</option>
                             <option value="ja-JP">Japan</option>
                             <option value="uz-UZ">Uzbek</option>
                             <option value="tr-TR">Turk</option>
                             <option value="fr-GR">Fransy</option>
                             {/*<option value="kg-KG">Kyrgyz</option>*/}

                         </select>
                        <p style={{
                             margin: '0 10px',
                            color: 'red'
                        }}>{next}</p>

                    </div>
                     <div className="header--input">

                         <input onChange={(e:any)=> setValue(e.target.value)} type="search"/>
                           <div className='header--input__da' >
                               <button onClick={(e:any)=> getSearch()}>Add</button>
                               <FcSearch onClick={handleCahge} className='header--input__as'/>
                           </div>

                     </div>
                </div>
            </div>
            <div className="header2">
                <input style={{display: pinch ? 'none': 'block' }}  onChange={(e:any)=>setValue(e.target.value)} placeholder='there are you look for' type="search"/>
            </div>
        </div>
    );
};

export default Header;