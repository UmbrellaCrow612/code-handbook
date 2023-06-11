import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
      HandBook
    </span>
  ),
  project: {
    link: "https://github.com/UmbrellaCrow612/code-handbook/tree/main",
  },
  chat: {
    link: "https://discord.com",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  docsRepositoryBase:
    "https://github.com/UmbrellaCrow612/code-handbook/tree/main",
  footer: {
    text: "Code HandBook",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Code HandBook",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Learn programming from beginners to advanced concepts and become a code wizard in no time."
        />
        <meta
          name="og:description"
          content="Learn programming from beginners to advanced concepts and become a code wizard in no time."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="code-handbook.vercel.app" />
        <meta name="twitter:url" content="https://code-handbook.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + " – Code HandBook" : "Code HandBook"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Code HandBook" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <link rel="icon" href="/favicon.jpg" type="image/png" />
        <link
          rel="icon"
          href="/favicon.jpg"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
      </>
    );
  },
};

export default config;
