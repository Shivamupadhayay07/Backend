import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImgCard from './components/ImgCard';
import { useEffect } from 'react';
import { useState } from 'react';

// import data from './data';


function App() {

  const [Data, setData]= useState([]);
  useEffect(()=>{
    const fetchdata = async () => {
      try{
        const response = await fetch ("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);

        // const dataArray = Object.keys(fetchdata).map ((id)=>({
        //   id,
        //   fetchdata[id],
        // }));


      }
      catch(error){
        console.log("Error occured", error);
      }
}; fetchdata();
  },[]);
  return (
    <div>
    <NavBar/> 
    <HomeCarousel/>
    <div className='img1'>
    {
      Data.map((obj)=>{
        
        return(
        <div key={obj.id}>
         <ImgCard title={obj.title} desc={obj.desc} image={obj.image}/>
        </div> )      
      })
    }      
    </div>
    
    </div>

  );
}

export default App;
