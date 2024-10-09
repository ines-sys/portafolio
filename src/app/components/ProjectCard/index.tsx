import React from 'react';
import { IProjectCard } from './types';
import FrameImage from '../common/FrameImage';
import Link from 'next/link';

const ProjectCard = ({ title, desc, image, link}: IProjectCard) => {
    const imgURL = `https://ines-sys.github.io/portafolio${image.src}`
  return (
    <div>
        {title && image && desc && link ? (
            <Link href={link} className="projectCard items-center ring ring-2 ring-gray-300 flex flex-col lg:flex-row overflow-hidden before:ease-in-out after:ease-in-out bg-background group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-foreground-222 hover:border-purple-200 duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5  before:duration-300 before:-z-1 before:bg-purple-200 before:absolute before:top-0 before:left-0">
                <div className='h-[150px] flex items-center duration-300 group-hover:text-foreground group-hover:z-[5] bg-white w-fit py-2 px-3.5 flex items-center'>
                    <FrameImage src={imgURL} alt={image.alt} width={150} height={image.height} className={image.className}></FrameImage>
                </div>
                <div className='font-medium text-xs duration-300 group-hover:text-purple-800 group-hover:z-[5] lg:w-[80%]'>
                    <h3 className='font-semibold mb-3 flex justify-between items-center text-base'>
                        <span>{title}</span>
                        <svg className='svgIcon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </h3>
                    <div className='text-sm'>{desc}</div>
                </div>
            </Link>
        ) : (
            ''
        )} 
    </div>
  );
};

export default ProjectCard;
