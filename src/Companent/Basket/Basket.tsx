import React from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import Include from "../Include/Include";

const Basket = () => {
     const {basket} = useAppSelector(state => state.basketSlice)
    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
                    {
                        basket.map(el=> (
                            <Include el={el} />
                            // <div>
                            //     <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                            //     <h1>{el.title}</h1>
                            // </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Basket;