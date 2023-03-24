// ==UserScript==
// @name         colab-alive
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  keep the colab alive
// @author       wuuconix
// @match        https://colab.research.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=colab.research.google.com
// @grant        none
// ==/UserScript==

function sleep(time) {
  return new Promise((res) => {
    setTimeout(res, time)
  })
}

// // base on https://gist.github.com/jwilson8767/db379026efcbd932f64382db4b02853e
// function findElement(selector, maxWaitTime = 1000 * 10) {
  
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Cannot find ${selector} in ${maxWaitTime}ms`)
//     }, maxWaitTime)
//     let el = document.querySelectorAll(selector)
//     if (el.length != 0) {
//       resolve(el)
//       return
//     }
//     new MutationObserver((mutationRecords, observer) => {
//       let el = document.querySelectorAll(selector)
//       if (el.length != 0) {
//         resolve(el)
//         observer.disconnect()
//       }
//     })
//       .observe(document.documentElement, {
//         childList: true,
//         subtree: true
//       })
//   });
// }

let timeoutID

async function alive() {
  try {
    const outputs = [...document.querySelectorAll("div.output_text")]
    timeoutID = setInterval(async () => {
      outputs.reverse()
      console.log(`${new Date().toLocaleTimeString()}\nIt's time to keep colab alive.`)
      for (const o of outputs) {
        o.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })      // scroll into view
        o.click()                                                                         // and click it
        console.log("click:", o)
        await sleep(2000)
      }
    }, 1000 * 30)
  } catch(e) {
    console.error(e)
  }
}

function stop() {
  clearInterval(timeoutID)
}

window.alive = alive
window.stop = stop

// async function init() {
//   const menubar = (await findElement("#top-menubar", 1000 * 30))[0]
//   console.log(`menubar: ${menubar}`)
//   const help = (await findElement("#help-menu-button > div"))[0]
//   console.log(`help: ${help}`)
//   const lastSaved = (await findElement("colab-last-saved-indicator"))[0]
//   console.log(`lastSaved: ${lastSaved}`)
//   const aliveButton = help.cloneNode(true)
//   aliveButton.querySelector("div.goog-inline-block.goog-menu-button-caption").textContent = "Alive"
//   const stopButton = help.cloneNode(true)
//   stopButton.querySelector("div.goog-inline-block.goog-menu-button-caption").textContent = "Stop"
//   menubar.insertBefore(alive, lastSaved)
//   menubar.insertBefore(stop, lastSaved)
//   aliveButton.addEventListener("click", () => {
//     alert("The mission that keeping alive will success!")
//     alive()
//   })
//   stopButton.addEventListener("click", () => {
//     alert("Mission abort!")
//     stop()
//   })
// }

// init()