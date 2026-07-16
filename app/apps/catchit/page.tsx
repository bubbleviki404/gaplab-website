import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lang } from "../../components/Lang";
import { SiteNav } from "../../components/SiteNav";

const repository = "bubbleviki404/catch-it";
const releaseURL = `https://github.com/${repository}/releases/latest/download/CatchIt-latest.zip`;
const releasePage = `https://github.com/${repository}/releases/latest`;
const sourceURL = `https://github.com/${repository}`;

export const metadata: Metadata = {
  title: "CatchIt｜Mac screenshot and annotation tool",
  description: "Catch a region or full screen, save and copy instantly, then add rectangles, notes, text, mosaic and crop when the image needs explanation.",
};

const features = [
  {
    number: "01",
    zhTitle: "截完即走",
    enTitle: "Capture and move on",
    zhCopy: "框选或全屏截图自动进入按日目录，同时复制到剪贴板。",
    enCopy: "Region or full-screen captures land in a dated folder and your clipboard.",
  },
  {
    number: "02",
    zhTitle: "重点就在图上",
    enTitle: "Put the point on the image",
    zhCopy: "矩形、便签、文字、马赛克与裁剪，共用一套直接的操作逻辑。",
    enCopy: "Rectangles, notes, text, mosaic and crop share one direct interaction model.",
  },
  {
    number: "03",
    zhTitle: "最近截图随手拿",
    enTitle: "Recent shots stay close",
    zhCopy: "菜单栏查看缩略图，复制、删除或直接在 Finder 打开。",
    enCopy: "Use the menu bar to preview, copy, delete or reveal captures in Finder.",
  },
];

export default function CatchItPage() {
  return (
    <main className="catchitPage">
      <SiteNav current="catchit" />

      <section className="catchitHero pageShell">
        <div className="catchitIntro">
          <div className="catchitIdentity">
            <Image className="catchitMark" src="/catchit-icon.png" alt="CatchIt" width={96} height={96} priority />
            <p className="productKicker"><span /> macOS 13+ · Apple Silicon + Intel</p>
          </div>
          <h1>Catch<span>It</span></h1>
          <h2><Lang zh={<>截图之后，<br />重点已经在图上。</>} en={<>Capture it.<br />Make the point.</>} /></h2>
          <p className="productLead"><Lang
            zh="一键框选或全屏，自动保存并复制。需要解释时，直接标重点、贴便签、打马赛克，然后继续工作。"
            en="Capture a region or full screen, save and copy instantly. When context matters, mark it, note it, blur it, then keep moving."
          /></p>
          <div className="productActions">
            <a className="accentButton" href={releaseURL}><Lang zh="下载最新版本" en="Download latest" /><span>↗</span></a>
            <a className="inkLink" href={sourceURL}><Lang zh="查看源代码" en="View source" /> ↗</a>
          </div>
          <p className="releaseProof"><Lang zh="免费开源 · Developer ID 签名与 Apple 公证" en="Free and open source · Developer ID signed and Apple notarized" /></p>
        </div>

        <div className="editorPoster" aria-label="CatchIt annotation editor illustration">
          <div className="mockToolbar"><i /><i /><i /><span>CatchIt</span></div>
          <div className="mockCanvas">
            <div className="mockTarget" />
            <div className="mockNote"><Lang zh={<>这里是重点<br /><small>拖动、缩放、换色</small></>} en={<>The point is here<br /><small>Move, resize, recolor</small></>} /></div>
            <div className="mockTools"><b>□</b><b>T</b><b>▦</b><b>⌗</b></div>
          </div>
          <div className="versionSticker">v0.4.1<br /><small>ready</small></div>
          <span className="mockSpark">✦</span>
        </div>
      </section>

      <section className="shortcutStrip" aria-label="Default shortcuts">
        <div className="pageShell">
          <span><Lang zh="快速框选" en="Quick region" /> <kbd>⌃⌘2</kbd></span>
          <span><Lang zh="快速全屏" en="Quick screen" /> <kbd>⌃⌘1</kbd></span>
          <span><Lang zh="框选并标注" en="Region + edit" /> <kbd>⌃⌘E</kbd></span>
          <span><Lang zh="全屏并标注" en="Screen + edit" /> <kbd>⌃⌘F</kbd></span>
        </div>
      </section>

      <section className="featureRun pageShell" id="features">
        <header><p><Lang zh="一条完整的截图链路" en="One complete capture flow" /></p><span>FAST / CLEAR / LOCAL</span></header>
        {features.map((feature) => (
          <article key={feature.number}>
            <span>{feature.number}</span>
            <h2><Lang zh={feature.zhTitle} en={feature.enTitle} /></h2>
            <p><Lang zh={feature.zhCopy} en={feature.enCopy} /></p>
          </article>
        ))}
      </section>

      <section className="localSection">
        <div className="pageShell localGrid">
          <div className="localStamp">LOCAL<br />ONLY</div>
          <div><p><Lang zh="截图留在你的 Mac" en="Your captures stay on your Mac" /></p><h2><Lang zh={<>本地处理，<br />不要求登录。</>} en={<>Processed locally.<br />No account required.</>} /></h2></div>
          <p><Lang
            zh="CatchIt 不上传截图，不收集使用分析。你决定保存目录、保留期限和什么时候删除。"
            en="CatchIt does not upload captures or collect analytics. You choose the folder, retention period and when to delete."
          /></p>
        </div>
      </section>

      <section className="downloadPoster pageShell" id="download">
        <span className="downloadSpark" aria-hidden="true">✦</span>
        <p>CatchIt for macOS</p>
        <h2><Lang zh={<>把截图这件小事，<br />重新变得顺手。</>} en={<>Make screenshots<br />feel effortless again.</>} /></h2>
        <ol>
          <li><span>1</span><Lang zh="下载并将 CatchIt 移到“应用程序”" en="Download and move CatchIt to Applications" /></li>
          <li><span>2</span><Lang zh="首次截图时允许“屏幕录制”权限" en="Allow Screen Recording on the first capture" /></li>
          <li><span>3</span><Lang zh="使用默认快捷键，或设置自己的组合" en="Use the defaults or choose your own shortcuts" /></li>
        </ol>
        <div className="productActions centered">
          <a className="accentButton" href={releaseURL}><Lang zh="下载 CatchIt" en="Download CatchIt" /><span>↓</span></a>
          <a className="inkLink" href={releasePage}><Lang zh="版本与校验信息" en="Release and checksums" /> ↗</a>
        </div>
      </section>

      <footer className="productFooter pageShell">
        <Link href="/" className="footerMark">GAP<span>✦</span>LAB</Link>
        <p><Lang zh="CatchIt，由 GapLab 独立制作。" en="CatchIt is independently made by GapLab." /></p>
        <div><Link href="/apps/catchit/privacy/"><Lang zh="隐私" en="Privacy" /></Link><a href={sourceURL}>GitHub ↗</a></div>
      </footer>
    </main>
  );
}
