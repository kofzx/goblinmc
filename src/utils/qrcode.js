/**
 * @description 二维码相关方法
 * @author kofzx
 */

const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const qr = require('qr-image')

function generatorQrImage(qrUrl, qrPath) {
    try {
        let qr_svg = qr.image(qrUrl, 'H', { type: 'png' })
        let qrPa = path.join(__dirname, '..', '..', qrPath)
        qr_svg.pipe(fs.createWriteStream(qrPa))
    } catch (ex) {
        console.error(ex.message, ex.stack)
    }
}

// 获取 qrcode.ejs 的文件内容
const QRCODE_TPL = fs.readFileSync(
	path.join(__dirname, '..', 'views', 'widgets', 'qrcode.ejs')
).toString()

/**
 * 渲染 qrcode html 字符串
 * @param  {string}   qrcode 二维码图片地址
 */
function getQrcodeStr(qrcode) {
	return ejs.render(QRCODE_TPL, {
		qrcode
	})
}

module.exports = {
    generatorQrImage,
    getQrcodeStr
}