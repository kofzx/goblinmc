/**
 * @description 数据模型入口文件
 * @author kofzx
 */

const User = require('./User')
const Music = require('./Music')
const Order = require('./Order')
const Feedback = require('./Feedback')

module.exports = {
    User,
    Music,
    Order,
    Feedback
}