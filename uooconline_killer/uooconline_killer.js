// ==UserScript==
// @name         uooconline_killer.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优课在线的视频鼠标离开视频后会自动暂停 该脚本则监听到暂停事件后自动播放
// @author       wuuconix
// @match        http://www.uooconline.com/*
// @icon         http://www.uooconline.com/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    let video, start
    const observer = new MutationObserver(() => { //页面变化监听器
        let temp = document.querySelector("button[title='Play Video']")
        if (temp !== null && temp != start) { //开始按钮变化 说明页面改变了
            start = temp
            start.click() //自动点击播放按钮
            video = document.querySelector("video") //更新视频标签
            video.addEventListener("pause", () => {
                video.play()
                    .then(() => console.log("视频重新播放成功"))
                    .catch(err => console.log(`视频重新播放失败: ${err}`))
            })
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();