import { BiChevronDown, BiDetail } from "react-icons/bi";

export const navItems = [
  {
    id: 1,
    text: "Home",
    route: "/",
  },
  {
    id: 2,
    text: "Our Services",
    route: "/services",
    icon: <BiChevronDown />,
    subItems: [
      {
        id: 1,
        text: "Trademark Registration",
        route: "/services/trademark-registration",
        icon: "trademark",
        details:
          "Secure your brand’s identity with legal protection.",
      },
      {
        id: 2,
        text: "Copyright Registration ",
        route: "/services/copyright-registration",
        icon: "copyright",
        details:
          "Safeguard your creative works from unauthorized use.",
      },
      {
        id: 3,
        text: "Amazon Brand Registry",
        route: "#",
        icon: "amazon",
        details:
          "Protect your brand and products on Amazon.",
      },
      {
        id: 4,
        text: "Business Formation",
        route: "#",
        icon: "business",
        details:
          "Start your business with legal compliance and structure.",
      },
    ],
  },
  {
    id: 4,
    text: "About Us",
    route: "/about-us",
  },
  {
    id: 3,
    text: "Contact Us",
    route: "/contact-us",
  },
  {
    id: 5,
    text: "FAQ's",
    route: "/faq",
  },
];

export const navItemsMobile = [
  {
    id: 1,
    text: "Home",
    route: "/",
  },
  {
    id: 11,
    text: "Trademark Registration",
    route: "/services/trademark-registration",
  },
  {
    id: 2,
    text: "Copyright Registration ",
    route: "/services/copyright-registration",
  },
  {
    id: 3,
    text: "Amazon Brand Registry",
    route: "#",
  },
  {
    id: 4,
    text: "Business Formation",
    route: "#",
  },
  {
    id: 4,
    text: "About Us",
    route: "/about-us",
  },
  {
    id: 3,
    text: "Contact Us",
    route: "/contact-us",
  },
  {
    id: 5,
    text: "FAQ's",
    route: "/faq",
  },
];
