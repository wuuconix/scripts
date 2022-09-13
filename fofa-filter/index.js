// ==UserScript==
// @name         fofa-filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fofa过滤器
// @author       Wuuconix
// @match        https://fofa.info/result*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fofa.info
// @grant        none
// @license      MIT
// ==/UserScript==

setTimeout(() => {
  const div = document.querySelector("div.el-autocomplete") //fofa input div
  div.insertAdjacentElement("afterend", button1) //insert knife button1
  div.insertAdjacentElement("afterend", button2) //sword button2
  button1.addEventListener("click", () => {
    const hosts = new Set()
    document.querySelectorAll("span.aSpan > a").forEach(host => {
      hosts.add(host.textContent.trim())
    })
    let qbase64 = A2B(new URL(location.href).searchParams.get("qbase64"))
    hosts.forEach(host => {
      qbase64 += ` && host!="${host}"`
    })
    qbase64 = B2A(qbase64)
    const url = new URL(location.href)
    url.searchParams.set("qbase64", qbase64)
    location.replace(url.href)
  })
  button2.addEventListener("click", () => {
    const titles = new Set()
    document.querySelectorAll("p.max-tow-row").forEach(title => {
      titles.add(title.textContent)
    })
    let qbase64 = A2B(new URL(location.href).searchParams.get("qbase64"))
    titles.forEach(title => {
      //ignore empty title because many different targets set empty title
      (title != "") && (qbase64 += ` && title!="${title}"`)
    })
    qbase64 = B2A(qbase64)
    const url = new URL(location.href)
    url.searchParams.set("qbase64", qbase64)
    location.replace(url.href)
  })
}, 1000)

const style = document.createElement("style")
style.innerHTML = `
.conix-button {
  position: absolute;
  margin-left: 20px;
  height: 50px;
  padding: 0 10px;
  white-space: nowrap;
  font-size: xx-large;
  background-color: transparent;
  border: none;
  transition: transform .5s;
}
.conix-button:hover {
  cursor: pointer;
  transform: rotate(135deg);
}
.knife {
  margin-left: 20px;
}
.sword {
  margin-left: 70px;
}`
document.head.appendChild(style)

const button1 = document.createElement("button")
button1.className = "conix-button knife"
button1.textContent = "🗡️"
button1.title = "Kill This Page By Host"

const button2 = document.createElement("button")
button2.className = "conix-button sword"
button2.textContent = "⚔️"
button2.title = "Kill All Same Title"
/**
 * Binary To Ascii (Palin To Base64) supporting Chinese
 * @param {string} str 
 * @returns 
 */
function B2A(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

/**
 * Ascii To Binary (Base64 To Plain) supporting Chinese
 * @param {string} str 
 * @returns 
 */
function A2B(str) {
  return decodeURIComponent(escape(window.atob(str)));
}