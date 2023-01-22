// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  广告隐藏
// @author       wuuconix
// @match        https://ddys.art/*
// @match        https://www.fantuanhd.com/*
// @match        https://api.goodjson.top/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

const style = document.createElement("style")
const map = {
  "ddys.art": ["#sajdhfbjwhe", "#iaujwnefhw", "#fkasjgf"],
  "www.fantuanhd.com": ["#t-img-box", "#HMRichBox"],
  "api.goodjson.top": ["#adv_wrap_hh"]
}
style.innerHTML = `${map[window.location.host].join(",")} {
  display: none !important;
}`
document.head.appendChild(style)