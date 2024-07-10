const data = [
    "https://images.unsplash.com/photo-1566276423184-a8c13d2a88a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwbGlnaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1520099915051-e4cb8ab04de9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZWV0JTIwbGlnaHR8ZW58MHx8MHx8fDA%3D"
]

function fn(url, idx){
    return <img key={idx} src={url} />
}

export default function Images(){
    const newArrayOfImages = data.map(fn);
    return (
        <div className="images">
            {/* <img src={data[0]} />
            <img src={data[1]} /> */}
            {newArrayOfImages}
        </div>
    )
}