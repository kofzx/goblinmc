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
 * @param {string} id 游客id
 * @param {string} mid 音乐id
 * @param {string} count 下单数量
 */
async function getQrcode(id, mid, count) {
    let _path = '/qrcode/'
    let imgName = `${id}.png`

    if (fs.existsSync(path.join(__dirname, '..', '..', _path, imgName))) {
        return new SuccessModel({
            qrcodeImageUrl: IMG_URL + _path + imgName
        })
    }

    generatorQrImage(IMG_URL + `/unlocked?id=${id}&mid=${mid}&count=${count}`, '/public' + _path + imgName)

    return new SuccessModel({
        qrcodeImageUrl: IMG_URL + _path + imgName
    })
}

module.exports = {
    getQrcode
}