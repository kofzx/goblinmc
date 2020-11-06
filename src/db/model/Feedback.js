/**
 * @description 反馈信息模型
 * @author kofzx
 */

const seq = require('../seq')
const { STRING } = require('../types')

// feedback
const Feedback = seq.define('feedback', {
    id: {
        type: STRING,
        unique: true,
        primaryKey: true
    },
    keyword: {
        type: STRING,
        allowNull: false,
        comment: '表中没有的歌'
    }
})

module.exports = Feedback