import {ArrowDownTrayIcon, BuildingOffice2Icon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/enio2024.png';
import testimonialImage from '../images/gray-to-white.webp';
/** import porfolioImage4 from '../images/portfolio/ai-chatbot.png'; */
import porfolioImage8 from '../images/portfolio/ethical-extractor.png';
import porfolioImage10 from '../images/portfolio/onfrontiers-home.png';
/** import porfolioImage2 from '../images/portfolio/portfolio-website.png'; */
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
  name: `Building Global Solutions`,
  description: (
    <>
      <p className="mb-4 mt-4 mx-4 text-xl text-black sm:text-2xl lg:text-2xl">
        I lead remote <strong className="text-black">product development</strong> and{' '}
        <strong className="text-black">operations</strong>, building solutions that drive meaninful impact for{' '}
        <strong className="text-black">global clients</strong>.
        <span className="block mb-4 mt-4 text-xl text-black sm:text-2xl lg:text-2xl">
          This page highlights my growth and showcases my evolving <strong>portfolio</strong>.
        </span>
      </p>
    </>
  ),
  actions: [
    {
      href: './assets/jl_Enio-Borges_Operations-Mar-2025.pdf',
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
        I use technology to create solutions to business issues so founders don't have to. That is why I like to define
        myself as a builder.
      </p>
      <p>What I do:</p>
      <ul>
        <li>Connect software (native integrations or custom APIs) to ditch repetitive tasks.</li>
        <li>Maximize efficiency; I've helped teams triple productivity without extra hires.</li>
        <li>Navigate tough business moments: that's when ops and cost efficiency become BFFs.</li>
        <li>Use AI and cloud tech to keep operations running smoothly at scale.</li>
        <li>Guide lean engineering teams to build exactly what matters.</li>
      </ul>
      <p>Where I've done it:</p>
      <ul>
        <li>
          Managed teams and projects remotely across Europe and the US, working comfortably in most European and all
          U.S. timezones.
        </li>
        <li>
          From startups to web apps, I've successfully steered projects through the good, the bad, and the tricky.
        </li>
      </ul>
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
    title: 'AI Complex Demands Analyzer',
    description: `At OnFrontiers, I’ve been part of an exciting journey as we shifted into the billion-dollar government contracting space and became the go-to expert network. My main role was to reshape our operations by automating the service business unit and integrating external platforms.
    
    This project outlines how I used Retool and a bit of JavaScript to integrate AI agents to increase workflow efficiency.`,
    url: 'https://web-project-homeland-mu.vercel.app',
    image: porfolioImage10,
    link: 'https://flax-epoch-9a3.notion.site/Driving-Change-with-Retool-OpenAI-Prototypes-at-OnFrontiers-1ae71944a43b8061a789de977c28ddae',
  },
  {
    title: 'Ethical LinkedIn Profile Extractor',
    description: `This project reflects my drive to delve deeper into engineering. Direct access to LinkedIn’s API is limited to LLCs, forcing users who want to build prototypes of talent sourcing apps to resort to dubious scraping methods.

      My open source ethical profile extractor pulls public profile data and converts it to CSV for less than 20% of a cent, leveraging free starting funds from Bright Data for prototype-scale scraping.`,
    url: 'https://linkedin-private-extractor.vercel.app/',
    image: porfolioImage8,
    link: 'https://www.notion.so/Ethical-LinkedIn-Profile-Extractor-1a271944a43b80698fc7ea62070d24fd',
  },
  /**
  {
    title: 'Responsive personal website',
    description: `New web developers often struggle to showcase their skills in a crowded market, and many portfolio sites miss the mark by not highlighting what recruiters truly care about. 

      With this React template, fresh bootcamp graduates get a simple, customizable solution that breaks away from cookie-cutter designs. It’s built on modern best practices, making it easy to fill in your details and stand out—helping you get noticed by recruiters faster.`,
    url: 'https://enioborges.com',
    image: porfolioImage2,
    link: 'http://onfrontiers.com',
  },
  {
    title: 'AI Chatbot for Web Application',
    description: `I built an AI chatbot that leverages the latest prompt engineering best practices with HubSpot’s Breeze AI. In earlier versions, I connected HubSpot to OpenAI’s GPT-3 mini via a REST API. 
    
    This project not only set the foundation for a responsive and intelligent chat experience but also helped OnFrontiers eliminate client delays during off-hours—like nights and weekends—while reducing operational overhead to a fraction of previous levels.`,
    url: 'https://onfrontiers.com',
    image: porfolioImage4,
    link: 'http://onfrontiers.com',
  },
   */
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
      name: `Yohan Bobcombe
      
      Customer Operations and CX Leader | ex-Lyft, Sonder, Deloitte
      Strategic Advisor, MDisrupt`,
      text: `For any team looking for a highly technical, business-savvy leader who thrives at the intersection of strategy,operations, and technology, Enio is your person. I have no doubt he will make a tremendous impact wherever he goes next.
       
       Enio possesses a deep technical acumen that goes far beyond traditional operations—he understands system architecture at a level that enables him to not just integrate tools, but to design and build scalable, high-impact solutions from the ground up. 
       
       His deep understanding of technical architecture, automation, and integrations made him instrumental in optimizing our operations. Whether it was streamlining workflows, implementing cost-efficient solutions, or bridging the gap between operations and product, he consistently delivered results that improved efficiency and bottom-line impact.
       `,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQH-aKgELzy8pQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707170313673?e=1747267200&v=beta&t=A5GvvriSZ60QQ4oOUhLOwF49FQwgd2R_sY_eWmCoLUU',
    },
    {
      name: `Julie Motlagh

      Professional Services Executive | Customer Success
      Global Head of Customer Success, OnFrontiers`,
      text: `Whether it was building automated workflows, creating insightful dashboards, or optimizing data for decision-making, Enio was always several steps ahead, ensuring everything ran smoothly and strategically. 
      
      Beyond his technical prowess, Enio has a gift for building relationships and fostering collaboration. Enio isn't just exceptional at what he does—he elevates everyone around him. His strategic thinking, operational expertise, and natural ability to lead have left a lasting impact on OnFrontiers and on me personally. 
      
      Anyone who has the opportunity to work with him will quickly understand what a true asset he is to any team or organization.`,
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQEutSEdjnoz8Q/profile-displayphoto-shrink_800_800/B4EZRn_GikGYAc-/0/1736911382968?e=1745452800&v=beta&t=IDk-N4kAjetRQCGLIg4vMXTTwG1tXoWF9nehss52jhY',
    },
    {
      name: `Chiara Cokieng

      LinkedIn Influencer, Operations leader and People manager
      Founder & Coach, Brave New Path`,
      text: `When we hired Enio, we saw his qualities as a great individual contributor as Research Manager — super sharp and smart with the research, confident and charismatic with the clients,all while being idealistic, realistic, and hardworking with the business. 
      
      Even so, I've always known that Enio will be my successor as Director of Research. So when I moved to the Product team and Enio courageously and willingly stepped up to leadership and management, I wasn't surprised. 
        
      I would definitely love to work with Enio again in future entrepreneurial adventures. I'm already excited!`,
      image:
        'https://media.licdn.com/dms/image/v2/C5103AQH6SKzkzdqW3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570812235629?e=1743638400&v=beta&t=8EmH1pspyCoUxgwRGvLE-xIw-5SQ6V7zT27XdZYQn8k',
    },
    {
      name: `Sabyasachi Gupta
      
      Customer Experience & Success | Account Management Expert
      Client Success Manager, Bazaarvoice`,
      text: `Enio has been a pleasure to work with for the 4 years I spent at OnFrontiers! When I joined Enio was just my colleague, however, over a course of time he went on to become my mentor, guide, friend, and a great leader who I looked up to. 
      
      I was directly reporting to him for three years out of the four years I spent at OnFrontiers. Enio is a seasoned SaaS operations professional who knows how to manage, run and grow a team. His attention to detail, customer awareness, and ability to soak pressure while extracting the best out of his team are what make him a great leader. 
      
      Amongst other things, he gives freedom to his team members to experiment, make mistakes, and learn from them without ever micro-managing them. This is one of the primary reasons why I enjoyed working with him. Enio would be a great addition to any team that is looking for its next leader!`,
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
  description: "I'll reply.",
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
