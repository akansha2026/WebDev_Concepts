export default function Event(){
    function alertMessage(){
        alert("Button clicked");
    }
    return (
        <div>
            <button onClick={alertMessage}>Click me</button>
        </div>
    )
}