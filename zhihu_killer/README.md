## 知乎杀手

> [zhihu_killer.js](https://github.com/wuuconix/scripts/blob/main/zhihu_killer/zhihu_killer.js)

解决问题：知乎在用户没有登录的情况下会弹出登录框 影响用户阅读

![知乎登录框.jpg](https://cdn.jsdelivr.net/gh/wuuconix/scripts@main/zhihu_killer/assets/%E7%9F%A5%E4%B9%8E%E7%99%BB%E5%BD%95%E6%A1%86.jpg)

通过MutationObserver检测body的变化，每次变化查看有没有弹出登录框，若有则自动点击实现关闭。

> console.log("检测到登录框 已经为你自动关闭")

同时考虑到一些用户已经登录，observer将首先查看用户登录状况，如果已经登录，observer将自杀。

> console.log("检测到你已登录，observer将自动关闭")

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443070-zhihu-killer)