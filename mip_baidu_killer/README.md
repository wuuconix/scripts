## IP地址查询-站长查询 百度网盟杀手

> [mip_baidu_killer.js](https://github.com/wuuconix/scripts/blob/main/mip_baidu_killer/mip_baidu_killer.js )

解决问题：在使用[IP地址查询-站长查询](http://mip.chinaz.com/)的时候，会弹出百度网盟广告，影响观感。

![mip百度网盟广告.jpg](https://cdn.jsdelivr.net/gh/wuuconix/scripts@main/mip_baidu_killer/assets/mip%E7%BD%91%E7%9B%9F%E5%B9%BF%E5%91%8A.jpg)

同样使用MutationObserver的方式检测页面变化，发现网盟Frame的时候删除它的父元素Div

> console.log("百度网盟广告已经自动关闭")

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443073-mip-baidu-killer-js)