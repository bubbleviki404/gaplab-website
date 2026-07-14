import type { Metadata } from "next";
import Link from "next/link";
import { Lang } from "../../../components/Lang";
import { SiteNav } from "../../../components/SiteNav";

export const metadata: Metadata = { title: "CatchIt Privacy" };

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <SiteNav current="catchit" />
      <article className="legal pageShell">
        <p className="legalKicker"><Lang zh="最后更新：2026-07-14" en="Last updated: July 14, 2026" /></p>
        <h1><Lang zh="隐私说明" en="Privacy" /></h1>
        <p className="legalLead"><Lang zh="CatchIt 是本地优先的 macOS 截图工具。你的截图属于你。" en="CatchIt is a local-first macOS screenshot tool. Your captures belong to you." /></p>

        <section><span>01</span><div><h2><Lang zh="数据处理" en="Data handling" /></h2><ul>
          <li><Lang zh="截图、标注和便签仅在你的 Mac 上处理。" en="Captures, annotations and notes are processed only on your Mac." /></li>
          <li><Lang zh="CatchIt 不上传截图，不收集分析、设备标识、联系人或账号信息。" en="CatchIt does not upload captures or collect analytics, device identifiers, contacts or account data." /></li>
          <li><Lang zh="截图保存在你选择的本地目录。" en="Captures are saved to the local folder you choose." /></li>
          <li><Lang zh="检查更新只在你主动点击时访问 GitHub Releases。" en="Update checks access GitHub Releases only when you request one." /></li>
        </ul></div></section>

        <section><span>02</span><div><h2><Lang zh="系统权限" en="System permissions" /></h2><p><Lang zh="屏幕录制权限只用于截取你选择的屏幕或区域。登录时启动只在你主动开启后注册。" en="Screen Recording is used only to capture the screen or region you choose. Launch at Login is registered only after you enable it." /></p></div></section>
        <section><span>03</span><div><h2><Lang zh="保留与删除" en="Retention and deletion" /></h2><p><Lang zh="你可以永久保留截图，也可以设置期限，将过期截图移到废纸篓。卸载 CatchIt 不会自动删除截图目录。" en="You can keep captures indefinitely or set a retention period that moves expired files to Trash. Uninstalling CatchIt does not remove your capture folder." /></p></div></section>
        <section><span>04</span><div><h2><Lang zh="开源" en="Open source" /></h2><p><Lang zh="CatchIt 的源码公开，应用不包含广告或第三方分析 SDK。" en="CatchIt is open source and includes no advertising or third-party analytics SDKs." /></p></div></section>

        <Link className="backLink" href="/apps/catchit/"><Lang zh="← 返回 CatchIt" en="← Back to CatchIt" /></Link>
      </article>
    </main>
  );
}
