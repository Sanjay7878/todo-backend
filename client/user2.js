const socket = io("http://localhost:3000")

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlNjejZSdWFKciIsImlhdCI6MTU1OTI4NjU4MDcwMywiZXhwIjoxNTU5MzcyOTgwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6Im11bmkiLCJsYXN0TmFtZSI6InJhanUiLCJjb3VudHJ5IjoiSW5kaWEiLCJjb3VudHJ5Q29kZSI6Iis5MSIsIm1vYmlsZU51bWJlciI6MTIzNDU2LCJ1c2VySWQiOiJxdklyX1pFUFAiLCJlbWFpbCI6Im11bmkucmFqdUBnbWFpbC5jb20iLCJmcmllbmRzIjpbeyJmcmllbmRJZCI6ImFKblUtOE9DRCIsImZyaWVuZE5hbWUiOiJzYW5qYXkgYyIsImVtYWlsIjoic2FuamF5LnNhbjc4NzhAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjoiMTIzNDU2IiwicmVxdWVzdFN0YXR1cyI6ImRlY2xpbmUiLCJtb2RpZmllZE9uIjoiMjAxOS0wNS0zMVQwNzowOTowOC4wMDBaIiwiX2lkIjoiNWNmMGQzMTQwYTc2ZGMyM2EwYjc5ZWJmIn1dfX0.J8vs5GDevxBlLHoxj1gOQL7y34mjAXl0ArCFSegp4zw"

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
            friendId: friend.friendId
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