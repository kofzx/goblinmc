/**
 * @description 用户数据模型
 * @author kofzx
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

// users
const User = seq.define('user', {
    id: {
        type: STRING,
        unique: true,
        primaryKey: true
    },
    ismanager: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员'
    },
    unlocked: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '是否解锁'
    },
    username: {
        type: STRING,
        allowNull: true,
        unique: true,
        comment: '用户名，可以为空'
    },
    password: {
        type: STRING,
        allowNull: true,
        comment: '密码，可以为空'
    },
    mobile: {
        type: STRING,
        allowNull: true,
        comment: '手机号，可以为空'
    }
})

module.exports = User