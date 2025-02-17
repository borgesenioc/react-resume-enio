import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import profilepic from '../images/enio2024.png';
import heroImage from '../images/istcok_watch_white.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  description: 'A personal website built by a web developer in the making.',
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
      <p className="prose-sm text-black sm:prose-base lg:prose-lg">
        I'm a SaaS operations specialist transitioning
        into <strong className="text-black">software engineering</strong>.
      </p>
      <p className="prose-sm text-gray-950 sm:prose-base lg:prose-lg">
        In my free time, you can catch me practicing{' '}
        <strong className="text-black">Python, Postgres and Graphql</strong>,
        jogging, or exploring trails around{' '}
        <strong className="text-black">Belo Horizonte</strong>.
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
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Science, sports and nature', Icon: SparklesIcon},
    {label: 'Study', text: 'St Thomas University / Codecademy', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'OnFrontiers', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Portuguese',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'PostgreSQL',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Responsive personal website',
    description: 'React.js, Yarn and Tailwind CSS',
    url: 'https://enioborges.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Mobile First Website',
    description: 'As part of the Tripleten Web Development career path',
    url: 'https://web-project-homeland-mu.vercel.app',
    image: porfolioImage10,
  }
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
      text: 'Whether it was building automated workflows, creating insightful dashboards, or optimizing data for decision-making, Enio was always several steps ahead, ensuring everything ran smoothly and strategically. Beyond his technical prowess, Enio has a gift for building relationships and fostering collaboration. Enio isn\'t just exceptional at what he does—he elevates everyone around him. His strategic thinking, operational expertise, and natural ability to lead have left a lasting impact on OnFrontiers and on me personally. Anyone who has the opportunity to work with him will quickly understand what a true asset he is to any team or organization.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEutSEdjnoz8Q/profile-displayphoto-shrink_800_800/B4EZRn_GikGYAc-/0/1736911382968?e=1745452800&v=beta&t=IDk-N4kAjetRQCGLIg4vMXTTwG1tXoWF9nehss52jhY',
    },
    {
      name: 'Chiara Cokieng',
      text: 'When we hired Enio, we saw his qualities as a great individual contributor as Research Manager — super sharp and smart with the research, confident and charismatic with the clients, all while being idealistic, realistic, and hardworking with the business. Even so, I\'ve always known that Enio will be my successor as Director of Research. So when I moved to the Product team and Enio courageously and willingly stepped up to leadership and management, I wasn\'t surprised. I would definitely love to work with Enio again in future entrepreneurial adventures. I\'m already excited!',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQH6SKzkzdqW3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570812235629?e=1743638400&v=beta&t=8EmH1pspyCoUxgwRGvLE-xIw-5SQ6V7zT27XdZYQn8k',
    },
    {
      name: 'Sabyasachi Gupta',
      text: 'Enio has been a pleasure to work with for the 4 years I spent at OnFrontiers! When I joined Enio was just my colleague, however, over a course of time he went on to become my mentor, guide, friend, and a great leader who I looked up to. I was directly reporting to him for three years out of the four years I spent at OnFrontiers. Enio is a seasoned SaaS operations professional who knows how to manage, run and grow a team. His attention to detail, customer awareness, and ability to soak pressure while extracting the best out of his team are what make him a great leader. Amongst other things, he gives freedom to his team members to experiment, make mistakes, and learn from them without ever micro-managing them. This is one of the primary reasons why I enjoyed working with him. Enio would be a great addition to any team that is looking for its next leader!',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFNWiYEycE7Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685962416510?e=1743638400&v=beta&t=nLG3ecy-TEy1boKde_wZlISzV0baT6AxL-XOrQs7r3s',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I\'ll reply as soon as a I can.',
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
