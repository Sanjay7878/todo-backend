const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newNotification = new Schema({
    notificationId: {type: String, unique: true},
    senderId: {type: String, default: ''},
    receiverId: {type: String, default: ''},
    message: {type: String, default: ''},
    notifiedOn: {type: Date, default: Date.now},
    seen: {type: Boolean, default: false}
})

module.exports = mongoose.model('Notification', newNotification)