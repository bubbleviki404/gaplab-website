import Link from "next/link";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteNav() {
  return (
    <nav className="siteNav pageShell" aria-label="GapLab navigation">
      <Link className="wordmark" href="/" aria-label="GapLab home">
        <span>GAP</span><i>✦</i><span>LAB</span>
      </Link>
      <div className="siteNavLinks">
        <Link href="/portfolio/">portfolio</Link>
        <a href="https://github.com/bubbleviki404">GitHub</a>
        <LanguageSwitch />
      </div>
    </nav>
  );
}
