// ==UserScript==
// @name         aliyunpan-killer.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  阿里云盘视频自动最大化
// @author       wuuconix
// @match        https://www.aliyundrive.com/drive/folder/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.aliyundrive.com
// @grant        none
// @license      MIT
// ==/UserScript==

let div //视频控制栏

const observer1 = new MutationObserver(() => { //此观察者用来获得div
    if (document.querySelector("div.video-stage--3LCB4.cursor--w3p8T")) {
        div = document.querySelector("div.video-stage--3LCB4.cursor--w3p8T")
        console.log("成功锁定div")
        observer2.observe(div, { attributes: true })
        observer1.disconnect()
    }
})

observer1.observe(document.body, { childList: true })

const observer2 = new MutationObserver(() => { //此观察者观察div属性的变化
    if (div.style.height != "100%") {
        div.style.height = "100%"
        console.log("成功将div的高度设置为100%")
    }
})
