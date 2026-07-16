import React from 'react';
import { IProjectCard } from './types';
import FrameImage from '../common/FrameImage';
import Link from 'next/link';
import { IconBank, IconExternal, IconShop } from '../Icons';

const ProjectCard = ({ title, desc, image, link, category }: IProjectCard) => {
  if (!title || !image || !desc || !link) return null;

  const imgURL = `https://ines-sys.github.io/portafolio${image.src}`;
  const isExternal = link !== '#';
  const CategoryIcon = category === 'banking' ? IconBank : IconShop;

  const inner = (
    <>
      <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 ring-1 ring-line sm:h-28 sm:w-28">
        <FrameImage
          src={imgURL}
          alt={image.alt}
          className={`h-full w-full object-contain ${image.className ?? ''}`}
          width={112}
          height={112}
        />
        {category && (
          <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent-deep text-white shadow-glow">
            <CategoryIcon className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display mb-2 flex items-start justify-between gap-3 text-sm font-bold text-plum md:text-base">
          <span>{title}</span>
          {isExternal && (
            <IconExternal className="mt-0.5 h-4 w-4 shrink-0 text-accent opacity-50 transition group-hover:opacity-100" />
          )}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{desc}</p>
      </div>
    </>
  );

  const className =
    'project-card group flex flex-col gap-4 rounded-2xl border border-line bg-surface-strong/80 p-4 backdrop-blur-md sm:flex-row sm:items-start md:p-5';

  if (isExternal) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
};

export default ProjectCard;
