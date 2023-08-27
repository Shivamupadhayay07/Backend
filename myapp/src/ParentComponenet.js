import React, { Children, useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponenet() {
    const [data , setdata]=useState(null);
    const HandleChild = (Children)=>{
        setdata(Children);

    };
  return (
    <div>
      <ChildComponent
      onDataFromChild={HandleChild}
      />
      <p>{data}</p>
    </div>
  )
}

export default ParentComponenet
