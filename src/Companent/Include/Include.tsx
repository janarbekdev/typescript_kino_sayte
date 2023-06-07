import React, {useEffect, useState} from 'react';
import {MdSubdirectoryArrowRight} from "react-icons/md";
import {Ipopular} from "../../Type/Interface";
import {useAppSelector} from "../../hook/useAppSelector";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {getLanguage, getPopular} from "../../Store/Redux/Action";
import {fetchingProduct} from "../../Store/CompanentSlice/ProdcutSlice";
import {fethchingBasket} from "../../Store/CompanentSlice/basketSlice";
 export interface mocking {
    el:Ipopular
}
const Include = ({el}:mocking) => {
      const [next,setnext] = useState(10)
      const {product} = useAppSelector(state => state.prodcutSlice)
       const favorite = ()=> {
            dispatch(fetchingProduct(el))
           if (dim === 0){
               setDim(1)
           }
             setDim(dim - 1)

       }
    const basket = ()=> {
        setPlus(plus + 1)
        dispatch(fethchingBasket(el))
    }
    const [plus,setPlus] = useState(0)
    const [dim,setDim] = useState(0)
    const {language} = useAppSelector(state => state.poplularSlice)
      const dispatch = useAppDispatch()
      useEffect(()=> {
             setnext(next)
            dispatch(getPopular(language,next))
      },[language,next,plus])
    return (
        <div id='include'>
            <div className="container">
                <div className="include">
                    <div className="include--top">
                        <div className='include--top__block '>
                                  <div className='include--top__block--ru '>
                                      <Link to={`/detail_com/${el.id}`} >
                                      <img  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.backdrop_path}`} alt="img"/>
                                      </Link>
                                      <h1>{el.title}</h1>

                                      <div className='include--top__block--ru__aunt' style={{
                                          display: 'flex',
                                            alignItems:'center',
                                            justifyContent:'space-between'}}>
                                          <h2 style={{
                                              fontSize:'30px' ,
                                              color:'red'
                                          }}>{plus}</h2>
                                          <h2 style={{
                                              fontSize:'30px' ,
                                              color:'green',
                                                margin:'010px'
                                          }}>{dim}</h2>

                                          <button  onClick={basket}>{el.popularity}
                                              < MdSubdirectoryArrowRight style={{
                                                  color:"wheat",
                                                  fontSize:'20px',
                                                  marginLeft:'3px'
                                              }} />
                                          </button>
                                          <button  onClick={favorite}>favorite
                                              < MdSubdirectoryArrowRight style={{
                                                  color:"wheat",
                                                  fontSize:'20px',
                                                  marginLeft:'3px'
                                              }} />
                                          </button>

                                      </div>

                                  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Include;