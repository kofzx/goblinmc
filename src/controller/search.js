/**
 * @description search controller
 * @author kofzx
 */

const { getMusicList } = require('../services/search')
const { createFeedback } = require('../services/feedback')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { searchFailInfo } = require('../model/ErrorInfo')

/**
 * 搜索指定关键字歌曲
 * @param  {string}  key 关键字
 */
async function searchMusicByKeyWord(key) {
	const musicList = await getMusicList(key)
	if (musicList.length > 0) {
		return new SuccessModel({
            musicList
        })
	} else {
		await createFeedback(key)
		return new ErrorModel(searchFailInfo)
	}
}


module.exports = {
	searchMusicByKeyWord
}