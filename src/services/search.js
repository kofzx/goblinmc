/**
 * @description search service
 * @author kofzx
 */

const { Music } = require('../db/model/index')
const { formatList } = require('./_format')
const Sequelize = require('sequelize')

/**
 * 获取歌曲信息
 * @param  {string} key 关键字
 */
async function getMusicList(key) {
	// 查询条件
	const whereOpt = {
		name: {
            [Sequelize.Op.like]: `%${key}%`
        }
	}

	// 查询
	const result = await Music.findAll({
		where: whereOpt
	})

	return formatList(result)
}

module.exports = {
	getMusicList
}