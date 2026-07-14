import Link from "next/link";
import { Lang } from "./Lang";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteNav({ current }: { current?: "catchit" | "pictidy" }) {
  return (
    <nav className="siteNav pageShell" aria-label="GapLab navigation">
      <Link className="wordmark" href="/" aria-label="GapLab home">
        <span>GAP</span><i>✦</i><span>LAB</span>
      </Link>
      <div className="siteNavLinks">
        <Link href={current ? "/#projects" : "#projects"}><Lang zh="项目" en="Projects" /></Link>
        <a href="https://github.com/bubbleviki404">GitHub</a>
        <LanguageSwitch />
      </div>
    </nav>
  );
}
