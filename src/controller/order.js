/**
 * @description order controller
 * @author kofzx
 */

const { createOrder } = require('../services/order')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createOrderFailInfo } = require('../model/ErrorInfo')

/**
 * 生成订单方法
 * @param {string} uid 管理员id
 * @param {string} mid 音乐id
 * @param {number} count 下单数量
 */
async function generateOrder({ uid, mid, count }) {
    try {
        await createOrder({ uid, mid, count })
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
		return new ErrorModel(createOrderFailInfo)
    }
    
}

module.exports = {
    generateOrder
}