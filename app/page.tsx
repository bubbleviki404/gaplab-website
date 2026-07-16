import Image from "next/image";
import Link from "next/link";
import { Lang } from "./components/Lang";
import { SiteNav } from "./components/SiteNav";

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} aria-hidden="true">✦</span>;
}

export default function LabHome() {
  return (
    <main className="labHome">
      <SiteNav />

      <section className="posterHero pageShell" aria-labelledby="gaplab-title">
        <div className="posterMeta"><span>Independent one-person product lab</span><span>Shanghai · 2026</span></div>
        <Spark className="sparkOne" /><Spark className="sparkTwo" />
        <span className="orbit orbitOne" aria-hidden="true" />
        <h1 id="gaplab-title"><span>GAP</span><span>LAB</span></h1>
        <div className="heroStamp"><span>GAP → TOOL</span><Lang zh={<>发现缺口<br />简化动作</>} en={<>Spot the gap<br />Simplify it</>} /></div>
        <p className="heroIntro"><Lang
          zh={<>从真实生活里的小摩擦出发，<br />做简单、好用、有温度的个人轻工具。</>}
          en={<>Personal tools that turn everyday friction<br />into one simple, warm, intuitive action.</>}
        /></p>
        <a className="scrollCue" href="#projects"><Lang zh="看项目" en="See the work" /><span aria-hidden="true">↓</span></a>
      </section>

      <section className="projectIndex pageShell" id="projects" aria-labelledby="projects-title">
        <header className="indexHeader">
          <p id="projects-title"><Lang zh="已发布项目" en="Released projects" /></p>
          <span>02 / growing</span>
        </header>

        <Link className="projectPoster" href="/apps/catchit/">
          <span className="projectNumber">01</span>
          <div className="projectIconWrap"><Image src="/catchit-icon.png" alt="CatchIt" width={132} height={132} priority /></div>
          <div className="projectCopy">
            <p><span className="statusDot" /> macOS · Open source · v0.4.1</p>
            <h2>CatchIt</h2>
            <span><Lang zh="截图、标重点，然后继续工作。" en="Capture, make the point, keep moving." /></span>
          </div>
          <div className="projectBadge"><Lang zh="现在可用" en="Available now" /></div>
          <span className="projectArrow" aria-hidden="true">↗</span>
        </Link>

        <Link className="projectPoster projectPosterPictidy" href="/apps/pictidy/">
          <span className="projectNumber">02</span>
          <div className="projectIconWrap"><Image src="/pictidy/icon.png" alt="Pictidy" width={132} height={132} /></div>
          <div className="projectCopy">
            <p><span className="statusDot" /> iPhone · App Store · Free</p>
            <h2>Pictidy</h2>
            <span><Lang zh="按日期整理相册，保留重要的，安心删掉其余。" en="Sort by date, keep what matters, clear the rest with confidence." /></span>
          </div>
          <div className="projectBadge projectBadgeStore"><Lang zh="App Store" en="App Store" /></div>
          <span className="projectArrow" aria-hidden="true">↗</span>
        </Link>

        <div className="nextExperiment">
          <Spark />
          <p><Lang zh="下一项实验正在形成。" en="The next experiment is taking shape." /></p>
          <span>03 / ???</span>
        </div>
      </section>

      <section className="manifestoSection">
        <div className="pageShell manifestoGrid">
          <p className="manifestoLabel"><Lang zh="我们的准则" en="Our rule" /></p>
          <blockquote><Lang
            zh={<>观察、简化、创造、分享。<br />把复杂过程压缩成一个直觉动作。</>}
            en={<>Observe, simplify, create, share.<br />Compress a complex process into one intuitive action.</>}
          /></blockquote>
          <div className="manifestoSeal"><span>G</span><small>made with care</small></div>
        </div>
      </section>

      <section className="labMethod pageShell">
        <header><p><Lang zh="实验方法" en="Lab method" /></p><span>HOW WE WORK</span></header>
        <ol>
          <li><span>01</span><h3><Lang zh="观察缺口" en="Observe the gap" /></h3><p><Lang zh="从自己真实遇到、大家却已经习惯忍受的小问题开始。" en="Start with a real friction people have quietly learned to tolerate." /></p></li>
          <li><span>02</span><h3><Lang zh="简化动作" en="Find the smallest action" /></h3><p><Lang zh="不堆功能，先把记忆、判断和反复操作压缩成直觉一步。" en="Replace memory, setup and repeated decisions with one intuitive move." /></p></li>
          <li><span>03</span><h3><Lang zh="创造并分享" en="Create and share" /></h3><p><Lang zh="先做出自己会长期使用的产品，再公开验证和持续改进。" en="Build something worth using, then share, validate and improve it in public." /></p></li>
        </ol>
      </section>

      <footer className="siteFooter pageShell">
        <div className="footerMark">GAP<span>✦</span>LAB</div>
        <p><Lang zh="独立制作，小步发布。" en="Independently made, incrementally shipped." /></p>
        <div><a href="mailto:hello@vikigaplab.com">hello@vikigaplab.com</a><a href="https://github.com/bubbleviki404">GitHub ↗</a></div>
      </footer>
    </main>
  );
}
