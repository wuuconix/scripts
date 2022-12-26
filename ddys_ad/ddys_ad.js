// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  低端影视广告隐藏
// @author       wuuconix
// @match        https://ddys.art/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

const style = document.createElement("style")
style.innerHTML = `#sajdhfbjwhe, #iaujwnefhw, #fkasjgf {
    display: none;
}`
document.head.appendChild(style)