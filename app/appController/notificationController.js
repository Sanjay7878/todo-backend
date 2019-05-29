const mongoose = require('mongoose')

/*Libraries*/
const check = require('../libs/check')
const response = require('../libs/response')
const logger = require('../libs/logger')


/*Models*/
const UserModel = mongoose.model('User') 
const NotificationModel = mongoose.model('Notification')

let getAllReceivedNotifications = (req, res) =>{
    
    let findUser = ()=>{
        return new Promise((resolve, reject)=>{
            UserModel.findOne({userId: req.query.userId}, (err, userDetails)=>{
                if(err){
                    logger.error(err.message, ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, `Failed to Find User`, 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(userDetails)){
                    logger.error('No User Found', ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, "No User Details Found", 404, null)
                    reject(apiResponse)
                } else {
                    logger.info('User Found', ' friendsController: findUserNotifications, findUser', 5)
                    resolve()
                }
            })
        })
    } // end find user

    let findNotification = () =>{
        return new Promise((resolve, reject)=>{
            NotificationModel.find({receiverId: req.query.userId}, (err, notifications)=>{
                if(err){
                    logger.error(err.message, ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, `Failed to Find User`, 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(notifications)){
                    logger.error('No User Found', ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, "No User Notifications Found", 404, null)
                    reject(apiResponse)
                } else {
                    logger.info('User Found', ' friendsController: findUserNotifications, findUser', 5)
                    resolve(notifications)
                }
            })
        })
    } // end find notifications

    findUser(req, res)
        .then(findNotification)
        .then((resolve)=>{
            let apiResponse = response.generate(false, "All User Received Notifications Found", 200, resolve)
            res.send(apiResponse)
        })
        .catch((err)=>{
            console.log(err)
            res.send(err)
        })

} // end find user Notifications

let getAllSentNotifications = (req, res)=>{

    let findUser = ()=>{
        return new Promise((resolve, reject)=>{
            UserModel.findOne({userId: req.query.userId}, (err, userDetails)=>{
                if(err){
                    logger.error(err.message, ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, `Failed to Find User`, 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(userDetails)){
                    logger.error('No User Found', ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, "No User Details Found", 404, null)
                    reject(apiResponse)
                } else {
                    logger.info('User Found', ' friendsController: findUserNotifications, findUser', 5)
                    resolve()
                }
            })
        })
    } // end find user

    let findNotification = () =>{
        return new Promise((resolve, reject)=>{
            NotificationModel.find({senderId: req.query.userId}, (err, notifications)=>{
                if(err){
                    logger.error(err.message, ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, `Failed to Find User`, 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(notifications)){
                    logger.error('No User Found', ' friendsController: findUserNotifications, findUser', 5)
                    let apiResponse = response.generate(true, "No User Notifications Found", 404, null)
                    reject(apiResponse)
                } else {
                    logger.info('User Found', ' friendsController: findUserNotifications, findUser', 5)
                    resolve(notifications) 
                }
            })
        })
    } // end find notifications

    findUser(req, res)
        .then(findNotification)
        .then((resolve)=>{
            let apiResponse = response.generate(false, "All User Sent Notifications Found", 200, resolve)
            res.send(apiResponse)
        })
        .catch((err)=>{
            console.log(err)
            res.send(err)
        })
} // end user sent notifications

module.exports = {
    getAllReceivedNotifications: getAllReceivedNotifications,
    getAllSentNotifications: getAllSentNotifications
}