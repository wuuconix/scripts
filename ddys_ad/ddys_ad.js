// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  广告隐藏
// @author       wuuconix
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

let adList = localStorage.getItem("ddys_ad")
const style = document.createElement("style")

if (adList) {
    adList = JSON.parse(adList)
    style.innerHTML = `${adList.join(",")} {
  width: 0px;
  height: 0px;
}`
    document.head.appendChild(style)
}