# fofa白嫖所有资产

**解决问题**：

fofa对于普通用户只开放前60条数据的查看权限，如果目标资产大于60，我们将无法查看60条之后的资产。

**使用方法**:

![image](https://tva3.sinaimg.cn/large/007YVyKcly1h630stugroj30fv02t74z.jpg)

点击这把剑，即可把这一页的十条记录过滤掉。

**脚本原理**：

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

**Greasy Fork & Github**:

https://greasyfork.org/zh-CN/scripts/451165-fofa-filter

https://github.com/wuuconix/scripts/tree/main/fofa-filter