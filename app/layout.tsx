import type { Metadata } from "next";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vikigaplab.com"),
  title: { default: "GapLab｜Small tools, big relief", template: "%s｜GapLab" },
  description: "GapLab 是一个从真实生活出发，持续创造轻量创作与日常效率工具的一人产品实验室。 Small tools for real-life gaps.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-lang="zh"><body>{children}</body></html>;
}
