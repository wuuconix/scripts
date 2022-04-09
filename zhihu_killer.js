// ==UserScript==
// @name         zhihu_killer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  知乎自动关闭登录框 智能识别登录状态
// @author       wuuconix
// @match        https://zhuanlan.zhihu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    const observer = new MutationObserver(() => {
        let avaterButton = document.querySelector(".Button.AppHeader-profileEntry.Button--plain")
        let closeButton = document.querySelector(".Button.Modal-closeButton.Button--plain")
        if (avaterButton) {
            console.log("检测到你已登录，observer将自动关闭")
            suicide() //自杀，已经不用再观察了
        } else if (closeButton) {
            closeButton.click()
            console.log("检测到登录框 已经为你自动关闭")
            suicide()
        }
    });

    observer.observe(document.body, { childList: true, });

    const suicide = () => {
        observer.disconnect()
    }

})();