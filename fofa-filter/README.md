# fofa白嫖所有资产

**解决问题**：

fofa对于普通用户只开放前60条数据的查看权限，如果目标资产大于60，我们将无法查看60条之后的资产。

**使用方法**:

![image](https://tva1.sinaimg.cn/large/007YVyKcly1h650mbwuqwj30gz02sdgn.jpg)

点击左边这把匕首，即可把这一页的十条记录利用`host`高级搜索语法过滤掉。

![image](https://tva4.sinaimg.cn/large/007YVyKcly1h650nv5xffj30hf02y0ti.jpg)

点击右边这把双剑，利用了`title`高级搜索语法可能能够过滤掉更多记录，因为fofa中很多记录的title都是相同的，所以这把双剑的威力更大。

**例子**

初始搜索语法

```
domain="gz-icloud.com.cn" && status_code="200"
```

一共134条记录。

点击左边的匕首后，语法**自动**填充为

```
domain="gz-icloud.com.cn" && status_code="200" && host!="qgh.gz-icloud.com.cn" && host!="safe.gz-icloud.com.cn:8061" && host!="gh.gz-icloud.com.cn:8061" && host!="cas.gz-icloud.com.cn" && host!="mall.gz-icloud.com.cn:8092" && host!="sso.gz-icloud.com.cn:8081" && host!="safe.gz-icloud.com.cn:8081" && host!="mall.gz-icloud.com.cn:8096" && host!="safe.gz-icloud.com.cn" && host!="sso.gz-icloud.com.cn:8094"
```

记录减少为123条。

点击右边的双剑后，语法**自动**填充为

```
domain="gz-icloud.com.cn" && status_code="200" && title!="黔工汇" && title!="MinIO Console" && title!="军民融合云平台" && title!="工业互联网金融" && title!="贵阳国家高新区科技计划项目申报系统" && title!="面向贵阳市特定区域工业互联网平台" && title!="贵州工业云人才综合平台"
```

记录减少为93条。

可见，只要我们不断点击，最终可以得到fofa数据库中的所有记录。

**Greasy Fork & Github**:

https://greasyfork.org/zh-CN/scripts/451165-fofa-filter

https://github.com/wuuconix/scripts/tree/main/fofa-filter