## 阿里云盘视频杀手

> [aliyunpan-killer.js](https://github.com/wuuconix/scripts/blob/main/aliyunpan-killer/aliyunpan-killer.js)

解决问题：阿里云盘在线播放视频的时候有时候会对video标签外层的div锁height，使得画面无法扩展到整个画面，十分难受

![image](https://sina.wuuconix.link/large/007YVyKcly1h34orc0989j31hc0tztrx.jpg)

利用MutationObserver获得那个div，然后在利用另一个MutationObserver来监听div属性的变化，一变化就把它的heihgt设置为100%

![image](https://sina.wuuconix.link/large/007YVyKcly1h34p433v16j31hc0u04qj.jpg)

[Greasy Fork 下载链接](https://greasyfork.org/zh-CN/scripts/446352-aliyunpan-killer-js)
