/**
 * @description 数据格式化
 * @author kofzx
 */

 /**
 * 格式化查询列表
 * @param  {Object} list 查询结果列表
 */
function formatList(list) {
	return list.map((item) => ({ ...item.dataValues }))
}

module.exports = {
	formatList
}