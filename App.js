import './App.css';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState('0');
  
  return (
    <div className="Calculator">
      <h1 className='h1'>Calculator</h1>
      <div className="display">{display}</div>
      <div className="buttons">
      < button onClick={() => setDisplay (display === '0' ? '1' : display + '1')}>1</button> <button onClick={() => setDisplay(display === '0' ? '2' : display + '2')}>2</button>
       <button onClick={() => setDisplay(display === '0' ? '3' : display + '3')}>3</button> <button onClick={() => setDisplay(display === '0' ? '4' : display + '4')}>4</button> 
       <button onClick={() => setDisplay(display === '0' ? '5' : display + '5')}>5</button>
      <button onClick={() => setDisplay(display === '0' ? '6' : display + '6')}>6</button> <button onClick={() => setDisplay(display === '0' ? '7' : display + '7')}>7</button>
       <button onClick={() => setDisplay(display === '0' ? '8' : display + '8')}>8</button> <button onClick={() => setDisplay(display === '0' ? '9' : display + '9')}>9</button>
        <button onClick={() => setDisplay(display === '0' ? '0' : display + '0')}>0</button>

      <button className='operatorBtn' onClick={() => setDisplay(display + '+')}>+</button> <button className='operatorBtn' onClick={() => setDisplay(display + '-')}>-</button>
       <button className='operatorBtn' onClick={() => setDisplay(display + '*')}>x</button> <button className='operatorBtn' onClick={()=> setDisplay(display +'/')}>÷</button>
        <button className='equalBtn' onClick={() => setDisplay(String(eval(display)))}>=</button> <button className='CBtn' onClick={()=> setDisplay('0')}>C</button>
        <button className='delBtn' onClick={() => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')}>Del</button>
    </div>
    
    </div>
  );
}

export default App;
