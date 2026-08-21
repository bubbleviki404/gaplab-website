import type { Metadata } from "next";
import { Lang } from "../components/Lang";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = { title: "GapLab Pinterest Inspiration Spike — Privacy" };

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <SiteNav />
      <article className="legal pageShell">
        <p className="legalKicker"><Lang zh="最后更新：2026-08-21" en="Last updated: August 21, 2026" /></p>
        <h1><Lang zh="GapLab 个人灵感检索 Spike 隐私政策" en="GapLab Personal Inspiration Retrieval Spike — Privacy" /></h1>
        <p className="legalLead">
          <Lang
            zh="这是一个个人可行性验证用的 App，仅由开发者本人（该 Pinterest 账号所有者）使用，不面向公众用户，不用于商业运营。"
            en="This is a personal feasibility-test app, used only by its developer (the owner of the connected Pinterest account). It is not offered to the public and is not run as a commercial service."
          />
        </p>

        <section><span>01</span><div><h2><Lang zh="我们收集哪些数据" en="What data we collect" /></h2><ul>
          <li><Lang zh="通过 Pinterest 官方 OAuth 授权，本 App 只读取以下内容：你的 Pinterest 账号基本信息（用户名/账号类型）。" en="Via Pinterest's official OAuth flow, this app only reads: your basic Pinterest account info (username / account type)." /></li>
          <li><Lang zh="你的 boards（图板）列表。" en="Your list of boards." /></li>
          <li><Lang zh="你的 pins（含你自己创建和你收藏/转存的内容）的标题、描述、链接、预览图。" en="Your pins (both ones you created and ones you saved from others) — title, description, link, and preview image." /></li>
        </ul></div></section>

        <section><span>02</span><div><h2><Lang zh="我们如何使用这些数据" en="How we use this data" /></h2><p>
          <Lang
            zh="数据仅用于本地的可行性测试：验证能否根据关键词（例如 “coffee”）从你已保存的 Pinterest 内容中检索出相关灵感。数据只在本地脚本运行环境中处理，不用于训练模型，不用于广告。"
            en="Data is used only for a local feasibility test: checking whether relevant items can be retrieved from your saved Pinterest content by keyword (e.g. “coffee”). Data is processed only in the local script environment — it is not used to train models and not used for advertising."
          />
        </p></div></section>

        <section><span>03</span><div><h2><Lang zh="我们是否分享数据" en="Whether we share data" /></h2><p>
          <Lang zh="不会。数据不会被出售、共享或转移给任何第三方。" en="No. Data is never sold, shared, or transferred to any third party." />
        </p></div></section>

        <section><span>04</span><div><h2><Lang zh="数据存储与保留" en="Storage and retention" /></h2><p>
          <Lang
            zh="Access token 由你自行保存在本地环境变量中，不经由任何服务器中转。抓取到的示例数据（JSON 文件和图片）保存在本地磁盘，用于本次 spike 结束后自行删除。"
            en="The access token is kept in your own local environment variables and never passes through any server. Sample data fetched during the test (JSON files and images) is stored on local disk and deleted by you once the spike is done."
          />
        </p></div></section>

        <section><span>05</span><div><h2><Lang zh="第三方服务" en="Third-party services" /></h2><p>
          <Lang zh="本 App 仅调用 Pinterest 官方 API（api.pinterest.com），不集成任何其他第三方数据服务。" en="This app only calls Pinterest's official API (api.pinterest.com) and integrates no other third-party data service." />
        </p></div></section>

        <section><span>06</span><div><h2><Lang zh="撤销授权" en="Revoking access" /></h2><p>
          <Lang zh="你可以随时在 Pinterest 账号设置的“已连接的应用”中撤销本 App 的访问权限。" en="You can revoke this app's access at any time from “Connected apps” in your Pinterest account settings." />
        </p></div></section>

        <section><span>07</span><div><h2><Lang zh="联系方式" en="Contact" /></h2><p>
          <Lang zh="如对本隐私政策有任何疑问，请联系：bubbleviki404@gmail.com" en="Questions about this policy: bubbleviki404@gmail.com" />
        </p></div></section>
      </article>
    </main>
  );
}
