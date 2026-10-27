# GapLab Website

[English](README.md)

GapLab 的中英双语官网，面向希望了解这个一人产品实验室、旗下 App 和 Viki 作品集的访客。实验室从真实生活中的细小痛点出发，用轻量工具减少生活与创作中的摩擦。

线上地址：<https://vikigaplab.com>

## 页面与架构

- `/`：GapLab 品牌首页
- `/portfolio/`：Viki 个人作品集，由 `public/portfolio/` 下独立的 HTML、CSS、JavaScript 提供
- `/apps/pictidy/`：Pictidy 产品介绍
- `/apps/catchit/` 与 `/apps/catchit/privacy/`：CatchIt 产品及隐私页面
- `/apps/fontcard/`：Font Card 字体卡片工作室

网站使用 Next.js 静态导出，支持中英文和桌面、手机响应式布局。作品集将 Video Learning Moments 标记为开发中；项目展示不代表产品已经发布。

## 本地开发与部署

使用 Node.js 22.13 或更新版本：

```sh
npm ci
npm run dev
```

`npm run lint` 检查应用代码；`npm run build` 将网站导出到 `out/`。作品集独立浏览器脚本不包含在应用 ESLint 检查范围内，可用 `node --check public/portfolio/script.js` 检查语法。

推送到 `main` 后，现有 GitHub Actions 工作流依次安装依赖、检查、构建，再将 `out/` 发布到 GitHub Pages。`public/CNAME` 保留自定义域名。网站采用静态导出，Pages 产物不包含服务端中间件；Font Card 的同源字体代理需要按照 `next.config.ts` 中的说明独立托管。

## 隐私与权利

作品集在浏览器中保存语言偏好。App Store、音乐平台及 GitHub 等外链服务适用各自的政策。源代码采用 [MIT 许可证](LICENSE)；品牌图片、截图、音频、视频以及第三方字体和库仍适用各自的权利与许可条款，代码许可证不授予这些素材的统一复用权利。
