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
        <div className="posterMeta"><span>Independent one-person product lab</span></div>
        <Spark className="sparkOne" /><Spark className="sparkTwo" />
        <span className="orbit orbitOne" aria-hidden="true" />
        <h1 id="gaplab-title"><span>GAP</span><span>LAB</span></h1>
        <div className="heroStamp"><span>GAP → TOOL</span><Lang zh={<>发现缺口<br />简化动作</>} en={<>Spot the gap<br />Simplify it</>} /></div>
        <p className="heroIntro"><Lang
          zh={<>从真实生活里的小摩擦出发，<br />做简单、好用、有温度的个人轻工具。</>}
          en={<>Personal tools that turn everyday friction<br />into one simple, warm, intuitive action.</>}
        /></p>
      </section>
    </main>
  );
}
