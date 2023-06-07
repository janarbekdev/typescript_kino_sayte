import React from 'react';
import tv from '../../img/tv.png'
const Vidio = () => {
    return (
         <div style={{
         }} id='vidio'>
             <div className='container'>
                 <img src={tv} alt=""/>
                 <video width={"3000px"} height={"30px"} autoPlay>
                     <source  src={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`}/>
                 </video>
             </div>

         </div>
    );
};

export default Vidio;