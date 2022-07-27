import React,{useState,useEffect} from 'react'

const UseEffect = () => {

    const [state, setstate] = useState(0);
    const [count, setCount] = useState(1);


    useEffect(() => {
        return () => {
            setCount(count+1);
        };
    }, [count]);


  return (
    <div className='container'>
        <h3>Count : {state}</h3>
      <button onClick={() =>setstate(state+1)}>+</button>

        <h3>You have clicked {count-1} times</h3>
    </div>
  )
}

export default UseEffect;
