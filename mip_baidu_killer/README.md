## IP地址查询-站长查询 百度网盟杀手

> [mip_baidu_killer.js](https://github.com/wuuconix/scripts/blob/main/mip_baidu_killer/mip_baidu_killer.js )

解决问题：在使用[IP地址查询-站长查询](http://mip.chinaz.com/)的时候，会弹出百度网盟广告，影响观感。

![mip网盟广告.jpg](https://s2.loli.net/2022/04/10/XCa6GSEtRjroeUc.jpg)

同样使用MutationObserver的方式检测页面变化，发现网盟Frame的时候删除它的父元素Div

> console.log("百度网盟广告已经自动关闭")

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443073-mip-baidu-killer-js)