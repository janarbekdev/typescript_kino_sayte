import React from 'react';
import {useAppSelector} from "../../hook/useAppSelector";
import dusk from '../../img/joni.jpg'
import {useNavigate} from "react-router-dom";

const Actorbasket = () => {
     const nav = useNavigate()
       const {actorbasket} = useAppSelector(state => state.ActorBasketSLice)
    return (
        <div>
            {actorbasket.map(el=> (
                    <div  id='actorBasket'>
                        <div className="container">
                            <table className="actorBasket">
                                <div className="actorBasket--line">
                                    {
                                        el.profile_path ?
                                            <img onClick={()=> nav(`/job_com/${el.id}`)} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt="img"/>:
                                            <img style={{width:'100%',height:'200px', margin:'10px 10px',borderRadius:'10px'}}  className='actorBasket--line__joni' src={dusk} alt="img"/>
                                    }

                                </div>
                                <div className="actorBasket--line2">
                                        <h1>{el.popularity}%</h1>
                                </div>
                                <div className="actorBasket--line2">
                                     <h1>{el.name}</h1>
                                </div>
                                <div className="actorBasket--line2">
                                     <h1>{el.overview}</h1>
                                </div>
                                <div className="actorBasket--line2">
                                      <button>{el.name}</button>
                                     <h1></h1>
                                </div>
                            </table>
                        </div>

                    </div>
                ))
            }

        </div>
    );
};
export default Actorbasket;