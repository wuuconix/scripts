// ==UserScript==
// @name         beian-killer.js
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  ICP备案网自动域名爬取
// @author       You
// @match        https://beian.miit.gov.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=beian.miit.gov.cn
// @grant        none
// @license      MIT
// ==/UserScript==

const start = async () => {
    let sleep = (time) => new Promise((resolve) => {
        setTimeout(resolve, time * 1000)
    })
    let pages = Number(document.querySelector(".number:last-child").textContent)
    console.log(`一共有${pages}页`)
    let nextBtn = document.querySelector(".btn-next")
    let result = ""
    let index = 0
    for (let i = 0; i < pages; i++) {
        console.log(`现在是第${i + 1}页`)
        let btns = document.querySelectorAll(".el-button.el-button--primary.el-button--small") //每条记录的查看详情按钮
        for (let j = 0; j < btns.length; j++) {
            let btn = btns[j]
            btn.click()
            await sleep(1)
            while (!document.querySelector("div.details div.tableA:nth-of-type(2) li div[style]")) {
                await sleep()
            }
            let domain = document.querySelector("div.details div.tableA:nth-of-type(2) li div[style]").textContent
            result = `${result}\n${domain}`
            console.log(`${index++}: ${domain}`)
        }
        console.log(result)
        nextBtn.click()
        await sleep(5)
    }
}

const observer = new MutationObserver(() => {
    let searchList = document.querySelector(".search")
    if (searchList) {
        let stand = document.querySelector(".el-button.float-box.el-button--default.el-popover__reference") //替身
        stand.style.width = "100px"
        stand.style.height = "100px"
        stand.style.setProperty("background-color", "red", "important")
        stand.style.setProperty("color", "white", "important")
        stand.innerHTML = ""
        stand.textContent = "点击开始"
        stand.onclick = (e) => {
            e.preventDefault();
            start()
        }
        document.querySelector(".float-box.float-boxA").remove() //删除多余按钮
        observer.disconnect()
    }
});

observer.observe(document.body, { childList: true });