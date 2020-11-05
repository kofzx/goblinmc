/**
 * @description use api 路由
 * @author kofzx
 */

const router = require('koa-router')()
const { 
    getAnonymous,
    changeUnlocked,
    login
} = require('../../controller/user')
const { getQrcode } = require('../../controller/common')
const { getQrcodeStr } = require('../../utils/qrcode')

router.prefix('/api/user')

// 获取游客信息
router.get('/info', async (ctx, next) => {
    const { id } = ctx.request.query
    ctx.body = await getAnonymous(id)
})

// 获取二维码信息
router.get('/qrcode', async (ctx, next) => {
    const { id, mid, count } = ctx.request.query
    const result = await getQrcode(id, mid, count)
    if (result && result.data) {
        // 渲染模板
        result.data.qrcodeTpl = getQrcodeStr(result.data.qrcodeImageUrl)
        result.data.selectorContainer = '.qrcode-mask'
        result.data.resultMessageContainer = '.message-result'
    }
    ctx.body = result
})

// 修改游客锁定状态
router.post('/changeUnlocked', async (ctx, next) => {
    const { id: uid, unlocked } = ctx.request.body
    ctx.body = await changeUnlocked(uid, unlocked)
})

// 登录
router.post('/login', async (ctx, next) => {
	const { username, password } = ctx.request.body
	ctx.body = await login(ctx, username, password)
})

module.exports = router