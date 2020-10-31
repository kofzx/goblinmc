/**
 * @description 失败信息集合, 包括 errno 和 message
 * @author kofzx
 */

module.exports = {
	// 歌曲不存在
    searchFailInfo: {
        errno: 10001,
        message: '未找到该歌曲，请联系技术人员'
    },
    // 注册失败
    registerFailInfo: {
        errno: 10002,
        message: '注册失败，请重试'
    },
    // 用户名不存在
    registerUserNameNotExistInfo: {
        errno: 10003,
        message: '用户名未存在'
    },
    // 修改用户信息失败
    changeInfoFailInfo: {
        errno: 10004,
        message: '修改用户信息失败'
    },
    // 登录失败
    loginFailInfo: {
        errno: 10005,
        message: '登录失败，用户名或密码错误'
    },
    // 未登录
    loginCheckFailInfo: {
        errno: 10006,
        message: '您尚未登录'
    },
    // 用户名为空
    loginUsernameEmptyInfo: {
        errno: 10007,
        message: '用户名不能为空'
    },
    // 密码为空
    loginPasswordEmptyInfo: {
        errno: 10008,
        message: '密码不能为空'
    },
}