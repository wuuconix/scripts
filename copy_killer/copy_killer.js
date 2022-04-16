// ==UserScript==
// @name         copy_killer.js
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  删除网站复制时讨厌的声明 目前支持网站 Leetcode | CSDN
// @author       wuuconix
// @match        https://leetcode-cn.com/problems/*
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode-cn.com
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('copy',function(e){
        let clipboardData = e.clipboardData || window.clipboardData
        let text = clipboardData.getData("text") //剪切板里的内容
        if(text) {
            e.preventDefault(); //阻止原来的事件，原来的事件会给复制内容后面加上声明
            clipboardData.setData('text/plain', text)
        }
	})
})();