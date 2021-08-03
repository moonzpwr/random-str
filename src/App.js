
import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import {map} from 'rxjs/operators'
import './App.css';


function App() {
  const [string, setString] = useState('')
  const [color, setColor] = useState('black')

  useEffect(() => {
    let symbols = [];
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


 const observable = interval(3000)
    .pipe(
      map(v => {
        for (let i = 0; i < 5; i += 1) {
      symbols.push(possible.charAt(Math.floor(Math.random() * possible.length)))
        }
        return symbols.join('')
       })
    )
   .subscribe(res => {
     setString(res)
     if (res.toLowerCase() === res.toLowerCase().split('').reverse().join('')) {
      setColor('red')
      } else if (parseInt(res).toString().length === 5) {
      setColor('blue')
      }
   })
    
    return () => {
      observable.unsubscribe()
    }

    
  }, [string])

  return (
    <div style={{color: color}} className='container'>
      {!string.includes(0) && string}
    </div>
  );
}

export default App;
