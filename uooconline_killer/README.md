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

