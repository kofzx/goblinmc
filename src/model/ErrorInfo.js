/**
 * @description 失败信息集合, 包括 errno 和 message
 * @author kofzx
 */

module.exports = {
	// 歌曲不存在
    searchFailInfo: {
        errno: 10001,
        message: '小库中没有该歌曲o(╥﹏╥)o，不过小库会及时补充库存的，过段时间再来搜索该歌曲吧~或者...先看看别的(￣ε(#￣)☆'
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
    // 创建订单失败
    createOrderFailInfo: {
        errno: 10009,
        message: '创建订单失败'
    },
}