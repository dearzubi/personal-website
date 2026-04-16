<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS feed</title>
        <style>
          :root {
            color-scheme: light dark;
            --bg: #ffffff;
            --fg: #0f172a;
            --muted: #64748b;
            --border: #e2e8f0;
            --accent: #0284c7;
            --card: #f8fafc;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #0b1220;
              --fg: #e2e8f0;
              --muted: #94a3b8;
              --border: #1f2937;
              --accent: #38bdf8;
              --card: #111827;
            }
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 2rem 1.25rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
            line-height: 1.55;
            color: var(--fg);
            background: var(--bg);
          }
          .wrap { max-width: 48rem; margin: 0 auto; }
          header {
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.25rem;
            margin-bottom: 1.5rem;
          }
          .eyebrow {
            display: inline-block;
            padding: 0.15rem 0.6rem;
            border: 1px solid var(--border);
            border-radius: 999px;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--accent);
            margin-bottom: 0.75rem;
          }
          h1 { margin: 0 0 0.35rem; font-size: 1.6rem; }
          .desc { margin: 0; color: var(--muted); }
          .note {
            margin-top: 1rem;
            padding: 0.75rem 1rem;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            font-size: 0.9rem;
            color: var(--muted);
          }
          .note code {
            background: var(--bg);
            border: 1px solid var(--border);
            padding: 0.1rem 0.35rem;
            border-radius: 0.25rem;
            font-size: 0.85rem;
          }
          ul { list-style: none; margin: 0; padding: 0; }
          li {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
          }
          li:last-child { border-bottom: none; }
          a.post {
            color: var(--fg);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.05rem;
          }
          a.post:hover { color: var(--accent); }
          .meta {
            color: var(--muted);
            font-size: 0.82rem;
            margin-top: 0.15rem;
          }
          .excerpt {
            color: var(--muted);
            margin: 0.4rem 0 0;
            font-size: 0.95rem;
          }
          footer {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border);
            color: var(--muted);
            font-size: 0.82rem;
          }
          footer a { color: var(--accent); }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <div class="eyebrow">RSS feed</div>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
            <div class="note">
              Subscribe in your feed reader by pasting this page's URL, or copy:
              <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
            </div>
          </header>

          <ul>
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a class="post" target="_blank">
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
                <div class="meta"><xsl:value-of select="pubDate"/></div>
                <p class="excerpt"><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
          </ul>

          <footer>
            <a>
              <xsl:attribute name="href"><xsl:value-of select="/rss/channel/link"/></xsl:attribute>
              Back to site
            </a>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
