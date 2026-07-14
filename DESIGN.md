---
name: GapLab Poster System
description: A bilingual poster wall for small, useful digital experiments.
colors:
  paper: "#F2F3EE"
  ink: "#14201A"
  cobalt: "#2446E8"
  signal-lime: "#B7F12D"
  coral-stamp: "#F25A43"
  soft-blue: "#D9E4FF"
typography:
  display:
    fontFamily: "Bodoni Moda, Songti SC, serif"
    fontSize: "clamp(4.75rem, 13vw, 12rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.07em"
  body:
    fontFamily: "Bricolage Grotesque, PingFang SC, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.65
  label:
    fontFamily: "Bricolage Grotesque, PingFang SC, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  stamp: "999px"
  control: "14px"
  poster: "28px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "28px"
  lg: "56px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.stamp}"
    padding: "16px 24px"
  button-accent:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "16px 24px"
---

# Design System: GapLab Poster System

## Overview

**Creative North Star: "The Working Poster Wall"**

GapLab 像一面不断增加新作品的实验室海报墙：第一眼大胆、鲜明、有手作能量，第二眼能迅速找到项目、下载与可信度信息。设计借鉴 1990 年代印刷海报和用户提供的 Behance 参考中的超大衬线字、荧光点缀与涂鸦节奏，但保持数字产品所需的秩序和可访问性。

它明确拒绝通用 SaaS 落地页、个人简历页和装饰性玻璃卡片。布局允许文字跨越网格、标签像贴纸一样叠放，但每个关键动作都必须清楚、稳定、可通过键盘完成。

**Key Characteristics:**

- 海报尺度的衬线标题与紧凑的人文无衬线正文
- 钴蓝主声部，荧光绿和珊瑚红作为短促信号
- 非对称但可扫描的项目索引
- 少量星芒、轨迹线和印章图形，不使用图库装饰
- 双语、移动端和减少动画是同一套系统的原生能力

## Colors

完整色板以冷调纸张为底，钴蓝建立品牌记忆，荧光绿和珊瑚红只承担动作与标记。

### Primary

- **Lab Cobalt**：标题、链接和大面积品牌区的主色。

### Secondary

- **Signal Lime**：下载动作、状态贴纸和少量高能量装饰。
- **Coral Stamp**：版本标签、短提示和对比印章。

### Neutral

- **Cool Paper**：所有浅色页面的基础，不使用纯白。
- **Plant Ink**：正文、边框和深色章节，不使用纯黑。
- **Blueprint Mist**：次级信息区和悬停背景。

**The Three-Signal Rule.** 同一视口内最多出现钴蓝、荧光绿、珊瑚红三个信号角色；装饰不能与主要动作竞争。

## Typography

**Display Font:** Bodoni Moda（宋体回退）
**Body Font:** Bricolage Grotesque（苹方回退）

**Character:** 标题像一张被放大的文化海报，正文像实验室标签，清晰而不冷漠。中文不强行模拟拉丁字形的极端压缩，优先保持字面可读性。

### Hierarchy

- **Display**（700，流式超大尺寸，0.82 行高）：首页品牌名和项目名称。
- **Headline**（650，`clamp(2.75rem, 7vw, 6rem)`，0.95 行高）：章节主张与产品标语。
- **Title**（650，1.5–2.25rem，1.1 行高）：项目索引与说明标题。
- **Body**（450，1rem，1.65 行高）：说明文字，行宽限制为 70ch。
- **Label**（700，0.75rem，0.08em 字距）：短标签、版本和平台信息，禁止用于长段正文。

**The Poster-Then-Proof Rule.** 每一屏先有一个强标题，再用短正文提供证据；禁止多层相同字号制造平坦层级。

## Elevation

系统默认平面，通过颜色叠层、边框和轻微错位表达深度。阴影只用于应用图标、漂浮印章和悬停状态，绝不把所有内容变成卡片。

### Shadow Vocabulary

- **Paper Lift**（`0 18px 45px rgba(20, 32, 26, 0.14)`）：仅用于可拖动或明显悬浮的贴纸对象。
- **Icon Lift**（`0 20px 38px rgba(36, 70, 232, 0.22)`）：仅用于产品图标。

**The Flat-By-Default Rule.** 静止内容保持平面；如果一个普通文字区需要阴影才能被理解，说明层级设计失败。

## Components

### Buttons

- **Shape:** 胶囊印章（999px）。
- **Primary:** Plant Ink 背景与 Cool Paper 文字，16×24px 内边距。
- **Accent:** Signal Lime 背景，承担唯一主下载动作。
- **Hover / Focus:** 只做 2px 位移、颜色翻转和 3px 清晰焦点环；减少动画模式下取消位移。

### Chips

- **Style:** 珊瑚红或浅蓝背景的短标签，胶囊形，不承载长文本。
- **State:** 语言切换使用真实按钮和 `aria-pressed`，不能只是装饰文字。

### Cards / Containers

- **Corner Style:** 海报纸张使用 28px；列表行保持直角或极小圆角。
- **Background:** 通过整段色块和分隔线组织，不使用重复等大卡片网格。
- **Shadow Strategy:** 默认无阴影，参照 Elevation。
- **Internal Padding:** 随视口使用 28–56px 流式间距。

### Navigation

桌面导航像海报页眉，品牌在左，项目索引、GitHub 与双语切换在右。移动端保留品牌、项目锚点和语言切换，次要链接进入页尾；焦点状态始终可见。

### Project Poster Row

每个项目是一条独立海报行：序号、真实产品图标、名称、状态、简短价值和明确箭头。不同项目可以改变局部色块，但不能改变导航和可信度信息结构。

## Do's and Don'ts

### Do:

- **Do** 让首页首先记住 GapLab，再让访客快速进入 `/apps/<project>/`。
- **Do** 使用真实产品图标、版本、下载与隐私链接作为视觉内容。
- **Do** 保持 WCAG AA 对比度、键盘焦点、双语切换和减少动画。
- **Do** 用少量手绘 SVG 星芒与轨迹建立作者性。

### Don't:

- **Don't** 做通用 SaaS 落地页，不使用紫色渐变、玻璃卡片、模板化功能卡网格。
- **Don't** 做个人简历或社交媒体资料页，GapLab 是作品与产品的主体。
- **Don't** 复制参考作品的具体构图、文案或插画。
- **Don't** 用视觉噱头掩盖下载、安全、兼容性和隐私信息。
- **Don't** 使用纯黑、纯白、渐变文字或装饰性侧边粗色条。
