const socket = io("http://localhost:3000")

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlVkbEJtWmltOSIsImlhdCI6MTU1OTExNjY4ODMwOCwiZXhwIjoxNTU5MjAzMDg4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6InNhbmpheSIsImxhc3ROYW1lIjoiYyIsImNvdW50cnkiOiJJbmRpYSIsImNvdW50cnlDb2RlIjoiKzkxIiwibW9iaWxlTnVtYmVyIjoxMjM0NTYsInVzZXJJZCI6ImFKblUtOE9DRCIsImVtYWlsIjoic2FuamF5LnNhbjc4NzhAZ21haWwuY29tIiwiZnJpZW5kcyI6W3siZnJpZW5kSWQiOiJxdklyX1pFUFAiLCJmcmllbmROYW1lIjoiTXVuaSBSYWp1IiwiZW1haWwiOiJtdW5pQGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6IjMyNTQ1NCIsInJlcXVlc3RTdGF0dXMiOiJwZW5kaW5nIiwibW9kaWZpZWRPbiI6IjIwMTktMDUtMjNUMTI6NTA6MjkuMDAwWiIsIl9pZCI6IjVjZTY5NzE2NTRkNWI1MmYzY2VhN2Q4NSJ9XX19.TN6X5LUclNzBAUrNhx6nY3TgrT-IkFOMLg9lN0sO6Dw"

const userId = "aJnU-8OCD"

let friend = {
    friendName:'Muni Raju',
    friendId: 'qvIr_ZEPP',
    email: 'muni@gmail.com', 
    mobileNumber: 325454,
    modifiedOn: Date.now()
}
let editedToDoId = 'o4DWsYoN6'

let createTaskId = "vMcpBdXfNh"
let editTaskHistory = "qkPSx_PBD"
let changeStatusHistory = "m02doe2MO"
let deleteTaskHistory = "1o9ay3DiA"

let createSubTaskHistoryId = "fsoprHQRvX"
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