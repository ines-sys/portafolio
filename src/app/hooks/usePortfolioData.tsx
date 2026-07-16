'use client';

import { useTranslation } from 'react-i18next';
import type { IExperienceCard } from '../components/ExperienceCard/types';
import type { IProjectCard } from '../components/ProjectCard/types';
import {
  IconBank,
  IconCloud,
  IconLayers,
  IconMonitor,
  IconServer,
  IconShop,
} from '../components/Icons';

export const sharedTags = {
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
  handlebars: { title: 'Handlebars' },
  html: { title: 'HTML' },
  css: { title: 'CSS/SASS' },
};

export const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'NestJS',
  'TypeScript',
  'Shopify',
  'Azure',
  'PostgreSQL',
  'Tailwind',
  'Scrum',
  'APIs',
];

export type ProjectFilter = 'all' | 'banking' | 'ecommerce';
export type ProjectItem = IProjectCard & { category: 'banking' | 'ecommerce' };

export function usePortfolioData() {
  const { t } = useTranslation();

  const experienceCards: IExperienceCard[] = [
    {
      title: t('experiences.bank_developer.title'),
      desc: t('experiences.bank_developer.desc'),
      dateRange: t('experiences.bank_developer.dateRange'),
      link: '#',
      icon: <IconBank className="h-5 w-5" />,
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
      ],
    },
    {
      title: t('experiences.ecommerce_remote.title'),
      desc: t('experiences.ecommerce_remote.desc'),
      dateRange: t('experiences.ecommerce_remote.dateRange'),
      link: '#',
      icon: <IconLayers className="h-5 w-5" />,
      tags: [
        sharedTags.liquid,
        sharedTags.ruby,
        sharedTags.graphql,
        sharedTags.reactjs,
        sharedTags.nextjs,
        sharedTags.nestjs,
      ],
    },
    {
      title: t('experiences.your_store_wizards.title'),
      desc: t('experiences.your_store_wizards.desc'),
      dateRange: t('experiences.your_store_wizards.dateRange'),
      link: 'https://yourstorewizards.com/',
      icon: <IconShop className="h-5 w-5" />,
      tags: [
        sharedTags.liquid,
        sharedTags.handlebars,
        sharedTags.ruby,
        sharedTags.graphql,
      ],
    },
    {
      title: t('experiences.minnek.title'),
      desc: t('experiences.minnek.desc'),
      dateRange: t('experiences.minnek.dateRange'),
      link: 'https://www.minnekdigital.com/en',
      icon: <IconMonitor className="h-5 w-5" />,
      tags: [
        sharedTags.html,
        sharedTags.css,
        sharedTags.javascript,
        sharedTags.typescript,
        sharedTags.nextjs,
      ],
    },
  ];

  const projectCards: ProjectItem[] = [
    {
      title: t('projects.ds_marketing.title'),
      desc: t('projects.ds_marketing.desc'),
      link: 'https://dsmarketing.com/',
      category: 'ecommerce',
      image: { src: '/img/ds_marketing.avif', alt: 'DS Marketing' },
    },
    {
      title: t('projects.bisket_baskets.title'),
      desc: t('projects.bisket_baskets.desc'),
      link: 'https://www.bisketbaskets.com/',
      category: 'ecommerce',
      image: { src: '/img/bisketbaskets.png', alt: 'Bisket Baskets' },
    },
    {
      title: t('projects.big_dot.title'),
      desc: t('projects.big_dot.desc'),
      link: 'https://www.bigdotofhappiness.com/',
      category: 'ecommerce',
      image: { src: '/img/bdh.png', alt: 'Big Dot of Happiness' },
    },
    {
      title: t('projects.autogeek.title'),
      desc: t('projects.autogeek.desc'),
      link: 'https://www.autogeek.net/',
      category: 'ecommerce',
      image: { src: '/img/autogeek.webp', alt: 'Autogeek' },
    },
    {
      title: t('projects.cuenta_ahorro.title'),
      desc: t('projects.cuenta_ahorro.desc'),
      link: '#',
      category: 'banking',
      image: { src: '/img/caa.png', alt: 'Cuenta de Ahorro Ágil' },
    },
    {
      title: t('projects.pagachat.title'),
      desc: t('projects.pagachat.desc'),
      link: '#',
      category: 'banking',
      image: { src: '/img/pagachat.png', alt: 'PagaChat' },
    },
    {
      title: t('projects.portal_apps.title'),
      desc: t('projects.portal_apps.desc'),
      link: '#',
      category: 'banking',
      image: { src: '/img/portal.webp', alt: 'Portal de aplicaciones' },
    },
    {
      title: t('projects.venta_marbetes.title'),
      desc: t('projects.venta_marbetes.desc'),
      link: '#',
      category: 'banking',
      image: { src: '/img/marbete.png', alt: 'Venta de Marbetes' },
    },
    {
      title: t('projects.sport_unlimited.title'),
      desc: t('projects.sport_unlimited.desc'),
      link: 'https://www.sportsunlimitedinc.com/',
      category: 'ecommerce',
      image: { src: '/img/sportunlimited.webp', alt: 'Sport Unlimited Inc' },
    },
    {
      title: t('projects.dog_outdoors.title'),
      desc: t('projects.dog_outdoors.desc'),
      link: 'https://www.thedogoutdoors.com/',
      category: 'ecommerce',
      image: { src: '/img/thedogoutdoors.avif', alt: 'The Dog Outdoors' },
    },
    {
      title: t('projects.us_appliance.title'),
      desc: t('projects.us_appliance.desc'),
      link: 'https://www.us-appliance.com/',
      category: 'ecommerce',
      image: { src: '/img/us-appliance.webp', alt: 'US Appliance' },
    },
    {
      title: t('projects.ramblers_way.title'),
      desc: t('projects.ramblers_way.desc'),
      link: 'https://www.ramblersway.com/',
      category: 'ecommerce',
      image: { src: '/img/ramblersway.avif', alt: 'Ramblers Way' },
    },
    {
      title: t('projects.motorbook.title'),
      desc: t('projects.motorbook.desc'),
      link: 'https://www.themotorbookstore.com/',
      category: 'ecommerce',
      image: { src: '/img/themotorbookstore.webp', alt: 'The MotorBook Store' },
    },
    {
      title: t('projects.media_supply.title'),
      desc: t('projects.media_supply.desc'),
      link: 'https://mediasupply.com/',
      category: 'ecommerce',
      image: { src: '/img/mediasupply.avif', alt: 'Media Supply' },
    },
    {
      title: t('projects.paper_ink.title'),
      desc: t('projects.paper_ink.desc'),
      link: 'https://www.paperinkarts.com/',
      category: 'ecommerce',
      image: { src: '/img/pia.webp', alt: 'Paper & Ink Arts' },
    },
    {
      title: t('projects.tall_man.title'),
      desc: t('projects.tall_man.desc'),
      link: 'https://www.tallmenshoes.com/',
      category: 'ecommerce',
      image: { src: '/img/tallmenshoes.avif', alt: 'Tall Man Shoes' },
    },
    {
      title: t('projects.ghurka.title'),
      desc: t('projects.ghurka.desc'),
      link: 'https://ghurka.com/',
      category: 'ecommerce',
      image: { src: '/img/ghurka.webp', alt: 'Ghurka' },
    },
  ];

  const skillGroups = [
    {
      title: t('skills_frontend'),
      icon: <IconMonitor className="h-5 w-5" />,
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: t('skills_backend'),
      icon: <IconServer className="h-5 w-5" />,
      items: ['Node.js', 'NestJS', 'PHP', 'SQL Server', 'PostgreSQL', 'APIs'],
    },
    {
      title: t('skills_cloud'),
      icon: <IconCloud className="h-5 w-5" />,
      items: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Git / GitHub',
        'Scrum',
        t('skills_agile'),
        'Jira',
        'Trello',
      ],
    },
  ];

  const education = [
    { title: t('education_master'), meta: t('education_master_meta') },
    { title: t('education_degree'), meta: t('education_degree_meta') },
    { title: t('education_english'), meta: t('education_english_meta') },
  ];

  const certifications = [
    { title: t('cert_platzi_title'), meta: t('cert_platzi_meta') },
    { title: t('cert_sql_title'), meta: t('cert_sql_meta') },
    { title: t('cert_git_title'), meta: t('cert_git_meta') },
    { title: t('cert_cyber_title'), meta: t('cert_cyber_meta') },
    { title: t('cert_js_title'), meta: t('cert_js_meta') },
    { title: t('cert_java_title'), meta: t('cert_java_meta') },
    { title: t('cert_mos_title'), meta: t('cert_mos_meta') },
    { title: t('cert_bootstrap_title'), meta: t('cert_bootstrap_meta') },
  ];

  const talks = [
    {
      title: t('talk_deploy_title'),
      meta: t('talk_deploy_meta'),
      summary: t('talk_deploy_summary'),
      eventHref: 'https://barcamp.org.do/',
      linkedinHref:
        'https://www.linkedin.com/posts/in%C3%A9s-mar%C3%ADa-montero-concepci%C3%B3n-6002752bb_hace-unas-semanas-tuve-la-oportunidad-de-ugcPost-7398820440561053696-gIcM/?utm_source=share&utm_medium=member_android&rcm=ACoAAEy_ZCABPVU1mEgTGof6eGyD0Gs7UTh7FIY',
      media: [] as { src: string; alt: string; type?: 'image' | 'video' }[],
    },
    {
      title: t('talk_turbo_title'),
      meta: t('talk_turbo_meta'),
      summary: t('talk_turbo_summary'),
      eventHref: 'https://2024.barcamp.org.do/',
      linkedinHref:
        'https://www.linkedin.com/posts/in%C3%A9s-mar%C3%ADa-montero-concepci%C3%B3n-6002752bb_desarrolloweb-weboptimization-frontend-activity-7264016957736108033-vghw?utm_source=share&utm_medium=member_android&rcm=ACoAAEy_ZCABPVU1mEgTGof6eGyD0Gs7UTh7FIY',
      media: [] as { src: string; alt: string; type?: 'image' | 'video' }[],
    },
  ];

  return { experienceCards, projectCards, skillGroups, education, certifications, talks };
}
