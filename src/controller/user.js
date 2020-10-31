/**
 * @description user controller
 * @author kofzx
 */

const { 
    getUserInfo, 
    createUser,
    updateUser 
} = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { 
    registerFailInfo, 
    registerUserNameNotExistInfo,
    changeInfoFailInfo,
    loginFailInfo,
    loginUsernameEmptyInfo,
    loginPasswordEmptyInfo
} = require('../model/ErrorInfo')

/**
 * 获取游客信息
 * @param {string} id 用户id
 */
async function getAnonymous(id) {
    const userInfo = await getUserInfo({
        id
    })
    if (userInfo) {
		return new SuccessModel(userInfo)
	} else {
		return new ErrorModel(registerUserNameNotExistInfo)
	}
}

/**
 * 注册游客用户
 * @param {string} id 用户id
 */
async function register(id) {
    try {
        await createUser(id)

        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(registerFailInfo)
    }
}

/**
 * 更改游客锁定状态
 * @param {object} id 游客id
 * @param {number} unlocked 
 */
async function changeUnlocked(id, unlocked) {
    const result = await updateUser(
        { newUnlocked: unlocked },
        { id }
    )
    if (result) {
		// 返回
		return new SuccessModel()
	}
	// 失败
	return new ErrorModel(changeInfoFailInfo)
}

/**
 * 登录
 * @param  {Object} ctx      ctx
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
async function login(ctx, username, password) {
    // 校验
    if (username.length === 0) {
        return new ErrorModel(loginUsernameEmptyInfo)
    }
    if (password.length === 0) {
        return new ErrorModel(loginPasswordEmptyInfo)
    }
    
	// 获取用户信息
	const userInfo = await getUserInfo({ username, password })
	if (!userInfo) {
		// 登录失败
		return new ErrorModel(loginFailInfo)
	}

	// 登录成功
	if (ctx.session.userInfo == null) {
		ctx.session.userInfo = userInfo
	}
	return new SuccessModel()
}

module.exports = {
    getAnonymous,
    register,
    changeUnlocked,
    login
}