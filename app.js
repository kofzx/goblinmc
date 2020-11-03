const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const koaStatic = require('koa-static')

const { REDIS_CONF } = require('./src/conf/db')
const { isProd } = require('./src/utils/env')
const { SESSION_SECRET_KEY } = require('./src/conf/secretKeys')

const searchApiRouter = require('./src/routes/api/search')
const userApiRouter = require('./src/routes/api/user')
const orderApiRouter = require('./src/routes/api/order')
const indexViewRouter = require('./src/routes/view/index')
const errorViewRouter = require('./src/routes/view/error')

// error handler
let onerrorConf = {}
if (isProd) {
	onerrorConf = {
		redirect: '/error'
	}
}
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))

app.use(views(__dirname + '/src/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// session配置
app.keys = [SESSION_SECRET_KEY]
app.use(session({
	key: 'goblinmc.sid',
	prefix: 'goblinmc:sess:',	
	cookie: {
		path: '/',
		httpOnly: true,
		maxAge: 7 * 24 * 60 * 60 * 1000		// ms
	},
	store: redisStore({
		all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
	})
}))

// routes
app.use(searchApiRouter.routes(), searchApiRouter.allowedMethods())
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())
app.use(orderApiRouter.routes(), orderApiRouter.allowedMethods())
app.use(indexViewRouter.routes(), indexViewRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
