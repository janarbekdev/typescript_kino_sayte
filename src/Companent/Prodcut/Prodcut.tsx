import React from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import Include from "../Include/Include";

const Prodcut = () => {
     const {product} = useAppSelector(state => state.prodcutSlice)
    return (
        <div style={{
              padding:'70px0'
        }} id='product'>
            <div className='container'>

                <div style={{
                     padding:'70px 0',
                    display:'flex',
                      alignItems:'center',
                       justifyContent:'space-around',
                      flexWrap:'wrap'
                }} className='product'>
                    {
                        product.map(el=> (
                            <Include el={el}/>
                        ))
                    }

                </div>
            </div>

        </div>

    );
};

export default Prodcut;