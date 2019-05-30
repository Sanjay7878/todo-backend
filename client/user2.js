const socket = io("http://localhost:3000")

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlZJRHUyLVQxbSIsImlhdCI6MTU1OTE5OTk3NDI2OCwiZXhwIjoxNTU5Mjg2Mzc0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6Im11bmkiLCJsYXN0TmFtZSI6InJhanUiLCJjb3VudHJ5IjoiSW5kaWEiLCJjb3VudHJ5Q29kZSI6Iis5MSIsIm1vYmlsZU51bWJlciI6MTIzNDU2LCJ1c2VySWQiOiJxdklyX1pFUFAiLCJlbWFpbCI6Im11bmkucmFqdUBnbWFpbC5jb20iLCJmcmllbmRzIjpbXX19.VRR51uXrey1a0sZLArYrTpznn4pFp32WqVSk1ciKF9U"

const userId = "qvIr_ZEPP"

let friend = {
    friendName:'Sanjay Raju',
    friendId: 'aJnU-8OCD',
    email: 'sanjay@gmail.com', 
    mobileNumber: 325454,
    modifiedOn: Date.now()
}

let notificationId = 'O8JkJdz6O'
let chatSocket =() =>{

    socket.on('verify-user', (data)=>{
        console.log("socket trying to verify user")
        socket.emit('set-user', authToken)
    })

    socket.on('online-user-list', (data)=>{
        console.log('Below are the users who are online')
        console.log(data)
    })

    socket.on(userId, (data)=>{
        console.log(data)
    })
    
    $('#addFriend').on('click', ()=>{
        let data = {
            user: userId,
            friend: friend.friendId
        }
        socket.emit('accept-friend-request', data)
    })

    $('#decline').on('click', ()=>{
        let data = {
            status: 'decline',
            user: userId,
            friend: friend.friendId
        }
        socket.emit('change-status', data)
    })

    $('#removeFriend').on('click', ()=>{
        let data = {
            user: userId,
            friend: friend
        }
        socket.emit('remove-friend', data)
    })
    
    $('#seenNotification').on('click', ()=>{
        socket.emit('mark-seen', notificationId)
    })
}

chatSocket()