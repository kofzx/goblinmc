/**
 * @description 订单 api 路由
 * @author kofzx
 */

const router = require('koa-router')()
const { generateOrder } = require('../../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/createOrder', async (ctx, next) => {
    const { mid, count } = ctx.request.body
    const { id: uid } = ctx.session.userInfo
	ctx.body = await generateOrder({uid, mid, count})
})

module.exports = router