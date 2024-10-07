//import Image from "next/image";
import ExperienceCard from "./components/ExperienceCard";
import { IExperienceCard } from "./components/ExperienceCard/types";
import SocialContact from "./components/SocialContact";
import { IProjectCard } from "./components/ProjectCard/types";
import ProjectCard from "./components/ProjectCard";

import FrameImage from "./components/common/FrameImage";
import { IFrameImage } from "./components/common/FrameImage/types";

const profileImage: IFrameImage = {
  src: '/img/ines_profile_photo.jpg',
  alt: 'profile image',
  height: 200,
  width: 200
}
const experienceCards: IExperienceCard[] = [
  {
    title: `Developer · Confidential Dominican Bank`,
    desc: 'Perform improvements and maintenance in the software used by the bank, analyzing user requirements to design and program quality technological solutions, integrating APIs and external services. Participate in assigned projects, either in programming tasks or managing requirements with suppliers, ensuring timely delivery and quality of products, following the bank standards. design the architecture and user interfaces in the systems, documenting developments, unit tests and user guides. Implement improvements in test environments to ensure integration and error detection before going into production.',
    dateRange: 'May 2024 - Present',
    link: '#',
    tags: [
      {
        title: 'ReactJS'
      },
      {
        title: 'NextJS'
      },
      {
        title: 'NestJS'
      },
      {
        title: 'PHP'
      },
      {
        title: 'TailwindCSS'
      },
      {
        title: 'NodeJS'
      },
      {
        title: 'JavaScript'
      },
      {
        title: 'TypeScript'
      },
      {
        title: 'Microsoft SQL Server'
      },
      {
        title: 'APIs'
      },
      {
        title: 'Services Integration'
      },
    ]
  },
  {
    title: `e-Commerce and fullstack Developer · Remote for exportation`,
    desc: 'Planned the implementation and deployment of virtual stores on the Shopify on the Shopify platform. Created responsive web designs and customizable storefront templates, as well as customizable store templates, as well as improving store performance. Worked with the external services to the stores for review section review sections, product customizations and pages with dynamic sections. Wrote guidelines for the use of the changes applied to the templates and additional services templates and additional services added',
    dateRange: 'Dec 2023 - May 2024',
    link: '#',
    tags: [
      {
        title: 'Liquid'
      },
      {
        title: 'Ruby'
      },
      {
        title: 'GraphQL'
      },
      {
        title: 'ReactJS'
      },
      {
        title: 'NextJS'
      },
      {
        title: 'NestJS'
      },
    ]
  },
  {
    title: 'e-Commerce Developer · Your Store Wizards',
    desc: '(Outsourcing service with Minnek Digital Studio) Create, develop and customize e-commerce stores on platforms such as Shopify, BigCommerce and WordPress, applying web development best practices, including responsive design and using key technologies. Design and coded reusable and customizable user interfaces, managing their maintenance, updates and scalability. Improve Code Web Vitals and SEO performance of stores and provided technical assistance to store owners in their queries about developing on these platforms.',
    dateRange: 'Sep 2021 - Dec 2023',
    link: 'https://yourstorewizards.com/',
    tags: [
      {
        title: 'Liquid'
      },
      {
        title: 'HandleBards'
      },
      {
        title: 'Ruby'
      },
      {
        title: 'GraphQL'
      },
    ]
  },
  {
    title: `Frontend Developer · Minnek Digital Studio`,
    desc: 'Provide web development services for clients following agile methodology guidelines, web programming best practices and responsive design. Use of Trello and Jira as management systems. Coding layouts following design patterns and approaches given by end users. Code review and debugging. Worked on the creation of websites with NextJS.',
    dateRange: 'Jun 2021 - Dec 2023',
    link: 'https://www.minnekdigital.com/en',
    tags: [
      {
        title: 'HTML'
      },
      {
        title: 'CSS/SASS'
      },
      {
        title: 'JavaScript'
      },
      {
        title: 'TypeScript'
      },
      {
        title: 'NextJS'
      },

    ]
  }
]

const projectCards: IProjectCard[] = [
  {
    title: 'first project',
    desc: 'this is the desc of the first project',
    link: '#',
    image: {
      src: '/img/logo_dog_220x.avif',
      alt: 'first project image'
    }
  },
  {
    title: 'second project',
    desc: 'this is the desc of the second project',
    link: '#',
    image: {
      src: '/img/logo_dog_220x.avif',
      alt: 'second project image'
    }
  },
]
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex flex-col gap-8 row-start-2">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
            <header>
              <h1 className="font-extrabold text-3xl mb-3 mt-6">Inés María Montero Concepción</h1>
              <h2 className="font-semibold text-xl">
                <span>Computer Systems Engineer</span>
                <br />
                <span>Full Stack Web Developer</span>
                <br />
                <small>
                  Welcome to my little space in the World Wide Web 👩‍💻👋
                </small>
              </h2>
            </header>
            <div className="flex flex-col items-center m-auto p-4 max-w-xl text-center">
              <FrameImage {...profileImage} className="mb-4 rounded-full shadow-lg" />
              <p className="">
                Just a <span className="relative inline-block"><span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2" />book lover</span> (computer geek) who transforms ideas into amazing web experiences with a mix of discipline, a pinch of creativity... <br /> and maybe a couple of cups of coffee.
              </p>
            </div>

            <div className="mt-auto">
              <span className="italic">Lost among books at home <span className="border-b-2 border-red-600">(also in break times)</span>, coding solutions at work!</span>
              <SocialContact />
            </div>
          </div>
          <main className="py-20 lg:w-1/2">
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard {...item} />
              </div>
            ))}
          </main>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="flex flex-col items-center">
            <span className="text-3xl font-bold ">Projects I have worked on</span> 
            <span className="text-2xl">(worked during break times for a couple of those)</span>
          </h2>
          <div className="mt-[70px]">
            {projectCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
