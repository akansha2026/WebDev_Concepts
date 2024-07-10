export default function Conditional(){
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>}
        </div>
    )
}