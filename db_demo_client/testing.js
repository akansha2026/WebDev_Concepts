const baseUrl = 'http://localhost:8080'

// Get all users
async function getAllUsers(){
    try {
        const res = await fetch(`${baseUrl}/users`, {
            method: 'GET'
        })
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Get user by ID
async function getUserById(id){
    try {
        const res = await fetch(`${baseUrl}/users/${id}`, {
            method: 'GET'
        })
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Create user
async function createUser(username, email, password){
    // JavaScript object representing the user
    const user = {
        username : username,
        email : email,
        password : password
    }
    // Convert the JavaScript object to a JSON string
    const body = JSON.stringify(user);
    try {
        const res = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Update user
async function updateUser(id, username, email){
    // JavaScript object representing the user
    const user = {
        username : username,
        email : email,
    }
    // Convert the JavaScript object to a JSON string
    const body = JSON.stringify(user);
    try {
        const res = await fetch(`${baseUrl}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


async function updateUsername(id, username){
    const user = {
        username
    }
    const body = JSON.stringify(user)
    try {
        const res = await fetch(`${baseUrl}/users/${id}/username`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : body
        })
        const data = await res.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


async function updatePassword(id, password){
    const user = {
        password
    }
    const body = JSON.stringify(user)
    try {
        const res = await fetch(`${baseUrl}/users/${id}/password`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : body
        })
        const data = await res.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function updateEmail(id, email){
    const user = {
        email
    }
    const body = JSON.stringify(user)
    try {
        const res = await fetch(`${baseUrl}/users/${id}/email`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : body
        })
        const data = await res.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(id){
    try {
        const res = await fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE',
        })
        const data = await res.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteAll(){
    try {
        const res = await fetch(`${baseUrl}/users`, {
            method: 'DELETE',
        })
        const data = await res.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}