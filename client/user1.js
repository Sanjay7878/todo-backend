const socket = io("http://localhost:3000")

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IklubWFjWW9DMCIsImlhdCI6MTU1OTIyMTA1NjE1MywiZXhwIjoxNTU5MzA3NDU2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6InNhbmpheSIsImxhc3ROYW1lIjoiYyIsImNvdW50cnkiOiJJbmRpYSIsImNvdW50cnlDb2RlIjoiKzkxIiwibW9iaWxlTnVtYmVyIjoxMjM0NTYsInVzZXJJZCI6ImFKblUtOE9DRCIsImVtYWlsIjoic2FuamF5LnNhbjc4NzhAZ21haWwuY29tIiwiZnJpZW5kcyI6W119fQ.Jfk4rsz-Fd7Brs0nlpUnPsj7EAydu8EfDo_O_fZm458"

const userId = "aJnU-8OCD"

let friend = {
    friendName:'Muni Raju',
    friendId: 'qvIr_ZEPP',
    email: 'muni@gmail.com', 
    mobileNumber: 325454,
    modifiedOn: Date.now()
}
let editedToDoId = 'T3YzFsX1I'

let createTaskId = "vMcpBdXfNh"
let editTaskHistory = "L-g520MW3"
let changeStatusHistory = "m02doe2MO"
let deleteTaskHistory = "1o9ay3DiA"

let createSubTaskHistoryId = "0p7-3tc7Yu"
let editSubTaskHistory = "6oy87a6gp"
let changeSubTaskStatusHistory = "qsFl_7zZz"
let deleteSubTaskTaskHistory = "QVj26mN6j"

let chatSocket =() =>{

    socket.on('verify-user', (data)=>{
        console.log("socket trying to verify user")
        socket.emit('set-user', authToken)
    })

    socket.on(userId, (data)=>{
        console.log(data)
    })

    socket.on('online-user-list', (data)=>{
        console.log('Below are the users who are online')
        console.log(data)
    })
    
    $('#addFriend').on('click', ()=>{
        socket.emit('send-friend-request', friend)
    })
    
    $('#undoToDo').on('click', ()=>{
        socket.emit('undoEditToDo', editedToDoId)
    })

    $('#undoTask').on('click', ()=>{
        socket.emit('undoTask', createTaskId)
    })

    $('#undoTaskEdit').on('click', ()=>{
        socket.emit('undoEditTask', editTaskHistory)
    })

    $('#undoChangeTaskStatus').on('click', ()=>{
        socket.emit('undoTaskStatus', changeStatusHistory)
    })

    $('#undoDelete').on('click', ()=>{
        socket.emit('undoDelete', deleteTaskHistory)
    })

    $('#undoSubTask').on('click', ()=>{
        socket.emit('undoNewSubTask', createSubTaskHistoryId)
    })

    $('#undoSubTaskEdit').on('click', ()=>{
        socket.emit('undoEditSubTask', editSubTaskHistory)
    })

    $('#undoSubTaskStatus').on('click', ()=>{
        socket.emit('undoSubTaskStatus', changeSubTaskStatusHistory)
    })

    $('#undoSubDelete').on('click', ()=>{
        socket.emit('undoSubTaskDelete', deleteSubTaskTaskHistory)
    })
}

chatSocket()