# GapLab Website

GapLab 的中英双语品牌官网。GapLab 是一个从真实生活中的细小痛点出发，用简单、有温度的产品减少生活与创作摩擦的一人产品实验室。

线上地址：<https://vikigaplab.com>

## 页面

- GapLab 品牌与作品集：`/`
- Pictidy 产品介绍：`/apps/pictidy/`
- CatchIt 产品与下载：`/apps/catchit/`
- CatchIt 隐私说明：`/apps/catchit/privacy/`
- Font Card 可商用字体卡片工作室：`/apps/fontcard/`

网站支持中文与英文切换，并针对桌面和手机布局进行响应式适配。

## 本地运行

```bash
npm ci
npm run dev
```

本地用 `127.0.0.1` 打开时，中文字体经 `middleware.ts` 代理 ZeoSeven（该 Origin 会被防盗链拦截）。生产域名可直连 FontsAPI；`npm run build` 仍生成 GitHub Pages 静态 `out/`。
构建校验：

```bash
npm run build
```

静态文件会生成到 `out/`。提交代码前也应运行：

```bash
npm run lint
```

## GitHub Pages 发布

仓库 `main` 分支更新后，`.github/workflows/pages.yml` 会：

1. 使用 Node.js 22 安装锁定依赖；
2. 执行静态构建；
3. 上传 `out/`；
4. 部署到 GitHub Pages。

首次发布时，在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

`public/CNAME` 将正式域名固定为：

`vikigaplab.com`

DNS 应把根域名指向 GitHub Pages；切换域名之前必须先确认新仓库的 Pages 工作流成功，旧站代码保留到新站和 HTTPS 均验证完成。

逐步操作、安全边界、回滚与验收清单见 [`docs/deployment-runbook/README.md`](docs/deployment-runbook/README.md)。

## 外部产品链接

- Pictidy：链接到正式 App Store 页面。
- CatchIt：下载按钮指向 `bubbleviki404/catch-it` 最新正式 Release 的固定资产 `CatchIt-latest.zip`。

## 内容与隐私

- 网站不包含表单、账户或分析脚本。
- `.env*`、证书、构建缓存和浏览器自动化快照不会进入仓库。
- 发布凭据、Apple 账户、GitHub 登录与 DNS 所有权操作均不保存在代码中。
