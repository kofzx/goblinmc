/**
 * @description order service
 * @author kofzx
 */

const { Order } = require('../db/model/index')
const { v4: uuidv4 } = require('uuid')

/**
 * 生成订单
 * @param {string} uid 管理员id
 * @param {string} mid 音乐id
 * @param {number} count 下单数量
 */
async function createOrder({ uid, mid, count }) {
    const result = await Order.create({
        id: uuidv4(),
        uid,
        mid,
        count
    })

    return result.dataValues
}

module.exports = {
    createOrder
}