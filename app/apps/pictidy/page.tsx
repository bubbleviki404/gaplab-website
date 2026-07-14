import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lang } from "../../components/Lang";
import { SiteNav } from "../../components/SiteNav";
import { PictidyDemo } from "./PictidyDemo";

const appStoreURL = "https://apps.apple.com/app/pictidy/id6761088507";

export const metadata: Metadata = {
  title: "Pictidy｜按日期轻松整理相册",
  description: "按日期浏览照片与视频，滑动决定保留或待删，最后统一确认。无需注册，核心处理在本地完成。",
};

const steps = [
  {
    number: "01",
    zhTitle: "先找到那一天",
    enTitle: "Start with a day",
    zhCopy: "相册按日期展开，先看清照片来自哪一天，再决定从哪里开始。",
    enCopy: "Your library opens by date, so you always know where a cleanup session begins.",
  },
  {
    number: "02",
    zhTitle: "滑一下，决定留或走",
    enTitle: "Swipe to keep or clear",
    zhCopy: "左右保留，下滑标记待删。一个直觉手势，不在复杂菜单里来回判断。",
    enCopy: "Swipe sideways to keep, down to mark for removal. One gesture, no menu maze.",
  },
  {
    number: "03",
    zhTitle: "最后统一确认",
    enTitle: "Confirm before deleting",
    zhCopy: "待删内容先进入结算台，统一核对后才移入系统“最近删除”。",
    enCopy: "Review every marked item together before anything moves to Recently Deleted.",
  },
];

