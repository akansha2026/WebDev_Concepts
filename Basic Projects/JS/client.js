// fetch("http://127.0.0.1:8080/mydetails", {
//     method : "GET"
// })
// .then((result) => {
//     result.text()
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.log(err)
// });



async function getData(){
    try {
        const res = await fetch("http://127.0.0.1:8080/mydetails", {
            method : "GET"
        })
        const data = await res.text();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


async function postData(){
    const data = {
        name : "Akansha",
        age : "20 years",
        degree : "B.sc."
    }
    const json = JSON.stringify(data);
    try {
        const res = await fetch("http://127.0.0.1:8080/myData", {
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :  json
        })
        const dataCame = await res.json();
        console.log(dataCame);
    } catch (error) {
        console.log(error);
    }
}
postData();
getData();