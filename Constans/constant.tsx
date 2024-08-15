import { ReactNode } from "react";
import {
  ComapinesImages,
  FeatureBlocks,
  FeatureComp,
  footer_Links,
  Pricing_Details,
} from "./type";

export const Navbar_Links = ["feature", "pricing", "testemoniles", "contact"];

export const Comapines_Images: ComapinesImages[] = [
  {
    img: "/companies/company-1.svg",
    alt: "image1",
  },
  {
    img: "/companies/company-2.svg",
    alt: "image2",
  },
  {
    img: "/companies/company-3.svg",
    alt: "image3",
  },
  {
    img: "/companies/company-4.svg",
    alt: "image4",
  },
  {
    img: "/companies/company-5.svg",
    alt: "image5",
  },
];

export const Feature_Blocks: FeatureBlocks[] = [
  {
    img: "/features/bar-chart.png",
    head: "Reporting dashboard",
    paragraph:
      "Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams.",
  },
  {
    img: "/features/calendar.png",
    head: "Meeting scheduling",
    paragraph:
      "Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration.",
  },
  {
    img: "/features/protect.png",
    head: "100% secured",
    paragraph:
      "Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard.",
  },
];

export const Feature_Comp: FeatureComp[] = [
  {
    imageurl: "/features/messaing.svg",
    title: "Integrated Messaging System",
    content:
      "The integrated messaging system within the CRM dashboard for engineering teams allows for instant and seamless communication among team members. It eliminates the need for external messaging platforms, keeping all project-related conversations organized and easily accessible within the dashboards interface.",
    isreverse: false,
  },
  {
    imageurl: "/features/task-management.svg",
    title: "Resource Allocation and Task Management",
    content:
      "The task management system within the CRM dashboard for engineering teams enables efficient tracking and assignment of tasks. It provides a centralized platform to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team members.",
    isreverse: true,
  },
];

export const PricingDetails: Pricing_Details[] = [
  {
    title: "freelancer",
    Head: "The essentials to provide your best work for your clients.",
    Monthlyprice: "15",
    AnyallyPrice: "144",
    isMostpopular: false,
    priceList: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    glowPosition: "right",
  },
  {
    title: "Startup",
    Head: "A plan that scales with your rapidly growing business.",
    Monthlyprice: "30",
    AnyallyPrice: "288",
    isMostpopular: true,
    priceList: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    title: "enterprise",
    Head: "Dedicated support and infrastructure for your company.",
    Monthlyprice: "48",
    AnyallyPrice: "576",
    isMostpopular: false,
    priceList: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],

    glowPosition: "left",
  },
];

export const customers = [
  {
    paragraph:
      "CRM dashboard boosted our engineering team's productivity and efficiency. Highly recommended!",
    img: "/Images/Customers/user-1.webp",
    name: "ahmed taha",
    Position: "team leader",
  },
  {
    paragraph:
      "Game-changer for our engineering team, revolutionizing project management and collaboration.",
    img: "/Images/Customers/user-2.webp",
    name: "Abdellah massoudi",
    Position: "startup founder",
  },
  {
    paragraph:
      "Simplified project management, improved communication, and empowered decision-making. Highly endorsed!",
    img: "/Images/Customers/user-3.webp",
    name: "omar fahed",
    Position: "team leader",
  },
];

export const footerLinks: footer_Links[] = [
  {
    title: "solutions",
    Links: ["pricing", "documentaion", "guides", "API status"],
  },
  {
    title: "support",
    Links: ["pricing", "documentaion", "guides", "API status"],
  },
  {
    title: "company",
    Links: ["about", "blog", "jobs", "press", " partners"],
  },
  {
    title: "legal",
    Links: ["claim", "privacy", "terms"],
  },
];