export default function PictidyPage() {
  return (
    <main className="pictidyPage">
      <SiteNav current="pictidy" />

      <section className="pictidyHero pageShell">
        <div className="pictidyIntro">
          <Image className="pictidyMark" src="/pictidy/icon.png" alt="Pictidy" width={92} height={92} priority />
          <p className="productKicker"><span /> iPhone · iOS 17.6+ · Free</p>
          <h1>Pictidy</h1>
          <h2><Lang zh={<>相册很满，<br />整理可以很轻。</>} en={<>A full library.<br />A lighter way through.</>} /></h2>
          <p><Lang
            zh="按日期进入，滑动决定保留或待删，删除前再统一确认。把原本需要反复判断的相册整理，变成一个顺手的动作。"
            en="Enter by date, swipe to keep or mark, then review everything before deletion. Photo cleanup becomes one calm, repeatable motion."
          /></p>
          <div className="productActions pictidyActions">
            <a className="pictidyStoreButton" href={appStoreURL}><Lang zh="在 App Store 下载" en="Download on the App Store" /><span>↗</span></a>
            <span><Lang zh="无需注册 · 不收集数据" en="No account · No data collected" /></span>
          </div>
        </div>

        <div className="pictidyPhoneStage" aria-label="Pictidy app preview">
          <div className="pictidyHalo" />
          <Image src="/pictidy/calendar.webp" alt="Pictidy 用每日照片缩略图组成的日历视图" width={942} height={2048} priority />
          <div className="floatingNote noteKeep"><span>←</span><Lang zh="保留" en="Keep" /></div>
          <div className="floatingNote noteClear"><span>↓</span><Lang zh="待删" en="Clear" /></div>
          <div className="pictidyRabbit">✦ <Lang zh="一天一天来" en="One day at a time" /></div>
        </div>
      </section>

      <section className="pictidyProof pageShell" aria-label="Pictidy product facts">
        <span><b>2.1 MB</b><Lang zh="轻量下载" en="Lightweight" /></span>
        <span><b>0</b><Lang zh="收集的数据" en="Data collected" /></span>
        <span><b>3</b><Lang zh="步完成清理" en="Steps to tidy" /></span>
      </section>

      <section className="pictidyFlow pageShell">
        <header>
          <p><Lang zh="把整理变成直觉" en="Make tidying intuitive" /></p>
          <h2><Lang zh={<>不追求一次整理完。<br />只从今天的一小段开始。</>} en={<>No need to finish it all.<br />Just begin with one small day.</>} /></h2>
        </header>
        <div className="pictidyStepList">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3><Lang zh={step.zhTitle} en={step.enTitle} /></h3>
              <p><Lang zh={step.zhCopy} en={step.enCopy} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className="pictidyGesture pageShell">
        <div className="gesturePhone">
          <PictidyDemo />
          <span className="gestureKeep"><b>← →</b><Lang zh="保留" en="Keep" /></span>
          <span className="gestureDelete"><b>↓</b><Lang zh="待删" en="Mark" /></span>
        </div>
        <div className="gestureCopy">
          <p>ONE SCREEN · THREE DECISIONS</p>
          <h2><Lang zh={<>照片在中间，<br />决定在手势里。</>} en={<>The photo stays central.<br />Decisions live in gestures.</>} /></h2>
          <p><Lang
            zh="没有工具栏迷宫，也不会一滑就永久删除。保留、收藏和待删都在同一页完成，最后仍由你统一确认。"
            en="No toolbar maze and no instant permanent deletion. Keep, favorite and mark in one view, then confirm everything together."
          /></p>
          <div className="gestureLegend"><span>← → <Lang zh="保留" en="Keep" /></span><span>♡ <Lang zh="收藏" en="Favorite" /></span><span>↓ <Lang zh="待删" en="Mark" /></span></div>
          <p className="gestureAfter"><Lang zh="当天结束后，可回到大厅，也可继续清理前一天或后一天。" en="When the day is done, return home or continue with the day before or after." /></p>
        </div>
      </section>

      <section className="pictidyGallery" aria-labelledby="pictidy-gallery-title">
        <div className="pageShell">
          <div className="pictidyGalleryIntro">
            <p>PICTIDY IN ACTION</p>
            <h2 id="pictidy-gallery-title"><Lang zh={<>看得见进度，<br />删得更放心。</>} en={<>See the progress.<br />Clear with confidence.</>} /></h2>
          </div>
          <div className="pictidyScreens">
            <Image src="/pictidy/1.jpg" alt="Pictidy 按日期整理相册" width={720} height={1558} />
            <Image src="/pictidy/3.jpg" alt="Pictidy 滑动决定保留或待删" width={720} height={1558} />
            <Image src="/pictidy/4.jpg" alt="Pictidy 删除前统一确认" width={720} height={1558} />
            <Image src="/pictidy/8.jpg" alt="Pictidy 清理结果与释放空间" width={720} height={1558} />
          </div>
        </div>
      </section>

      <section className="pictidyPrivacy pageShell">
        <div className="privacyOrb"><span>0</span><Lang zh="数据收集" en="data collected" /></div>
        <div>
          <p><Lang zh="照片是私人的" en="Your photos are personal" /></p>
          <h2><Lang zh={<>核心处理留在设备上，<br />也不要求你注册账号。</>} en={<>Core processing stays on device.<br />No account is required.</>} /></h2>
          <a className="inkLink" href={appStoreURL}><Lang zh="查看 App Store 隐私标签" en="View App Store privacy label" /> ↗</a>
        </div>
      </section>

      <section className="pictidyDownload pageShell">
        <Image src="/pictidy/icon.png" alt="" width={110} height={110} />
        <p>Pictidy for iPhone</p>
        <h2><Lang zh={<>今天，先整理<br />一个日期。</>} en={<>Today, tidy<br />one small day.</>} /></h2>
        <a className="pictidyStoreButton" href={appStoreURL}><Lang zh="在 App Store 免费获取" en="Get it free on the App Store" /><span>↗</span></a>
      </section>

      <footer className="productFooter pageShell">
        <Link href="/" className="footerMark">GAP<span>✦</span>LAB</Link>
        <p><Lang zh="Pictidy，由 GapLab 独立制作。" en="Pictidy is independently made by GapLab." /></p>
        <div><a href={appStoreURL}>App Store ↗</a><a href="mailto:hello@vikigaplab.com"><Lang zh="联系" en="Contact" /></a></div>
      </footer>
    </main>
  );
}
