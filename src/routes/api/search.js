/**
 * @description 搜索 api 路由
 * @author kofzx
 */

const router = require('koa-router')()
const { searchMusicByKeyWord } = require('../../controller/search')
const { getMusicListStr } = require('../../utils/music-list')

router.prefix('/api')

router.post('/searchMusicByKeyWord', async (ctx, next) => {
    const { key } = ctx.request.body
    const { id: uid } = ctx.session.userInfo
    const result = await searchMusicByKeyWord(key)
    if (result && result.data) {
        // 渲染模板
        result.data.musicListTpl = getMusicListStr(result.data.musicList, uid)
        result.data.selectorContainer = '#musicListWrapper'
    }
	ctx.body = result
})

module.exports = router