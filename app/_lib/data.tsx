import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const whatsapp = '+2348107483900'

export const navLinks = [
  {
    link: "services",
    children: [
      {
        link: 'Event Security',
        href: '/services/event-security'
      },
      {
        link: 'Event Staffing',
        href: '/services/event-staffing'
      },
      {
        link: 'Event Consulting',
        href: '/services/event-consulting'
      }
    ]
  },
  {
    link: "Company",
    children: [
      {
        link: 'About Us',
        href: '/about'
      },
    ]
  },
  {
    link: "Clients & Partners",
    href: "/partners",
    children: []
  }
]

export const ImagesList = Array.from(
  new Set([
    "https://best.garda.com/sites/default/files/2024-07/CMA-Fest_0.png",
    "https://best.garda.com/sites/default/files/2022-09/ESPN.png",
    "https://best.garda.com/sites/default/files/2022-07/logo-ATP-Tour.png",
    "https://best.garda.com/sites/default/files/2021-01/Image%2073.png",
    "https://best.garda.com/sites/default/files/2024-07/ncaa-logo.png",
    "https://best.garda.com/sites/default/files/2024-07/mls-logo.png",
    "https://best.garda.com/sites/default/files/2024-07/NHL.png",
    "https://best.garda.com/sites/default/files/2021-02/F1.png",
    "https://best.garda.com/sites/default/files/2021-01/Image%20118.png",
    "https://best.garda.com/sites/default/files/2021-02/MGM.png",
    "https://best.garda.com/sites/default/files/2021-02/Caesars.png",
    "https://best.garda.com/sites/default/files/2024-11/logo-wnba.png",
    "https://best.garda.com/sites/default/files/2024-11/logo-pga-tour.png",
    "https://best.garda.com/sites/default/files/2024-07/logo-professional-football.png",
    "https://best.garda.com/sites/default/files/2024-07/Grammy-Awards_0.png",
    "https://best.garda.com/sites/default/files/2024-07/UFC.png",
    "https://best.garda.com/sites/default/files/2024-07/United-States-Olympic-Committee_0.png",
    "https://best.garda.com/sites/default/files/2025-01/wwe-logo.png",
    "https://best.garda.com/sites/default/files/2024-07/Rolling-Loud_0.png",
    "https://best.garda.com/sites/default/files/2024-07/Live-Nation_0.png",
  ])
).map(url => ({ url }));


export const cardData = [
  {
    id: "2",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-security.jpg",
    title: "Event security",
    desc: "No matter the scale or size of your event, we offer the best in event management to ensure the energy at your event keeps going with custom-tailored solutions that make all the difference.",
    href:"#"
  },
  {
    id: "1",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-staffing.jpg",
    title: "Event Staffing",
    desc: "As one of the largest providers of event security services in North America, we deliver world-class security staffing solutions that are highly adaptable to events of all kinds—and sizes.",
    href:"#"
  },
  {
    id: "3",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-consulting.jpg",
    title: "Event Consulting",
    desc: "As one of the largest providers of event security services in North America, we deliver world-class security staffing solutions that are highly adaptable to events of all kinds—and sizes.",
    href:"#"
  }
]

export const cardData2 = [
  {
    id: "112",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2022-07/AT%26T%20STADIUM%20AND%20THE%20DALLAS%20COWBOYS%20Final.png",
    title: "AT & T stadium and the dallas cowboys",
    desc: "No matter the scale or size of your event, we offer the best in event management to ensure the energy at your event keeps going with custom-tailored solutions that make all the difference.",
    href:"#"
  },
  {
    id: "111",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2022-09/Nissan%20Stadium.png",
    title: "CMA FEST AT NISSAN STADIUM",
    desc: "As one of the largest providers of event security services in North America, we deliver world-class security staffing solutions that are highly adaptable to events of all kinds—and sizes.",
    href:"#"
  },
  {
    id: "311",
    url: "https://best.garda.com/sites/default/files/styles/rectangular/public/2024-08/Case-Study-MGM-Resorts-International-Venues.jpg",
    title: "MGM Resorts international",
    desc: "As one of the largest providers of event security services in North America, we deliver world-class security staffing solutions that are highly adaptable to events of all kinds—and sizes.",
    href:"#"
  }
]

export const whyData = [
  {
    id: "6",
    count: "14",
    desc: "years experience in the industry",
  },
  {
    id: "9",
    count: "2000",
    desc: "concerts serviced per year",
  },
  {
    id: "22",
    count: "750",
    desc: "Cooperate events and tradeshows serviced",
    href:"#"
  },
  {
    id: "52",
    count: "100",
    desc: "stadiums & arenas serviced",
    href:"#"
  }
]

export const footerNav = [
  {
    title: "Resources",
    navs: [
      {
        name: "Cooking Tips",
        link: "",
      },
      {
        name: "Recipes",
        link: "",
      },
      {
        name: "Meat Handling Guidelines",
        link: "",
      },
      {
        name: "FAQs",
        link: "",
      },
    ],
  },
  {
    title: "Account",
    navs: [
      {
        name: "Sign In",
        link: "",
      },
      {
        name: "Create Account",
        link: "",
      },
      {
        name: "Order History",
        link: "",
      },
    ],
  },
  {
    title: "Customer Service",
    navs: [
      {
        name: "Contact Us",
        link: "",
      },
      {
        name: "Order Tracking",
        link: "",
      },
      {
        name: "Returns & Refunds",
        link: "",
      },
      {
        name: "Shipping Information",
        link: "",
      },
    ],
  },
  {
    title: "About Us",
    navs: [
      {
        name: "Our Story",
        link: "",
      },
      {
        name: "Quality Commitment",
        link: "",
      },
      {
        name: "Meet Our Experts",
        link: "",
      },
    ],
  },
];

export const  socials = [
  {
    icon: <FacebookIcon color="white" />,
  },
  {
    icon: <InstagramIcon color="white" />,
  },
  {
    icon: <LinkedinIcon color="white" />,
  },
]


// "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-security.jpg?h=1cf26f27&itok=_QQy83Yf",
// "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-staffing.jpg?h=4997dc06&itok=1HZH_9G7",
// "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-consulting.jpg?h=6f3285a6&itok=1oZFISBw",
// "https://best.garda.com/sites/default/files/2023-08/baseball.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Kansas-City-race.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Tradeshows.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Festival.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Concert.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Football.jpg",
// "https://best.garda.com/sites/default/files/2023-08/baseball-usher.jpg",
// "https://best.garda.com/sites/default/files/2023-08/Concerts-festivals.jpg",
// "https://best.garda.com/sites/default/files/styles/rectangular/public/2022-07/AT%26T%20STADIUM%20AND%20THE%20DALLAS%20COWBOYS%20Final.png?h=8bf044c8&itok=wKLHxIck",
// "https://best.garda.com/sites/default/files/styles/rectangular/public/2022-09/Nissan%20Stadium.png?h=1526f226&itok=5speWAgt",
// "https://best.garda.com/sites/default/files/styles/rectangular/public/2024-08/Case-Study-MGM-Resorts-International-Venues.jpg?h=da75af00&itok=YQQZsuVr"