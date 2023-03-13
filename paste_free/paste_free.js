// ==UserScript==
// @name         paste_free
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  点击图标 即可自动读取剪切板中的内容进行搜索
// @author       wuuconix
// @match        https://fofa.info/result*
// @match        https://www.bing.com/search*
// @match        https://cn.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fofa.info
// @grant        none
// ==/UserScript==

if (location.hostname == "fofa.info") {                     // fofa
  document.body.addEventListener("click", async (e) => {
    if (e.target.className == "fofa-logo") {
      e.preventDefault()
      const text = await navigator.clipboard.readText()
      let base64 = ""
      if (/^(\d{1,3}.){3}\d{1,3}$/.test(text)) {
          base64 = btoa(`ip="${text}" && status_code="200"`)
          location.replace(`${location.origin}${location.pathname}?qbase64=${base64}`)
      } else {
          base64 = btoa(`domain="${text}" && status_code="200"`)
          location.replace(`${location.origin}${location.pathname}?qbase64=${base64}`)
      }
    }
  })
  document.body.addEventListener("contextmenu", async (e) => {
    if (e.target.className == "fofa-logo") {
      e.preventDefault()
      const text = await navigator.clipboard.readText()
      let base64 = ""
      if (/^(\d{1,3}.){3}\d{1,3}$/.test(text)) {
        base64 = btoa(`ip="${text}"`)
        location.replace(`${location.origin}${location.pathname}?qbase64=${base64}`)
      } else {
        base64 = btoa(`domain="${text}"`)
        location.replace(`${location.origin}${location.pathname}?qbase64=${base64}`)
      }
    }
  })
} else if (/bing.com/.test(location.hostname)) {            // bing
  document.body.addEventListener("click", async (e) => {
    if (["b_logoArea", "b_logo"].includes(e.target.className)) {
      e.preventDefault()
      const text = await navigator.clipboard.readText()
      const q = `site:${text}`
      location.replace(`${location.origin}${location.pathname}?q=${q}`)
    }
  })
  document.body.addEventListener("contextmenu", async (e) => {
    if (["b_logoArea", "b_logo"].includes(e.target.className)) {
      e.preventDefault()
      const text = await navigator.clipboard.readText()
      const q = encodeURIComponent(`site:${text} & filetype: (pdf | doc | xls | ppt | csv)`)
      location.replace(`${location.origin}${location.pathname}?q=${q}`)
    }
  })
}
