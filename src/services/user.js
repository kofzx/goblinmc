/**
 * @description user service
 * @author kofzx
 */

const { User } = require('../db/model/index')
const Sequelize = require('sequelize')
const seq = require('../db/seq')

/**
 * 佛系获取用户信息
 * @param  {string} id 用户id
 * @param  {string} username 用户号
 * @param  {string} password 密码
 */
async function getUserInfo({id, username, password}) {
    const whereOpt = {}
    if (id) {
		Object.assign(whereOpt, { id })
    }
    if (username) {
		Object.assign(whereOpt, { username })
    }
    if (password) {
		Object.assign(whereOpt, { password })
    }
    
    const result = await User.findOne({
        where: whereOpt
    })

    if (result == null) {
        // 未找到
        return result
    }

	return result.dataValues
}

/**
 * 创建游客账户
 * @param  {[string]} id 用户id
 */
async function createUser(id) {
    const result = await User.create({
        id,
        ismanager: 0,
        unlocked: 0
    })

    return result.dataValues
}

/**
 * 更新用户信息
 * @param  {Object} param0    要修改的内容 { newUnlocked }
 * @param  {Object} param1    查询条件 { id }
 */
async function updateUser(
	{ newUnlocked },
	{ id }
) {
	// 因莫名原因，使用Sequelize模型更新表字段值为0时会失败，就用了原生sql更新
	const result = await seq.query('update users set unlocked = :unlocked where id = :id', {
		replacements: { id: id, unlocked: newUnlocked  },
		type: Sequelize.QueryTypes.UPDATE
	})
	
	return result[1] > 0
}

module.exports = {
    getUserInfo,
    createUser,
    updateUser
}