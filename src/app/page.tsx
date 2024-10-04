import Image from "next/image";
import ExperienceCard from "./components/ExperienceCard";
import { IExperienceCard } from "./components/ExperienceCard/types";
import SocialContact from "./components/SocialContact";
import { IProjectCard } from "./components/ProjectCard/types";
import ProjectCard from "./components/ProjectCard";

const experienceCards: IExperienceCard[] = [
  {
    title: 'numero 1',
    desc: 'xxxxxxx',
    dateRange: 'Jun 2021 - Present',
    link: '#',
    tags: [ 
      {
        title: 'html'
      },
      {
        title: 'css'
      }
    ]
  },
  {
    title: 'numero 2',
    desc: 'xxxxxxx 2',
    dateRange: 'Jun 2022 - Present',
    link: '#',
    tags: [ 
      {
        title: 'html2'
      },
      {
        title: 'css2'
      }
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
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
            {projectCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ProjectCard
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  link={item.link}
                />
              </div>
            ))}
            <SocialContact/>
          </div>
          <div className="py-20">
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard
                  title={item.title}
                  desc={item.desc}
                  dateRange={item.dateRange}
                  tags={item.tags}
                  link={item.link}
                />
              </div>
            ))}
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard
                  title={item.title}
                  desc={item.desc}
                  dateRange={item.dateRange}
                  tags={item.tags}
                  link={item.link}
                />
              </div>
            ))}
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard
                  title={item.title}
                  desc={item.desc}
                  dateRange={item.dateRange}
                  tags={item.tags}
                  link={item.link}
                />
              </div>
            ))}
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard
                  title={item.title}
                  desc={item.desc}
                  dateRange={item.dateRange}
                  tags={item.tags}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
