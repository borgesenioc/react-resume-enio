import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import profilepic from '../images/enio2024.png';
import testimonialImage from '../images/gray-to-white.webp';
import porfolioImage4 from '../images/portfolio/ai-chatbot-wide.png';
import porfolioImage8 from '../images/portfolio/linkedin-extractor-wide.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-website-template.png';
import heroImage from '../images/white-20-to-strong-gray.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Enio Borges',
  description: 'A portfolio website to showcase my goals, my character and my skills.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm  Enio.`,
  description: (
    <>
      <p className="mb-4 mt-4 text-2xl text-black sm:text-3xl lg:text-3xl">
       This page is about how I have helped teams build companies,<br />my <strong className="text-black">character</strong>, skills and goals.
      </p>

    </>
  ),
  actions: [
    {
      href: '/assets/resume-enio-2025.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced global remote operations manager, leading distributed teams across NA, LATAM, EMEA, and APAC.
   I am transitioning into software engineering, with practical experience in JavaScript, TypeScript, Node, Express, Python, SQL, and GraphQL.`,
  aboutItems: [
    {label: 'Location', text: 'Belo Horizonte, Brazil', Icon: MapIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Science, sports and nature', Icon: SparklesIcon},
    {label: 'Study', text: 'St Thomas University / Codecademy', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'OnFrontiers Inc.  (USA/Remote)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'Rust',
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'GraphQL',
      },
    ],
  },
  {
    name: 'Product Development',
    skills: [
      {
        name: 'Web Applications',
      },
      {
        name: 'Agile',
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Portuguese',
      },
      {
        name: 'English',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ethical LinkedIn Profile Extractor',
    description: `This project reflects my drive to delve deeper into engineering. Direct access to LinkedIn’s API is limited to LLCs, forcing users who want to build prototypes of talent sourcing apps to resort to dubious scraping methods.

      My open source ethical profile extractor pulls public profile data and converts it to CSV for less than 20% of a cent, leveraging free starting funds from Bright Data for prototype-scale scraping.`,
    url: 'https://linkedin-private-extractor.vercel.app/',
    image: porfolioImage8,
  },
  {
    title: 'Responsive personal website',
    description: 'React.js, Yarn and Tailwind CSS',
    url: 'https://enioborges.com',
    image: porfolioImage2,
  },
  {
    title: 'AI Chatbot for Web Application',
    description: `The final version was optimized using HubSpot's Breeze AI.
    Preliminary versions used a REST API to integrate HubSpot with OpenAI.`,
    url: 'https://onfrontiers.com',
    image: porfolioImage4,
  },
  {
    title: 'Mobile First Website',
    description: 'As part of the Tripleten Web Development career path',
    url: 'https://web-project-homeland-mu.vercel.app',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'In Progress',
    location: 'TripleTen / Remote',
    title: 'Web Development Bootcamp',
    content: (
      <p>
        I'm learning the essential skills to build responsive, dynamic websites and applications using modern
        technologies like HTML, CSS, JavaScript, and frameworks
      </p>
    ),
  },
  {
    date: 'November 2024',
    location: 'Codecademy / Remote',
    title: 'Backend Engineering',
    content: (
      <p>
        I learned to design, build, and deploy robust server-side applications using tools like Node.js, Express.js,
        databases (SQL/NoSQL), APIs, and best practices in security, testing, and deployment
      </p>
    ),
  },
  {
    date: 'December 2012',
    location: 'St Thomas University / Miami',
    title: 'BA Business Management',
    content: (
      <p>
        I learned the essential about business and entrepreneurship. I also started a business club about stock trading
        and was a student-athlete with the soccer team.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Julie Motlagh',
      text: `Whether it was building automated workflows, creating insightful dashboards, 
      or optimizing data for decision-making, Enio was always several steps ahead, ensuring 
      everything ran smoothly and strategically. Beyond his technical prowess, Enio has a gift 
      for building relationships and fostering collaboration. Enio isn't just exceptional at 
      what he does—he elevates everyone around him. His strategic thinking, operational expertise, 
      and natural ability to lead have left a lasting impact on OnFrontiers and on me personally. 
      Anyone who has the opportunity to work with him will quickly understand what a true asset he 
      is to any team or organization.`,
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQEutSEdjnoz8Q/profile-displayphoto-shrink_800_800/B4EZRn_GikGYAc-/0/1736911382968?e=1745452800&v=beta&t=IDk-N4kAjetRQCGLIg4vMXTTwG1tXoWF9nehss52jhY',
    },
    {
      name: 'Chiara Cokieng',
      text: `When we hired Enio, we saw his qualities as a great individual contributor as Research 
      Manager — super sharp and smart with the research, confident and charismatic with the clients,
       all while being idealistic, realistic, and hardworking with the business. Even so, I've always
        known that Enio will be my successor as Director of Research. So when I moved to the Product 
        team and Enio courageously and willingly stepped up to leadership and management, I wasn't 
        surprised. I would definitely love to work with Enio again in future entrepreneurial adventures. 
        I'm already excited!`,
      image:
        'https://media.licdn.com/dms/image/v2/C5103AQH6SKzkzdqW3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570812235629?e=1743638400&v=beta&t=8EmH1pspyCoUxgwRGvLE-xIw-5SQ6V7zT27XdZYQn8k',
    },
    {
      name: 'Sabyasachi Gupta',
      text: `Enio has been a pleasure to work with for the 4 years I spent at OnFrontiers! When I joined 
      Enio was just my colleague, however, over a course of time he went on to become my mentor, guide, 
      friend, and a great leader who I looked up to. I was directly reporting to him for three years out
       of the four years I spent at OnFrontiers. Enio is a seasoned SaaS operations professional who knows 
       how to manage, run and grow a team. His attention to detail, customer awareness, and ability to 
       soak pressure while extracting the best out of his team are what make him a great leader. Amongst 
       other things, he gives freedom to his team members to experiment, make mistakes, and learn from 
       them without ever micro-managing them. This is one of the primary reasons why I enjoyed working 
       with him. Enio would be a great addition to any team that is looking for its next leader!`,
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFNWiYEycE7Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685962416510?e=1743638400&v=beta&t=nLG3ecy-TEy1boKde_wZlISzV0baT6AxL-XOrQs7r3s',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'll reply as soon as a I can.",
  items: [
    {
      type: ContactType.Email,
      text: 'enio@enioborges.com',
      href: 'mailto:enio@enioborges.com',
    },
    {
      type: ContactType.Location,
      text: 'Belo Horizonte, Brazil',
      href: 'https://www.google.com/maps/place/Belo+Horizonte,+State+of+Minas+Gerais/',
    },
    {
      type: ContactType.Instagram,
      text: '@borgesenioc',
      href: 'https://www.instagram.com/borgesenioc/',
    },
    {
      type: ContactType.Github,
      text: 'borgesenioc',
      href: 'https://github.com/borgesenioc',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/borgesenioc'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/29415860/enio'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/enioborges/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/borgesenioc/'},
];
