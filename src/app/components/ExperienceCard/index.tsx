import React from 'react';
import { IExperienceCard } from './types';

import Link from 'next/link';

const ExperienceCard = ({dateRange, title, desc, tags, link}: IExperienceCard) => {
  return (
    <div>
        {title && dateRange && desc ? (
        <Link href={link} className='experienceCard hover:text-purple-600 rounded-2xl flex flex-col lg:flex-row gap-5 p-6 hover:ring hover:ring-2 hover:ring-gray-300'>
            <div className='font-semibold'>
                {dateRange}
            </div>
            <div>
                <h3 className='font-semibold mb-3 flex items-center justify-between'>
                    <span>{title}</span>
                    <svg className='svgIcon -mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </h3>
                <div>{desc}</div>
                <div className='mt-5'>
                    {tags.map((tag, index) => (
                        <span className="ring-1 ring-inset ring-purple-700/10 bg-purple-200 text-purple-800 text-xs font-medium me-2 px-3 py-1.5 rounded-full" key={index}>{tag.title}</span> 
                    ))}
                </div>
            </div>
        </Link>
        ) : (
            ''
        )} 
    </div>
  );
};

export default ExperienceCard;
