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
          "lorem ipsum dolor sit amet lore tell tellus et netus et sapien",
      },
      {
        id: 2,
        text: "Copyright Registration ",
        route: "/services/copyright-registration",
        icon: "copyright",
        details:
          "lorem ipsum dolor sit amet lore tell tellus et netus et sapien",
      },
      {
        id: 3,
        text: "Amazon Brand Registry",
        route: "#",
        icon: "amazon",
        details:
          "lorem ipsum dolor sit amet lore tell tellus et netus et sapien",
      },
      {
        id: 4,
        text: "Business Formation",
        route: "#",
        icon: "business",
        details:
          "lorem ipsum dolor sit amet lore tell tellus et netus et sapien",
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
