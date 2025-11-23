"use client";

import "../app/globals.css";

import ExperienceCard from "./components/ExperienceCard";
import { IExperienceCard } from "./components/ExperienceCard/types";
import SocialContact from "./components/SocialContact";
import { IProjectCard } from "./components/ProjectCard/types";
import ProjectCard from "./components/ProjectCard";

import FrameImage from "./components/common/FrameImage";
import { IFrameImage } from "./components/common/FrameImage/types";

import { Trans, useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

const profileImage: IFrameImage = {
  src: 'https://ines-sys.github.io/portafolio/img/ines_profile_photo.jpg',
  alt: 'profile image',
  height: 200,
  width: 200
}

// Tags que se comparten entre experiencias
const sharedTags = {
  reactjs: { title: 'ReactJS' },
  nextjs: { title: 'NextJS' },
  nestjs: { title: 'NestJS' },
  php: { title: 'PHP' },
  tailwind: { title: 'TailwindCSS' },
  nodejs: { title: 'NodeJS' },
  javascript: { title: 'JavaScript' },
  typescript: { title: 'TypeScript' },
  mssql: { title: 'Microsoft SQL Server' },
  apis: { title: 'APIs' },
  services: { title: 'Services Integration' },
  liquid: { title: 'Liquid' },
  ruby: { title: 'Ruby' },
  graphql: { title: 'GraphQL' },
  handlebars: { title: 'HandleBards' },
  html: { title: 'HTML' },
  css: { title: 'CSS/SASS' }
};

export default function Home() {
  const { t } = useTranslation();

  // Configuración de experiencias con traducciones
  const experienceCards: IExperienceCard[] = [
    {
      title: t('experiences.bank_developer.title'),
      desc: t('experiences.bank_developer.desc'),
      dateRange: t('experiences.bank_developer.dateRange'),
      link: '#',
      tags: [
        sharedTags.reactjs,
        sharedTags.nextjs,
        sharedTags.nestjs,
        sharedTags.php,
        sharedTags.tailwind,
        sharedTags.nodejs,
        sharedTags.javascript,
        sharedTags.typescript,
        sharedTags.mssql,
        sharedTags.apis,
        sharedTags.services,
      ]
    },
    {
      title: t('experiences.ecommerce_remote.title'),
      desc: t('experiences.ecommerce_remote.desc'),
      dateRange: t('experiences.ecommerce_remote.dateRange'),
      link: '#',
      tags: [
        sharedTags.liquid,
        sharedTags.ruby,
        sharedTags.graphql,
        sharedTags.reactjs,
        sharedTags.nextjs,
        sharedTags.nestjs,
      ]
    },
    {
      title: t('experiences.your_store_wizards.title'),
      desc: t('experiences.your_store_wizards.desc'),
      dateRange: t('experiences.your_store_wizards.dateRange'),
      link: 'https://yourstorewizards.com/',
      tags: [
        sharedTags.liquid,
        sharedTags.handlebars,
        sharedTags.ruby,
        sharedTags.graphql,
      ]
    },
    {
      title: t('experiences.minnek.title'),
      desc: t('experiences.minnek.desc'),
      dateRange: t('experiences.minnek.dateRange'),
      link: 'https://www.minnekdigital.com/en',
      tags: [
        sharedTags.html,
        sharedTags.css,
        sharedTags.javascript,
        sharedTags.typescript,
        sharedTags.nextjs,
      ]
    }
  ];

  // Configuración de proyectos con traducciones
  const projectCards: IProjectCard[] = [
    {
      title: t('projects.ds_marketing.title'),
      desc: t('projects.ds_marketing.desc'),
      link: 'https://dsmarketing.com/',
      image: {
        src: '/img/ds_marketing.avif',
        alt: 'DS Marketing'
      }
    },
    {
      title: t('projects.bisket_baskets.title'),
      desc: t('projects.bisket_baskets.desc'),
      link: 'https://www.bisketbaskets.com/',
      image: {
        src: '/img/bisketbaskets.png',
        alt: 'Bisket Baskets'
      }
    },
    {
      title: t('projects.big_dot.title'),
      desc: t('projects.big_dot.desc'),
      link: 'https://www.bigdotofhappiness.com/',
      image: {
        src: '/img/bdh.png',
        alt: 'Big Dot of Happiness'
      }
    },
    {
      title: t('projects.autogeek.title'),
      desc: t('projects.autogeek.desc'),
      link: 'https://www.autogeek.net/',
      image: {
        src: '/img/autogeek.webp',
        alt: 'Autogeek'
      }
    },
    {
      title: t('projects.cuenta_ahorro.title'),
      desc: t('projects.cuenta_ahorro.desc'),
      link: '#',
      image: {
        src: '/img/caa.png',
        alt: 'Cuenta de Ahorro Ágil'
      }
    },
    {
      title: t('projects.pagachat.title'),
      desc: t('projects.pagachat.desc'),
      link: '#',
      image: {
        src: '/img/pagachat.png',
        alt: 'PagaChat'
      }
    },
    {
      title: t('projects.portal_apps.title'),
      desc: t('projects.portal_apps.desc'),
      link: '#',
      image: {
        src: '/img/portal.webp',
        alt: 'Portal de aplicaciones'
      }
    },
    {
      title: t('projects.venta_marbetes.title'),
      desc: t('projects.venta_marbetes.desc'),
      link: '#',
      image: {
        src: '/img/marbete.png',
        alt: 'Venta de Marbetes'
      }
    },
    {
      title: t('projects.sport_unlimited.title'),
      desc: t('projects.sport_unlimited.desc'),
      link: 'https://www.sportsunlimitedinc.com/',
      image: {
        src: '/img/sportunlimited.webp',
        alt: 'Sport Unlimited Inc'
      }
    },
    {
      title: t('projects.dog_outdoors.title'),
      desc: t('projects.dog_outdoors.desc'),
      link: 'https://www.thedogoutdoors.com/',
      image: {
        src: '/img/thedogoutdoors.avif',
        alt: 'The Dog Outdoors'
      }
    },
    {
      title: t('projects.us_appliance.title'),
      desc: t('projects.us_appliance.desc'),
      link: 'https://www.us-appliance.com/',
      image: {
        src: '/img/us-appliance.webp',
        alt: 'US Appliance'
      }
    },
    {
      title: t('projects.ramblers_way.title'),
      desc: t('projects.ramblers_way.desc'),
      link: 'https://www.ramblersway.com/',
      image: {
        src: '/img/ramblersway.avif',
        alt: 'Ramblers Way'
      }
    },
    {
      title: t('projects.motorbook.title'),
      desc: t('projects.motorbook.desc'),
      link: 'https://www.themotorbookstore.com/',
      image: {
        src: '/img/themotorbookstore.webp',
        alt: 'The MotorBook Store'
      }
    },
    {
      title: t('projects.media_supply.title'),
      desc: t('projects.media_supply.desc'),
      link: 'https://mediasupply.com/',
      image: {
        src: '/img/mediasupply.avif',
        alt: 'Media Supply'
      }
    },
    {
      title: t('projects.paper_ink.title'),
      desc: t('projects.paper_ink.desc'),
      link: 'https://www.paperinkarts.com/',
      image: {
        src: '/img/pia.webp',
        alt: 'Paper & Ink Arts'
      }
    },
    {
      title: t('projects.tall_man.title'),
      desc: t('projects.tall_man.desc'),
      link: 'https://www.tallmenshoes.com/',
      image: {
        src: '/img/tallmenshoes.avif',
        alt: 'Tall Man Shoes'
      }
    },
    {
      title: t('projects.ghurka.title'),
      desc: t('projects.ghurka.desc'),
      link: 'https://ghurka.com/',
      image: {
        src: '/img/ghurka.webp',
        alt: 'Ghurka'
      }
    },
  ];

  return (
    <div className="font-[family-name:var(--font-geist-mono)] mx-auto min-h-screen max-w-screen-xl px-6 py-2 md:px-12 md:py-10 lg:px-10 lg:py-0">
      <div className="flex flex-col gap-8 row-start-2">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-5">
            <header>
              <h1 className="font-extrabold text-2xl mb-2 mt-6">{t("profile_name")}</h1>

              <h2 className="font-semibold">
                <span className="text-base">{t("profile_role_1")}</span>
                <br />
                <span className="text-base">{t("profile_role_2")}</span>
                <br />
                <span className="text-base">{t("profile_role_3")}</span>
                <br />
                <br />
                <small className="text-sm">{t("profile_welcome")}</small>
              </h2>

              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </header>
            <div className="flex flex-col items-center m-auto p-4 max-w-xl text-center">
              <FrameImage {...profileImage} className="mb-4 rounded-full shadow-lg" />
              <p className="text-base">
                <Trans
                  i18nKey="profile_description"
                  values={{ book: t("book_lover") }}
                  components={{
                    highlight: (
                      <span className="relative inline-block text-red-600 font-bold underline decoration-wavy decoration-2 underline-offset-4">
                      </span>
                    )
                  }}
                />
              </p>
            </div>

            <SocialContact />
          </div>
          <main className="py-5 lg:w-1/2">
            {experienceCards.map((item, index) => (
              <div key={index} className='mb-4'>
                <ExperienceCard {...item} />
              </div>
            ))}
          </main>
        </div>
        <div className="flex flex-col items-center mb-[20px] lg:mb-[50px]">
          <h2 className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-bold">{t("projects_title")}</span>
            <span className="text-xl lg:text-2xl text-center">{t("projects_subtitle")}</span>
          </h2>
          <div className="mt-[50px] grid lg:grid-cols-2 gap-6">
            {projectCards.map((item, index) => (
              <div key={index} className='mb-4 flex items-center'>
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
          <br />
          <span className="italic text-sm">{t("footer_quote")}</span>
        </div>
      </div>
    </div>
  );
}