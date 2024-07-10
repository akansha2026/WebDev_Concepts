import Conditional from "./Conditional";
import Counter from "./Counter";
import Event from "./Event";
import Images from "./Images";
import Props from "./Props";

export default function App(){
    return (
        <div>
            <h1>My React App</h1>
            <p>Welcome to my React App</p>

            <Images />
            <Conditional />
            <Event />
            <Counter />
            <Props name="Akansha" age={20}/>
            {/* 

                props = {
                    name: "Akansha",
                    age: "20"
                }
             */}
        </div> 
    )
}