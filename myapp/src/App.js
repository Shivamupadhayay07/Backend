import './components/imgCard';
import './App.css';

function App() {
  return (
    <div className='container'>
    <h1>hello world </h1>
    <div className='row'>
    {data1.map((card, index)=>{
      <imgCard
      title = {card.title}
      desc={card.desc}
      ingurl={card.ingurl}
      />
    })}
    </div>
    
    </div>
   
  );
}

export default App;
