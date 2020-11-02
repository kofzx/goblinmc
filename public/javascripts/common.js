/**
 * @description 公用方法
 * @author kofzx
 */

/**
 * 使用xml对象发起请求，进行文件下载
 * @param {string} uri 下载链接
 * @param {string} callback 下载完毕回调
 */
function loadFile(uri, callback) {  
    if (typeof callback != 'function') {  
        callback = function(uri) {  
            console.log(uri)
        }  
    }  
    var xhr = new XMLHttpRequest() 
    xhr.responseType = 'blob' 
    xhr.onload = function() {  
        callback(window.URL.createObjectURL(xhr.response))
    }  
    xhr.open('GET', uri, true) 
    xhr.send()
}

/**
 * 下载文件的方法
 * @param {string} blobUri blob的资源地址
 * @param {*} filename 下载的文件名
 */
function downloadFn(blobUri, filename) {
    var link = document.createElement('a')
    link.href = blobUri
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}