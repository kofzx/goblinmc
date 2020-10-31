/**
 * @description 音乐数据相关的工具方法
 * @author kofzx
 */

const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

// 获取 blog-list.ejs 的文件内容
const MUSIC_LIST_TPL = fs.readFileSync(
	path.join(__dirname, '..', 'views', 'widgets', 'music-list.ejs')
).toString()

/**
 * 根据 musicList 渲染出 html 字符串
 * @param  {Array}   musicList 音乐列表
 * @param  {string}  uid 用户id
 */
function getMusicListStr(musicList = [], uid) {
	return ejs.render(MUSIC_LIST_TPL, {
		musicList,
		uid
	})
}

module.exports = {
	getMusicListStr
}