//import Image from "next/image";
import ExperienceCard from "./components/ExperienceCard";
import { IExperienceCard } from "./components/ExperienceCard/types";
import SocialContact from "./components/SocialContact";
import { IProjectCard } from "./components/ProjectCard/types";
import ProjectCard from "./components/ProjectCard";

import FrameImage from "./components/common/FrameImage";
import { IFrameImage } from "./components/common/FrameImage/types";

const profileImage: IFrameImage = {
  src: 'https://ines-sys.github.io/portafolio/img/ines_profile_photo.jpg',
  alt: 'profile image',
  height: 200,
  width: 200
}
const experienceCards: IExperienceCard[] = [
  {
    title: `Developer · Confidencial Dominican Bank`,
    desc: 'Maintain and enhance banking softwares by designing solutions, integrating APIs, and coordinating with suppliers. Design system architecture, document developments, run unit tests, and improve test environments for error detection.',
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
    desc: 'Planned and deployed virtual stores on Shopify, creating responsive designs and customizable storefront templates. Improved store performance, integrated external services for reviews, product customizations, and dynamic sections. Developed guidelines for template changes and added services.',
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
    desc: '(Outsourcing service with Minnek Digital Studio) Developed and customized e-commerce stores on Shopify, BigCommerce, and WordPress, applying web best practices and responsive design. Designed reusable user interfaces, handled maintenance and scalability, improved Web Vitals and SEO performance, and provided technical support to store owners.',
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
    desc: 'Provided web development services using agile methodologies, responsive design, and best practices. Utilized Trello and Jira for project management. Coded layouts based on user specifications, conducted code reviews, debugging, and built websites with Next.js.',
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
    title: 'DS Marketing · Shopify store',
    desc: 'Led project as main developer. Work with the creating of product, cart, internal pages, and the footer. Built custom features for product pages, cleaned store data, and provided technical support on Shopify management.',
    link: 'https://dsmarketing.com/',
    image: {
      src: '/img/ds_marketing.avif',
      alt: 'first project image'
    }
  },
  {
    title: 'Bisket Baskets · Shopify store',
    desc: 'Led project as main developer. Work with the creating of product, internal pages, footer and featured product sections. Built custom multi add-to-card on product page and provided technical support on Shopify management.',
    link: 'https://www.bisketbaskets.com/',
    image: {
      src: '/img/bisketbaskets.png',
      alt: 'Bisket Baskets'
    }
  },
  {
    title: 'Big Dot of Happiness · Shopify store',
    desc: 'Creation and design of the footer section, internal pages, collection, and account pages.',
    link: 'https://www.bisketbaskets.com/',
    image: {
      src: '/img/bdh.png',
      alt: 'Big Dot of Happiness '
    }
  },
  {
    title: 'Autogeek.net · BigCommerce store',
    desc: 'Creation and design of the product and internal pages and the footer and product carousels sections on the home page.',
    link: 'https://www.autogeek.net/',
    image: {
      src: '/img/autogeek.webp',
      alt: 'Autogeek'
    }
  },
  {
    title: 'Sport Unlimited Inc. · BigCommerce store',
    desc: 'Creation and design of the footer and header section, and all sections on the product, cart, account, and collection list pages',
    link: 'https://www.sportsunlimitedinc.com/',
    image: {
      src: '/img/sportunlimited.webp',
      alt: 'Sport Unlimited Inc'
    }
  },
  {
    title: 'The Dog Outdoors · Shopify store',
    desc: 'Creation and design of the product page (gallery section) and internal pages. Also, the footer section and the featured collection carousels on the home page.',
    link: 'https://www.thedogoutdoors.com/',
    image: {
      src: '/img/thedogoutdoors.avif',
      alt: 'The Dog Outdoors'
    }
  },
  {
    title: 'US Appliance · Shopify store',
    desc: 'Creation and design of the product, internal pages, and the footer and product carousels sections on the home page.',
    link: 'https://www.us-appliance.com/',
    image: {
      src: '/img/us-appliance.webp',
      alt: 'US Appliance'
    }
  },
  {
    title: 'Ramblers Way · Shopify store',
    desc: 'Customization of the base Shopify template (Dawn) according to the design approved by the client. Customized management and deployment of metafields on product and collection pages, product variants. Customization of internal pages ',
    link: 'https://www.ramblersway.com/',
    image: {
      src: '/img/ramblersway.avif',
      alt: 'Ramblers Way'
    }
  },
  {
    title: 'The MotorBook Store · BigCommerce store',
    desc: 'Creation and design of the footer and header, info sections on the product, cart and account pages',
    link: 'https://www.themotorbookstore.com/',
    image: {
      src: '/img/themotorbookstore.webp',
      alt: 'The MotorBook Store'
    }
  },
  {
    title: 'Media Supply · Shopify store',
    desc: 'Customization of the template according to the supplied design, customization of the collection and internal pages. Styling of header, footer and card sections at home page and info sections at product page.',
    link: 'https://mediasupply.com/',
    image: {
      src: '/img/mediasupply.avif',
      alt: 'Media Supply'
    }
  },
  {
    title: 'Paper & Ink Arts · BigCommerce store',
    desc: 'Creation of customizable mega menu with widgets and products section, brands carousel, reviews section, faqs section on the home page. Customization of the product page (features/details section, general info section, rewards program section and customer section). Also customize the internal pages.',
    link: 'https://www.paperinkarts.com/',
    image: {
      src: '/img/pia.webp',
      alt: 'Parper & Ink Arts'
    }
  },
  {
    title: 'Tall Man Shoes· Shopify store',
    desc: 'Full product page and product cards customization (sticky gallery, display of variants and tags, hover effects, metafield info, quick view). Creation of custom gallery sections at home page. Integration of review service. Customization of header and footer sections',
    link: 'https://www.tallmenshoes.com/',
    image: {
      src: '/img/tallmenshoes.avif',
      alt: 'Tall Man Shoes'
    }
  },
  {
    title: 'Ghurka · Shopify store',
    desc: 'Full product page and product cards customization (gallery, display of variants as separete products, custom swatches, product details, integration of yotpo reviews and Klaviyo). Customization of header and footer section.',
    link: 'https://ghurka.com/',
    image: {
      src: '/img/ghurka.webp',
      alt: 'Ghurka'
    }
  },
  {
    title: 'Cuenta de Ahorro Ágil · Digital bank account',
    desc: 'Creation of the user interface (complete frontend work). 100% digital account that you can open in a few minutes, from your cell phone or PC and with just your ID card, without the need to go to the bank.',
    link: 'https://banfondesa.com.do/productos/ahorro/cuenta-de-ahorro-agil/',
    image: {
      src: '/img/caa.png',
      alt: 'Cuenta de Ahorro Ágil'
    }
  },
  {
    title: 'Portal de aplicaciones · Internal bank portal',
    desc: 'Full stack creation of the bank`s internal application portal using NextJS and NestJS and the integration of Azure: Microsoft 365 for logging.',
    link: '#',
    image: {
      src: '/img/portal.webp',
      alt: 'Portal de aplicaciones internas'
    }
  },
]
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] mx-auto min-h-screen max-w-screen-xl px-6 py-2 md:px-12 md:py-10 lg:px-10 lg:py-0">
      <div className="flex flex-col gap-8 row-start-2">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-5">
            <header>
              <h1 className="font-extrabold text-2xl mb-2 mt-6">Inés María Montero Concepción</h1>
              <h2 className="font-semibold">
                <span className="text-base">Computer Systems Engineer</span>
                <br />
                <span className="text-base">Full Stack Web Developer</span>
                <br />
                <small className="text-sm">
                  Welcome to my little space in the World Wide Web 👩‍💻👋
                </small>
              </h2>
            </header>
            <div className="flex flex-col items-center m-auto p-4 max-w-xl text-center">
              <FrameImage {...profileImage} className="mb-4 rounded-full shadow-lg" />
              <p className="text-base">
                Just a <span className="relative inline-block"><span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2" />book lover</span> (computer geek) who transforms ideas into amazing web experiences with a mix of discipline, a pinch of creativity... <br /> and maybe a couple of cups of coffee.
              </p>
            </div>

            <div className="mt-auto">
              <span className="italic text-sm">Lost among books at home <span className="border-b-2 border-red-600">(also in break times)</span>, coding solutions at work!</span>
              <SocialContact />
            </div>
          </div>
          <main className="py-5 lg:w-1/2">
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
          <div className="mt-[50px] mb-[20px] lg:mb-[40px] grid lg:grid-cols-2 gap-6">
            {projectCards.map((item, index) => (
              <div key={index} className='mb-4 flex items-center'>
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
