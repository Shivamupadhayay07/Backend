import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImgCard from './components/ImgCard';

import data from './data';






function App() {
  return (
    <div>
    <NavBar/> 
    <HomeCarousel/>
    <div className='img1'>
    {
      data.map((obj)=>{
        
        return <ImgCard title={obj.title} desc={obj.desc} imgurl={obj.imgurl}/>
       
             
      })
    }      
    </div>
    
    </div>

  );
}

export default App;
