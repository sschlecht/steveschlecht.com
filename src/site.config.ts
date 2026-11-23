// Edit these once. They're used across the whole site.
export const SITE = {
  name: 'Steve Schlecht',
  title: 'Steve Schlecht',
  description: 'Writing on marketing, SEO, and AI search by Steve Schlecht.',
  url: 'https://steveschlecht.com',
  email: 'hello@steveschlecht.com', // TODO: change to your real email
  linkedin: 'https://www.linkedin.com/in/your-handle/', // TODO: change to your LinkedIn URL
  location: 'Chicago',
};

// Turns a file name like "2026-11-22-my-post" into the URL slug "my-post".
export const postSlug = (id: string) => id.replace(/^\d{4}-\d{2}-\d{2}-/, '');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
