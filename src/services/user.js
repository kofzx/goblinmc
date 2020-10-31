/**
 * @description user service
 * @author kofzx
 */

const { User } = require('../db/model/index')

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
 * @param  {Object} param0    要修改的内容 { newUnlocked, newUsername, newPassword, newMobile }
 * @param  {Object} param1    查询条件 { id, username }
 */
async function updateUser(
	{ newUnlocked, newUsername, newPassword, newMobile },
	{ id, username }
) {
    // 拼接修改内容
	const updateData = {}
	if (newPassword) {
		updateData.password = newPassword
	}
	if (newUsername) {
		updateData.username = newUsername
	}
	if (newUnlocked) {
		updateData.unlocked = newUnlocked
	}
	if (newMobile) {
		updateData.mobile = newMobile
	}

	// 拼接查询条件
    const whereData = {}
    if (id) {
		whereData.id = id
	}
	if (username) {
		whereData.username = username
	}

	// 执行修改
	const result = await User.update(updateData, {
		where: whereData
	})
	console.log(result)
	return result[0] > 0
}

module.exports = {
    getUserInfo,
    createUser,
    updateUser
}