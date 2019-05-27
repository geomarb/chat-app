const users = []

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //Check for existing user
    const existingUser = users.find(user => user.room === room && user.username === username)
    // Validate username

    if (existingUser) return { error: 'Username is in use!' }

    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const getUserIndex = id => users.findIndex(user => user.id === id)

const removeUser = id => {
    const index = getUserIndex(id)
    if (index !== -1) return users.splice(index, 1)[0]
}

const getUser = id => {
    const index = getUserIndex(id)
    if (index !== -1) return users[index]
}

const getUsersInRoom = room => {
    room = room.trim().toLowerCase()
    return users.filter(user => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
// console.log(addUser({
//     id: 22,
//     username: 'Andrew',
//     room: 'South Philly',
// }))

// const res = addUser({
//     id: 33,
//     username: 'sandrew   ',
//     room: '  south philly',
// })

// addUser({
//     id: 42,
//     username: 'Mike',
//     room: '  south philly',
// })

// console.log(addUser({
//     id: 32,
//     username: 'Andrew',
//     room: 'Center City',
// }))

// console.log(users)

// const user = getUser(222)
// console.log(user)
// // const removedUser = removeUser(33)
// // console.log(removedUser)
// console.log(users)
// console.log('InRoom', getUsersInRoom('CENTER CITY'))
