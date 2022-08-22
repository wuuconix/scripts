// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  低端影视广告隐藏
// @author       wuuconix
// @match        https://ddys.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

const style = document.createElement("style")
style.innerHTML = `#sajdhfbjwhe {
    display: none;
}
#iaujwnefhw {
    display: none;
}`
document.head.appendChild(style)