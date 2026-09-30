import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "في السحاب | بيت إبداعي متكامل في القاهرة" },
      { name: "description", content: "في السحاب بيت إبداعي مصري يجمع الاستراتيجية، الهوية، المحتوى، الإنتاج، التسويق والطباعة في فريق واحد." },
      { property: "og:title", content: "في السحاب | خلي براندك يطلع السحاب" },
      { property: "og:description", content: "شريك إبداعي واحد يبني براندك من أول الفكرة لحد أرض الواقع." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
