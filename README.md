# scripts
最近学了点JS 打算写几个小脚本练练手

## 知乎杀手

> [zhihu_killer.js](https://github.com/wuuconix/scripts/blob/main/zhihu_killer/zhihu_killer.js)

解决问题：知乎在用户没有登录的情况下会弹出登录框 影响用户阅读

![知乎登录框.jpg](https://s2.loli.net/2022/04/10/74DlxmYtBiFMOHQ.jpg)

通过MutationObserver检测body的变化，每次变化查看有没有弹出登录框，若有则自动点击实现关闭。

> console.log("检测到登录框 已经为你自动关闭")

同时考虑到一些用户已经登录，observer将首先查看用户登录状况，如果已经登录，observer将自杀。

> console.log("检测到你已登录，observer将自动关闭")

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443070-zhihu-killer)

## IP地址查询-站长查询 百度网盟杀手

> [mip_baidu_killer.js](https://github.com/wuuconix/scripts/blob/main/mip_baidu_killer/mip_baidu_killer.js )

解决问题：在使用[IP地址查询-站长查询](http://mip.chinaz.com/)的时候，会弹出百度网盟广告，影响观感。

![mip网盟广告.jpg](https://s2.loli.net/2022/04/10/XCa6GSEtRjroeUc.jpg)

同样使用MutationObserver的方式检测页面变化，发现网盟Frame的时候删除它的父元素Div

> console.log("百度网盟广告已经自动关闭")

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443073-mip-baidu-killer-js)

## 复制声明杀手

> [copy_killer.js](https://github.com/wuuconix/scripts/blob/main/copy_killer/copy_killer.js)

解决问题：一些网站（比如LeetCode）复制内容的时候，会加上一串惹人讨厌的声明，需要手动删除，很麻烦。

![声明.png](https://s2.loli.net/2022/04/10/gOa26yozE1GQVYJ.png)

通过监听copy事件，覆盖默认行为，并且手动将用户选择的区域放入剪切板的，实现纯净复制。

目前支持网站：**Leetcode** | **CSDN**

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/443108-copy-killer-js)

## 优选在线 暂停 + 签到杀手

> [uooconline_killer.js](https://github.com/wuuconix/scripts/blob/main/uooconline_killer/uooconline_killer.js)

解决问题：

1. [优课在线](http://www.uooconline.com/)的网课在鼠标离开视频后会自动暂停，影响刷课效率。

    该脚本通过监听video的pause事件，执行video.play()从而重新播放视频，让用户可以正常得把视频挂在后台。

    ![重新播放](https://tvax3.sinaimg.cn/large/007YVyKcly1h1xeiy7vj2j31k50r215k.jpg)

2. 优课在线的课程居然有签到要求，每天需要点击课程主页面的**开始学习**按钮才算一次签到。

    所以此脚本还支持了凌晨自动点击开始学习按钮，实现签到。

    ![签到](https://tva4.sinaimg.cn/large/007YVyKcly1h25mtfkcbfj30n308j0w8.jpg)

    > 当然此功能只适用那些 有一台二十四小时不关机的服务器的同学们。

目前支持网站：**www.uooconline.com**

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/444490-uooconline-killer-js)

## 阿里云盘视频杀手

> [aliyunpan-killer.js](https://github.com/wuuconix/scripts/blob/main/aliyunpan-killer/aliyunpan-killer.js)

解决问题：阿里云盘在线播放视频的时候有时候会对video标签外层的div锁height，使得画面无法扩展到整个画面，十分难受

![image](https://tvax4.sinaimg.cn/large/007YVyKcly1h34orc0989j31hc0tztrx.jpg)

利用MutationObserver获得那个div，然后在利用另一个MutationObserver来监听div属性的变化，一变化就把它的heihgt设置为100%

![image](https://tva4.sinaimg.cn/large/007YVyKcly1h34p433v16j31hc0u04qj.jpg)

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/446352-aliyunpan-killer-js)

