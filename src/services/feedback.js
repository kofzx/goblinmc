/**
 * @description feedback service
 * @author kofzx
 */

const { Feedback } = require('../db/model/index')
const { v4: uuidv4 } = require('uuid')

/**
 * 创建反馈信息
 * @param  {string} keyword 未找到的歌名
 */
async function createFeedback(keyword) {
    const result = await Feedback.create({
        id: uuidv4(),
        keyword
    })

    return result.dataValues
}

module.exports = {
	createFeedback
}