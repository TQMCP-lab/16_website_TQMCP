# TQMCP 课题组静态网站

这是一个不依赖框架、数据库或构建工具的纯静态课题组网站，可以直接上传到学校服务器、GitHub Pages、Cloudflare Pages、Netlify 等静态托管平台。

## 页面

- `index.html`：首页
- `members.html`：导师简介
- `research.html`：科研成果
- `moments.html`：团队风貌
- `admissions.html`：招生信息

共享文件：

- `styles.css`：所有页面的统一样式
- `site.js`：移动端导航和页脚年份
- `assets/`：图片与站点图标

## 本地预览

直接双击 `index.html` 即可查看。也可以在项目目录运行：

```powershell
python -m http.server 8000
```

随后访问 `http://localhost:8000`。

## 发布方式

发布时上传以下文件即可：

```text
index.html
members.html
research.html
moments.html
admissions.html
styles.css
site.js
assets/
```

不需要执行 `npm install`、`npm run build`，也不需要配置后端。

## 待补充资料

1. 确认课题组正式中英文名称。
2. 后续如需增加学生信息，可重新添加成员页面。
3. 在 `moments.html` 中继续补充课题组活动照片。
4. 核对招生名额、办公室地址和完整论文列表。

导师信息与代表性成果依据[学院公开介绍页](https://ss.wit.edu.cn/info/1601/12181.htm)整理。
