import bcrypt from 'bcryptjs';

// database
let users = [];
let currId = 1;

export function getAllUsers(_, res) {
    // const jsonBody = JSON.stringify(users);
    // res.send(jsonBody);

    res.json(users);
}

export function getUserById(req, res) {
    // Destructing the id from the request parameters
    const {id} = req.params
    
    // Finding the user with the given id
    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            res.json(users[i]);
            return;
        }
    }

    // If no user is found with the given id
    res.json({
        message : `User with id ${id} not found`
    })
}

export async function createUser(req, res) {
    const user = req.body;
    
    // Hashing the password
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    // Add id to the user
    user.id = currId;
    currId++;

    // Add the user to the users array
    users.push(user);

    // Send the user as response
    res.json({
        message : "User created successfully",
        user : user
    });
}

export function updateUser(req, res) {
    const {id} = req.params;
    const details = req.body;
    
    // Finding the user with the given id
    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            // Updating the user details
            users[i] = {
                ...users[i],
                ...details
            }
            res.json(users[i]);
            return;
        }
    }

    // If no user is found with the given id
    res.json({
        message : `User with id ${id} not found`
    })
}

export function updateUsername(req, res) {
    const {id} = req.params;
    const {username} = req.body;
    
    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            users[i].username = username;
            res.json(users[i]);
            return;
        }
    }

    res.json({
        message : `User with id ${id} not found`
    })
}

export async function updatePassword(req, res) {
    const {id} = req.params;
    const {password} = req.body;
    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            users[i].password = hashedPassword;
            res.json(users[i]);
            return;
        }
    }

    res.json({
        message : `User with id ${id} not found`
    })
}

export function updateEmail(req, res) {
    const {id} = req.params;
    const {email} = req.body;
    
    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            users[i].email = email;
            res.json(users[i]);
            return;
        }
    }

    res.json({
        message : `User with id ${id} not found`
    })
}

export function deleteAllUsers(req, res) {
    users = [];
    res.json({
        message : "All users deleted successfully"
    });
}

export function deleteUserById(req, res) {
    const {id} = req.params
    
    for(let i=0; i<users.length; i++){
        if(users[i].id == id){
            const deletedUser = users[i];
            users.splice(i, 1);
            res.json(deletedUser);
            return;
        }
    }

    res.json({
        message : `User with id ${id} not found`
    })
}