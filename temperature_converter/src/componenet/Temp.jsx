import React, { useState } from 'react'

const  Temp = ()=> {
    // const [Data , SetData]= useState({
    //     Celcius:" ",
    //     Ferhenhit:" "
    // });
    // const HandleChange = (e)=>{
    //     const {name, value } = e.target;
    //     SetData((preData)=>({
    //         ...preData,
    //         [name]:value,
    //     }
    //     ));   
    // }
    
    const [Celcius,setCelcius] = useState(0)
    const [Ferhenhit,setFerhenhit] = useState(32)

    const HandleFerhenhit =(e)=>{
        const value =e.target.value;
        setFerhenhit(value);
        setCelcius(ftoc(value));
    };
    const HandleCelcius =(e)=>{
        const value =e.target.value;
        setCelcius(value);
        setFerhenhit(ctoc(value));
    };

    const ftoc = (Ferhenhit)=>{
        return ((Ferhenhit-32)*5)/9;
    };

    const ctoc = (Celcius)=>{
        return (Celcius * 9)/5+32;
    }




    // const HandleSubmit =(e) => {
    //     e.preventDefault();
    //     console.log(Data)
    // }
  return (
    <div>
      <div>Temperature Converter</div>
      
      <div>
          <label>Celcius</label>
          <input type='text'  name='Celcius' value={Celcius} onChange={HandleCelcius}/>
      </div>   
      <div>
      <label>Ferhenhit</label>
      <input type='text' name='Ferhenhit' value={Ferhenhit} onChange={HandleFerhenhit}/>
      </div>
      
           
    </div>
  )
}

export default Temp
