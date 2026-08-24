export const SITE_URL = 'https://www.ludosport-occitanie.fr';

type PageHead = {
  title: string;
  description: string;
  /** Route path, e.g. '/le-sport'. Defaults to the site root. */
  path?: string;
};

/**
 * Builds the per-route `head` option (title, description, canonical, Open Graph/Twitter title+description, og:url)
 * consumed by TanStack Router's `HeadContent` (rendered in `__root.tsx`). Site-wide constants that don't vary per route
 * (og:type, og:image, twitter:card, etc.) stay static in index.html.
 */
export const buildPageHead = ({ title, description, path = '/' }: PageHead) => {
  const url = `${SITE_URL}${path}`;

  return {
    links: [{ href: url, rel: 'canonical' }],
    meta: [
      { title },
      { content: description, name: 'description' },
      { content: title, property: 'og:title' },
      { content: description, property: 'og:description' },
      { content: url, property: 'og:url' },
      { content: title, name: 'twitter:title' },
      { content: description, name: 'twitter:description' },
    ],
  };
};
