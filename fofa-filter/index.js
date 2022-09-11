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
  div.insertAdjacentElement("afterend", button) //insert sword button after div
  button.addEventListener("click", () => {
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
}`
document.head.appendChild(style)

const button = document.createElement("button")
button.className = "conix-button"
button.textContent = "🗡️"
button.title = "Kill This Page"

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