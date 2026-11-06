import { SITE_URL } from "@/lib/site-data.mjs";
export default function sitemap() {
  return [{ url: SITE_URL, changeFrequency: "weekly", priority: 1 }];
}
