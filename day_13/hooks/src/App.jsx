import { useEffect, useState } from 'react'


function App() {
  const [count,setCount] = useState(0);

  const increase = () => {
    setCount(v=>++v>15 ?15:v);
  }
  const decrease = () => {
    setCount(v=>--v<0?0:v);
  }
  useEffect(()=>{
   const id= setInterval(increase,1000);

    return () => {
      clearInterval(id);
    }
  },[])
  return (
    <div>
      <h2>value: {count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      {count === 0 && <p>This is Minimum value</p>}
      {count === 15 && <p>This is Maximum value</p>}
    </div>
  )
}

export default App
