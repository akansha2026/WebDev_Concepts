import {useState} from 'react';

export default function Counter(){
    // Destruction assignment
    const [count, setCount] = useState(0); // [0, function]

    function increment(){
        setCount(count + 1);
        console.log(count);
    }
    function decrement(){
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}