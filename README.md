# scripts
最近学了点JS 打算写几个小脚本练练手

## 知乎杀手

> [zhihu_killer.js](https://github.com/wuuconix/scripts/blob/main/zhihu_killer.js)

通过MutationObserver检测body的变化，每次变化查看有没有弹出登录框。

若有则自动点击实现关闭的效果。

同时考虑到一些用户已经登录，observer将首先查看用户登录状况，如果已经登录，observer将自杀。

已经下登录的情况

![已经登录.jpg](assets/%E5%B7%B2%E7%BB%8F%E7%99%BB%E5%BD%95.jpg)

还没有登录的情况

![自动关闭.jpg](assets/%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD.jpg)

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443070-zhihu-killer)