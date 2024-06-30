import AngularIcon from "../components/icons/AngularIcon.astro";
import GraphQLIcon from "../components/icons/GraphQLIcon.astro";

export const TECHNOLOGIES = {
  ANGULAR: {
    icon: AngularIcon,
  },
  GRAPHQL: {
    icon: GraphQLIcon,
  },
};

export const TIMELINE_ITEMS = [
  {
    startDate: "2022",
    endDate: "2023",
    company: "Kavak",
    jobTitle: "Tech Lead",
    description:
      "I played a key role in securing my team’s success and efficiency.",
    bullets: [
      "Led one-on-one sessions with my team to foster learning and growth",
      "Made stirring decisions regarding tech architecture",
      "Collaborated with Chapter Leads to nurture the developers",
      "Eased communication with other Tech Leads and Product Owners",
    ],
  },
  {
    startDate: "2020",
    endDate: "2022",
    company: "Kavak",
    jobTitle: "Frontend Chapter Lead",
    description:
      "Aided my team to improve soft and hard skills. Promoted best practices and guidelines from both technical and UX standpoints.",
    bullets: [
      "Conducted code reviews and promoted development best practices",
      "Introduced and advocated WCAG Accessibility Guidelines",
      "Set internationalization workflow to appeal to more than 10 regions",
      "Organized weekly knowledge transfer sessions and chapter newsletter",
      `Improved and scaled our Chapter’s onboarding funnel`,
    ],
  },
  {
    startDate: "2019",
    endDate: "2020",
    company: "Kavak",
    jobTitle: "Senior Frontend Developer",
    description:
      "Developed engaging digital experiences with Angular, React, Material and Bootstrap.",
    bullets: [
      `Developed several customer and inhouse applications`,
      `Conducted various POCs to set up the organization tech stack`,
      `Proposed Storybook to document Angular components`,
      `Condcted pair programming sessions to aid junior devs`,
      `Led projects from a technical standpoint and contributed to establish feature requirements`,
    ],
  },
  {
    startDate: "2015",
    endDate: "2019",
    company: "Macmillan Publishers",
    jobTitle: "Web Producer",
    description:
      "The vast array of digital products developed by the editorial required me to be engaged from planning to deployment.",
    bullets: [
      "Designed and developed lead generation sites and landing pages",
      `Developed interactive learning experience with AmngularJS`,
      `Managed and trained interns`,
      `Optimized and automated product workflows`,
      `Established project architecture using HTML5, CSS3 and JS`,
    ],
  },
  {
    startDate: "2012",
    endDate: "2019",
    company: "WIDEStudio",
    jobTitle: "Web Director & Founder",
    description:
      "I established WIDES along colleagues to nurture our careers through our strengths. As time went on Web Design & Development became our main focus.",
    bullets: [],
  },
  {
    startDate: "2011",
    endDate: "2012",
    company: "Ixi Studio",
    jobTitle: "Frontend Developer Jr",
    description:
      "My role was to design and develop about 60 websites for small business and newsletters for greater clients. ",
    bullets: [],
  },
];

export const PROJECT_ITEMS = [
  {
    title: `Kavak`,
    description: `Kavak main webpage`,
    github: null,
    imgUrl: ``,
    stack: [TECHNOLOGIES.ANGULAR, TECHNOLOGIES.GRAPHQL],
    url: `https://kavak.com`,
  },
];

//`GraphQL`, `Nrwl`, `Stencil.js`, `Storybook`, `Sass`
