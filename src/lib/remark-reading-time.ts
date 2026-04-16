import type { Root } from 'mdast';
import { toString as mdastToString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

type AstroVfileData = { astro?: { frontmatter?: Record<string, unknown> } };

export function remarkReadingTime() {
  return (tree: Root, { data }: { data: AstroVfileData }) => {
    const frontmatter = data.astro?.frontmatter;
    if (!frontmatter) return;
    const readingTime = getReadingTime(mdastToString(tree));
    frontmatter.readingTime = readingTime.text;
    frontmatter.readingTimeMinutes = Math.ceil(readingTime.minutes);
  };
}
