// ==UserScript==
// @name         copy_killer.js
// @namespace    http://tampermonkey.net/
// @version      0.1
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
		let clipboardData = e.clipboardData || window.clipboardData;
		if(!clipboardData)
            return ;
		let text = window.getSelection().toString(); //手动得到用户选择区域并放入剪切版中
		if(text){
			e.preventDefault();
			clipboardData.setData('text/plain', text)
		}
	})
})();