// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  广告隐藏
// @author       wuuconix
// @match        https://ddys.art/*
// @match        https://www.fantuanhd.com/*
// @match        https://api.goodjson.top/*
// @match        http://www.yinghuacd.com/*
// @match        https://tup.yinghuacd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

const style = document.createElement("style")
const map = {
  "ddys.art": ["#sajdhfbjwhe", "#iaujwnefhw", "#fkasjgf"],
  "www.fantuanhd.com": ["#t-img-box", "#HMRichBox", "#note", "div.stui-pannel__bd div:nth-child(2)"],
  "api.goodjson.top": ["#adv_wrap_hh"],
  "tup.yinghuacd.com": ["#adv_wrap_hh"],
  "www.yinghuacd.com": ["#HMimageleft", "#HMimageright", "#HMRichBox"]
}
style.innerHTML = `${map[window.location.host].join(",")} {
  display: none !important;
}`
document.head.appendChild(style)