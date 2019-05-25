const appConfig = require('../../appConfig/appConfig')
const friendsConstroller = require('../appController/friendsController')
const notificationController = require('../appController/notificationController')

const auth = require('../middleware/auth')

// function to set up the routing in the application
module.exports.setRouter = (app) =>  {

    let baseUrl = `${appConfig.apiVersion}/friends`

    //params: userId
    app.get(`${baseUrl}/get/friend-requests`, friendsConstroller.getAllFriendRequests)
    /**
     * @api {get} http://todo.sanjayinfotechy.com/api/v1/friends/get/friend-requests Get All Particular User Friend Requests
     * @apiVersion 0.0.1
     * @apiGroup Friends
     * 
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "All Friend Requests Found'",
        * "status": 200,
        * "data": {
                    "_id": "string",
                    "friends": [
                        {
                            "friendId": "string",
                            "friendName": "string",
                            "email": "string",
                            "mobileNumber": "number",
                            "requestStatus": "string",
                            "modifiedOn": "date",
                            "_id": "string"
                        }
                    ]
                }
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Friends Found,
        * "status": 404,
        * "data": null
        * }
     */

    //params: userId
    app.get(`${baseUrl}/get/sent-requests`, friendsConstroller.getAllSentRequested)
    /**
     * @api {get} http://todo.sanjayinfotechy.com/api/v1/friends/get/sent-requests Get All Particular User Sent Requests
     * @apiVersion 0.0.1
     * @apiGroup Friends
     * 
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "All Sent Requests Found",
        * "status": 200,
        * "data": {
                    "_id": "string",
                    "friends": [
                        {
                            "friendId": "string",
                            "friendName": "string",
                            "email": "string",
                            "mobileNumber": "number",
                            "requestStatus": "string",
                            "modifiedOn": "date",
                            "_id": "string"
                        }
                    ]
                }
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Friends Found,
        * "status": 404,
        * "data": null
        * }
     */

    //params: userId
    app.get(`${baseUrl}/get/all-friends`, friendsConstroller.getAllFriends)
    /**
     * @api {get} http://todo.sanjayinfotechy.com/api/v1/friends/get/all-friends Get All Friends Of A User
     * @apiVersion 0.0.1
     * @apiGroup Friends
     * 
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "All Friends Found",
        * "status": 200,
        * "data": {
                    "_id": "string",
                    "friends": [
                        {
                            "friendId": "string",
                            "friendName": "string",
                            "email": "string",
                            "mobileNumber": "number",
                            "requestStatus": "string",
                            "modifiedOn": "date",
                            "_id": "string"
                        }
                    ]
                }
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": false,
        * "message": "No Friends Found,
        * "status": 404,
        * "data": null
        * }
     */

    //params: userId
    app.get(`${baseUrl}/get/non-friends`, friendsConstroller.getAllNonFriends)
    /**
     * @api {get} http://todo.sanjayinfotechy.com/api/v1/friends/get/non-friends Get All Users Who are Not Friends
     * @apiVersion 0.0.1
     * @apiGroup Friends
     * 
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "All Users Found",
        * "status": 200,
        * "data": [
                    {
                        "firstName": "string",
                        "lastName": "string",
                        "country": "string",
                        "countryCode": "string",
                        "mobileNumber": number,
                        "createdOn": "date",
                        "userId": "string",
                        "email": "string",
                        "friends": []
                    },
                    .........
                ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": false,
        * "message": "No Friends Found,
        * "status": 404,
        * "data": null
        * }
     */
    
     // params: userId
     app.get(`${baseUrl}/get/received/notifications`, notificationController.getAllReceivedNotifications)

     //params: userId
     app.get(`${baseUrl}/get/sent/notifications`, notificationController.getAllSentNotifications)
            
} // end set Router
