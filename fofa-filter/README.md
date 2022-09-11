# fofa-filter

白嫖fofa所有数据 小脚本

[Greasy Fork安装链接](https://greasyfork.org/zh-CN/scripts/451165-fofa-filter)

![image](https://tva2.sinaimg.cn/large/007YVyKcly1h62zxtc7g7j30gr0aljtb.jpg)

![image](https://tva2.sinaimg.cn/large/007YVyKcly1h6300386ddj312b0p4tkf.jpg)

<details>
    <summary>脚本原理</summary>

如果我们需要利用fofa来探测某个域名的子域名们，一般是这样的

```
domain="bilibili.com"
```

然后比如第一页返回了 `a.bilibili.com` 和 `b.bilibili.com` 等10条数据。

如果你需要对这些子域名进行渗透测试的话，现在就去渗透吧！

渗透测试完毕后，这一页的10条数据实际上对你已经没用了，因为你已经利用好了，但是它仍然占据着 60条（fofa非会员享受的数据数量） 中的10条。

我们可以使用

```
domain="bilibili.com" && host!="a.bilibili.com" && host!="b.bilibili.com"
```

的搜索语法把这一页的十条数据过滤掉。

总共60条记录，我们去掉了10条旧纪录，自然会有10条新纪录可以供我们查看。

以此类推，我们将获得fofa数据库中的所有数据。
</details>




