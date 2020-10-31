/**
 * @description 常量集合
 * @author kofzx
 */

const { isProd } = require('../utils/env')

let IMG_URL = 'http://localhost:3000'

if (isProd) {
    IMG_URL = 'http://localhost:3000'
}

module.exports = {
    IMG_URL
}