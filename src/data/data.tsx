import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/enio2024.png';
import testimonialImage from '../images/gray-to-white.webp';
import porfolioImage4 from '../images/portfolio/ai-chatbot.png';
import porfolioImage8 from '../images/portfolio/ethical-scraper.png';
import porfolioImage10 from '../images/portfolio/onfrontiers-home.png';
import porfolioImage2 from '../images/portfolio/portfolio-website.png';
import heroImage from '../images/white-20-to-strong-gray.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
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
  name: `Building digital communities`,
  description: (
    <>
      <p className="mb-4 mt-4 text-3xl text-black sm:text-4xl lg:text-3xl">
       This page is about how I have applied my skills to help  
       <strong className=" block text-black"> teams build companies</strong>
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
  description: (
    <>
      <p>
        I’m a builder at heart. I use technology and logic to solve business problems that matter.
      </p>
      <p>
        My current focus is helping teams find efficient ways to connect software, natively or via custom APIs, to cut out repetitive tasks. Along the way, I’ve sharpened my skills with AI models, including LLM agents, modern web frameworks, and cloud infrastructures that make solutions scale.
      </p>
      <p>
        Though my roles have changed—from remote operations manager to web developer—my core drive remains the same: leave every system stronger than I found it.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Belo Horizonte, Brazil', Icon: MapIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Science, sports and nature', Icon: SparklesIcon},
    {label: 'Employment', text: 'OnFrontiers Inc.  (USA/Remote)', Icon: BuildingOffice2Icon},
  ],
};


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Driving Change at OnFrontiers',
    description: `For the past four years at OnFrontiers, I’ve been part of an exciting journey as we shifted into the billion-dollar government contracting space and quickly became the go-to expert network. 
    
    My main role was to reshape our operations in three key areas: automating the service business unit, integrating with low-code platforms like Retool, Syncari, Zapier, and HubSpot, and managing both internal and external databases.`,
    url: 'https://web-project-homeland-mu.vercel.app',
    image: porfolioImage10,
  },
  {
    title: 'Ethical LinkedIn Profile Extractor',
    description: `This project reflects my drive to delve deeper into engineering. Direct access to LinkedIn’s API is limited to LLCs, forcing users who want to build prototypes of talent sourcing apps to resort to dubious scraping methods.

      My open source ethical profile extractor pulls public profile data and converts it to CSV for less than 20% of a cent, leveraging free starting funds from Bright Data for prototype-scale scraping.`,
    url: 'https://linkedin-private-extractor.vercel.app/',
    image: porfolioImage8,
  },
  {
    title: 'Responsive personal website',
    description: `New web developers often struggle to showcase their skills in a crowded market, and many portfolio sites miss the mark by not highlighting what recruiters truly care about. 

      With this React template, fresh bootcamp graduates get a simple, customizable solution that breaks away from cookie-cutter designs. It’s built on modern best practices, making it easy to fill in your details and stand out—helping you get noticed by recruiters faster.`,
    url: 'https://enioborges.com',
    image: porfolioImage2,
  },
  {
    title: 'AI Chatbot for Web Application',
    description: `I built an AI chatbot that leverages the latest prompt engineering best practices with HubSpot’s Breeze AI. In earlier versions, I connected HubSpot to OpenAI’s GPT-3 mini via a REST API. 
    
    This project not only set the foundation for a responsive and intelligent chat experience but also helped OnFrontiers eliminate client delays during off-hours—like nights and weekends—while reducing operational overhead to a fraction of previous levels.`,
    url: 'https://onfrontiers.com',
    image: porfolioImage4,
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/enioborges/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/borgesenioc/'},
];
