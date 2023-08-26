import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImgCard() {
    const [Count , setCount] = useState(0);
  const Handleclick=()=>{
    setCount(Count+1)
  console.log("button clicked" , Count);
};

// const [Count , setCount] = useState(0);
  const handleclick=()=>{
    setCount(Count-1)
  console.log("button clicked" , Count);
};
  return (
    <div>
    <Card style={{ width: '126vh'  , height:'50vh'}}>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/b23e76_571dc030ddac46799b4f4202e7adc4c8~mv2.png/v1/fill/w_2500,h_1500,al_c/b23e76_571dc030ddac46799b4f4202e7adc4c8~mv2.png" />
      <Card.Body>
        <Card.Title><h1>Counter App</h1></Card.Title>
        <Card.Text>
          <h3>COUNT : {Count}</h3>
        </Card.Text>
        <div className='button1'>
        <Button onClick={Handleclick} variant="primary">ADD/+</Button>
        <Button onClick={handleclick} variant="primary">SUB/-</Button>
        </div>

      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
