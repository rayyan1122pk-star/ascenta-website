export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Whitfield",
    role: "Founder",
    company: "Nova Realty Group",
    quote:
      "Ascenta rebuilt our entire web presence and the results speak for themselves — lead volume nearly tripled within two months of launch. They understood our business, not just our design brief.",
    rating: 5,
    avatar: "/testimonials/sarah.svg",
  },
  {
    name: "Daniel Cho",
    role: "CEO",
    company: "FlowStack Inc.",
    quote:
      "We'd tried two other agencies before working with Ascenta. They were the first to actually simplify our product story instead of adding more complexity. Trial signups nearly doubled.",
    rating: 5,
    avatar: "/testimonials/daniel.svg",
  },
  {
    name: "Dr. Amina Farooq",
    role: "Medical Director",
    company: "Atlas Clinic",
    quote:
      "Our patients now book appointments online instead of calling, which has completely changed our front-desk workload. The site feels as professional as our clinic actually is.",
    rating: 5,
    avatar: "/testimonials/amina.svg",
  },
  {
    name: "James Okoro",
    role: "Owner",
    company: "BuildRight Construction",
    quote:
      "We were skeptical a website could actually bring in business, but the quote requests have more than doubled. Ascenta was clear, responsive, and delivered exactly on schedule.",
    rating: 5,
    avatar: "/testimonials/james.svg",
  },
  {
    name: "Laura Bennett",
    role: "Managing Partner",
    company: "Counsel & Partners",
    quote:
      "Ascenta translated our firm's reputation into a website that finally matches it. Consultation requests are up significantly, and clients regularly compliment the site itself.",
    rating: 5,
    avatar: "/testimonials/laura.svg",
  },
  {
    name: "Michael Tran",
    role: "Head of Product",
    company: "Lumen Software",
    quote:
      "The AI support assistant Ascenta built now deflects nearly half our repetitive tickets. It was live within a month and has paid for itself many times over.",
    rating: 5,
    avatar: "/testimonials/michael.svg",
  },
];
