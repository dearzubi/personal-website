import type { Root } from 'mdast';
import { toString as mdastToString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export function remarkReadingTime() {
  return (tree: Root, { data }: { data: Record<string, unknown> }) => {
    const textOnPage = mdastToString(tree);
    const readingTime = getReadingTime(textOnPage);
    const frontmatter = (data.astro as { frontmatter: Record<string, unknown> }).frontmatter;
    frontmatter.readingTime = readingTime.text;
    frontmatter.readingTimeMinutes = Math.ceil(readingTime.minutes);
  };
}
