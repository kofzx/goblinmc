/**
 * @description common controller
 * @author kofzx
 */

const path = require('path')
const fs = require('fs')
const { IMG_URL } = require('../conf/constant')
const { generatorQrImage } = require('../utils/qrcode')
const { SuccessModel } = require('../model/ResModel')

/**
 * 获取二维码
 */
async function getQrcode(id, count) {
    let _path = '/qrcode/'
    let imgName = `${id}.png`

    if (fs.existsSync(path.join(__dirname, '..', '..', _path, imgName))) {
        return new SuccessModel({
            qrcodeImageUrl: IMG_URL + _path + imgName
        })
    }

    generatorQrImage(IMG_URL + `/unlocked?id=${id}&count=${count}`, '/public' + _path + imgName)

    return new SuccessModel({
        qrcodeImageUrl: IMG_URL + _path + imgName
    })
}

module.exports = {
    getQrcode
}