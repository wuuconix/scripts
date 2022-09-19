# fofa白嫖所有资产

**解决问题**：

fofa对于普通用户只开放前60条数据的查看权限，如果目标资产大于60，我们将无法查看60条之后的资产。

**使用方法**:

![image](https://tva3.sinaimg.cn/large/007YVyKcly1h6bw70t7asj30iv02wt9m.jpg)

点击这把剑，即可把这一页已经检测过的记录智能过滤掉。

对于title不为空的记录会使用title来过滤，对于title为空的记录，会利用它对应的host来过滤。

**例子**

初始搜索语法

```
domain="mi.com" && status_code="200"
```

一共276条记录。

点击剑之后，语法**自动**填充为

```
domain="mi.com" && status_code="200" && title!="reject" && title!="米家" && title!="403 Forbidden" && title!="手机游戏应用商店_软件商店app下载-小米应用商店" && title!="小米IoT开发者平台" && title!="mi.com" && title!="Xiaomi Community" && title!="小米小爱开放平台" && host!="https://watch.iot.mi.com" && title!="主领域发现"
```

记录减少为261条。

可见，只要我们不断点击，最终可以得到fofa数据库中的所有记录。

**Greasy Fork & Github**:

https://greasyfork.org/zh-CN/scripts/451165-fofa-filter

https://github.com/wuuconix/scripts/tree/main/fofa-filter