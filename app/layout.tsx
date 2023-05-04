/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "ChatGPT 中文版 - 免费在线聊天 OpenAI & ChatGPT账号购买",
  description: "ChatGPT 中文版 OpenAI中文官网 ChatGPT网页版免费在线聊天入口 OpenAI & ChatGPT账号购买交易平台.",
  keywords: "ChatGPT,chatgpt,ChatGPT中文站,人工智能,AI,OpenAI,ChatGPT下载,ChatGPT官网,ChatGPT账号,ChatGPT中文,ChatGPT注册,ChatGPT免费体验,ChatGPT中文站,ChatGPT中文网,ChatGPT中文版,ChatGPT中文镜像,ChatGPT中文官网.",
  appleWebApp: {
    title: "ChatGPT 中文版",
    statusBarStyle: "default",
  },
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="theme-color"
          content="#151515"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
