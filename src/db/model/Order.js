/**
 * @description 订单数据模型
 * @author kofzx
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

// order
const Order = seq.define('order', {
    id: {
        type: STRING,
        unique: true,
        primaryKey: true
    },
    uid: {
        type: STRING,
        comment: '管理员id',
    },
    mid: {
        type: STRING,
        comment: '音乐id'
    },
    count: {
        type: INTEGER,
        allowNull: false,
        comment: '下单数量'
    }
})

module.exports = Order