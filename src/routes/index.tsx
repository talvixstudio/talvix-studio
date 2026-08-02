import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/talvix/site-header";
import { Hero } from "@/components/talvix/hero";
import { Services } from "@/components/talvix/services";
import { Process } from "@/components/talvix/process";
import { Work } from "@/components/talvix/work";
import { Studio } from "@/components/talvix/studio";
import { Faq, faqs } from "@/components/talvix/faq";
import { ContactCta, SiteFooter } from "@/components/talvix/contact";
import { Ambient } from "@/components/talvix/ambient";
import { Cursor } from "@/components/talvix/cursor";
import { Intro } from "@/components/talvix/intro";
import nbAvif980 from "@/assets/hero-notebook-980.avif";
import nbAvif1600 from "@/assets/hero-notebook-1600.avif";

const title = "Talvix Studio — Sites e produtos digitais que fecham negócio";
const description =
  "Estúdio de design e engenharia digital. Sites premium, landing pages, UI/UX e aplicações web entregues em 3 a 6 semanas, com escopo e preço fechados por escrito.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        href: nbAvif1600,
        imageSrcSet: `${nbAvif980} 980w, ${nbAvif1600} 1600w`,
        imageSizes: "(max-width: 1024px) 92vw, 980px",
        fetchPriority: "high",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: "Talvix Studio",
              description,
              email: "contato@talvix.studio",
              areaServed: "Global",
              knowsLanguage: ["pt-BR", "en", "es"],
              serviceType: [
                "Web design",
                "Landing pages",
                "UI/UX design",
                "Identidade visual",
                "Desenvolvimento de aplicações web",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-background">
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Intro />
      <Ambient />
      <Cursor />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Hero />
          <Services />
          <Process />
          <Work />
          <Studio />
          <Faq />
          <ContactCta />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
