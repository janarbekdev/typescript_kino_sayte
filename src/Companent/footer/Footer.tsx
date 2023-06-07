import React, {useEffect, useState} from 'react';
import we from "../../img/kinos.jpeg";
import {NavLink, useNavigate} from "react-router-dom";
import {FcSearch} from "react-icons/fc";
import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getDeatil, getPopular, getTopRated} from "../../Store/Redux/Action";

const Footer = () => {
    const [next,setNext] = useState(1)
    const [value,setValue] = useState('')
    const [pinch, sePinch] = useState(true)
    const handleCahge = ()=> {
        sePinch(!pinch)
    }
    const dispatch = useAppDispatch()
    useEffect(()=> {
        setNext(next)
        dispatch(getPopular(language,next))
        dispatch(getTopRated(language,next))
        dispatch(getDeatil(language,next))
    },[next])
    const navigate = useNavigate()

    const {popular, loader, language, error} = useAppSelector(state => state.poplularSlice)
    function getSearch (){
        navigate(`/search/${value}`)
    }
    return (
        <div id='footer'>
            <div className="container">
                <div className="header">
                    <div className="header--imgs">
                        <img onClick={()=> navigate(`/`)} src={we} alt="img"/>
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
                        <p style={{
                            margin: '0 10px',
                            color: 'red'
                        }}>{next}</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;