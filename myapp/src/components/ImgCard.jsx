import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ImgCard(props) {

  const [Count , setCount] = useState(0);
  const Handleclick=()=>{
    setCount(Count+1)
  console.log("button clicked" , Count);
};

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
      {props.id}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text> 
        <Button onClick={Handleclick} variant="primary">Go somewhere - {Count}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
