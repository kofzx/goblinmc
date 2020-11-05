const router = require('koa-router')()
const { v4: uuidv4 } = require('uuid')
const { register } = require('../../controller/user')
const { loginRedirect } = require('../../middlewares/loginChecks')

/**
 * 获取游客信息
 * @param  {Object} ctx ctx
 */
function getUserInfo(ctx) {
	if (ctx.session.userInfo == null) {
		// 创建新用户
		let uid = uuidv4()
		ctx.session.userInfo = {
			id: uid
		}
		// 新用户入库
		register(uid)
	}

	return  {
		userInfo: ctx.session.userInfo
	}
}

/**
 * 获取登录信息
 * @param  {Object} ctx ctx
 */
function getLoginInfo(ctx) {
	let data = {
		isLogin: false
	}

	const userInfo = ctx.session.userInfo
	if (userInfo) {
		data = {
			isLogin: true,
			username: userInfo.username
		}
	}

	return data
}

router.get('/', async (ctx, next) => {
  	await ctx.render('welcome', {})
})

router.get('/index', async (ctx, next) => {
	await ctx.render('index', getUserInfo(ctx))
})

router.get('/login', async (ctx, next) => {
	await ctx.render('login', getLoginInfo(ctx))
})

router.get('/unlocked', loginRedirect, async (ctx, next) => {
	const { id: aid, mid, count } = ctx.request.query
	const { ismanager } = ctx.session.userInfo
	
	await ctx.render('unlocked', {
		aid,
		mid,
		count,
		ismanager
	})
})

module.exports = router
