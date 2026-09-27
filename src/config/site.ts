export const site = {
  name: "Rooftop Labs",
  url: "https://rooftoplabs.ai",
  title: "Rooftop Labs - Fractional Head of AI for Property Management",
  description:
    "Rooftop Labs is the fractional Head of AI for property management companies. We assess how your operation really runs, then implement practical AI that saves hours, prevents missed notices, and gives you the capacity to grow.",
  email: "hello@rooftoplabs.ai",
  founder: {
    name: "Nadaa Taiyab",
    role: "Founder & Fractional Head of AI",
    linkedin: "https://www.linkedin.com/in/nadaataiyab/",
  },
  // Formspree form. Public by design: it appears in the page's HTML.
  contactFormEndpoint: "https://formspree.io/f/xaenlvaq",
} as const;

export const nav = [
  { href: "#fractional", label: "Fractional Head of AI" },
  { href: "#approach", label: "How we work" },
  { href: "#founder", label: "About" },
] as const;
