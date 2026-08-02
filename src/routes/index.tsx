import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/talvix/site-header";
import { Hero } from "@/components/talvix/hero";
import { Services } from "@/components/talvix/services";
import { Process } from "@/components/talvix/process";
import { Work } from "@/components/talvix/work";
import { Studio } from "@/components/talvix/studio";
import { ContactCta, SiteFooter } from "@/components/talvix/contact";

const title = "Talvix Studio — Websites premium, UI/UX e produtos digitais";
const description =
  "Estúdio de design e engenharia digital. Websites premium, landing pages, UI/UX, identidade visual e aplicações web com acabamento de produto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Studio />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
