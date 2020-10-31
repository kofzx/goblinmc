/**
 * @description 音乐数据模型
 * @author kofzx
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

// music
const Music = seq.define('music', {
    id: {
        type: STRING,
        unique: true,
        primaryKey: true
    },
    lang: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '音乐语种 1 中文 2 英语 3 日语 4 其他'
    },
    isfree: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '是否免费'
    },
    name: {
        type: STRING,
		allowNull: false,
		comment: '歌名'
    },
    artist: {
        type: STRING,
		allowNull: false,
		comment: '歌手'
    },
    artistid: {
        type: INTEGER,
        allowNull: false,
        comment: '歌手id'
    },
    album: {
        type: STRING,
        allowNull: false,
        comment: '专辑'
    },
    albumid: {
        type: INTEGER,
        allowNull: false,
        comment: '专辑id'
    },
    albumpic: {
        type: STRING,
        allowNull: false,
        comment: '专辑图片'
    },
    pic120: {
        type: STRING,
        allowNull: false,
        comment: '封面图片120*120'
    },
    duration: {
        type: INTEGER,
        allowNull: false,
        comment: '时长'
    },
    score100: {
        type: STRING,
        allowNull: false,
        comment: '评分'
    },
    sourcename: {
        type: STRING,
        allowNull: false,
        comment: '资源名称'
    }
})

module.exports = Music