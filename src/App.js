
import { useEffect, useState } from 'react';
// import { interval } from 'rxjs';
// import {take, map, scan} from 'rxjs/operators'
import './App.css';


function App() {
  const [string, setString] = useState('')
  const [color, setColor] = useState('black')

  
  // first render str
   useEffect(() => {
    let str = [];
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 5; i += 1) {
      str.push(possible.charAt(Math.floor(Math.random() * possible.length)))
      }
    
      setString(str.join(''))
   }, [])
  
  //every 3sec render
  useEffect(() => {
    let symbols = [];
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const interval = setInterval(() => {
      for (let i = 0; i < 5; i += 1) {
      symbols.push(possible.charAt(Math.floor(Math.random() * possible.length)))
      }

      const str = symbols.join('')
      setString(str)

      setColor('black')
     
      if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) {
      setColor('red')
      } else if (parseInt(str).toString().length === 5) {
      setColor('blue')
      }
      
    }, 3000)
    
    return () => {
      clearInterval(interval)
    }
  }, [string])

  return (
    <div style={{color: color}} className='container'>
      {!string.includes(0) && string}
    </div>
  );
}

export default App;
