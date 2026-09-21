import { projects } from "@/lib/portfolio-data";

export default function sitemap() {
  const baseUrl = "https://neeleshmishra.dev";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/lab`, changeFrequency: "monthly", priority: 0.7 },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.8,
    })),
  ];
}
