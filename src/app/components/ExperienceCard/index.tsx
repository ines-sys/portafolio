import React from 'react';
import { IExperienceCard } from './types';

import Link from 'next/link';

const ExperienceCard = ({dateRange, title, desc, tags, link}: IExperienceCard) => {
  return (
    <div>
        {title && dateRange && desc ? (
        <Link href={link} target='__blank' className='experienceCard flex flex-col hover:text-secondary rounded-2xl p-6 hover:ring-2 hover:ring-secondary'>
            <h3 className='font-bold flex items-center justify-between text-lg'>
                <span>{title}</span>
                <svg className='svgIcon -mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </h3>
            <span className='font-semibold italic text-sm'>
                {dateRange}
            </span>
            <div className='mt-5 text-base'>{desc}</div>
            <ul className='mt-5 flex flex-wrap'>
                {tags.map((tag, index) => (
                    <li className="mt-2 ring-1 ring-inset ring-purple-700/10 bg-purple-200 text-purple-800 text-sm font-medium me-2 px-3 py-1.5 rounded-full" key={index}>
                        {tag.title}
                    </li> 
                ))}
            </ul>
        </Link>
        ) : (
            ''
        )} 
    </div>
  );
};

export default ExperienceCard;
