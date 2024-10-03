import React from 'react';
import { IProjectCard } from './types';

const ProjectCard = ({dateRange, title, desc}: IProjectCard) => {
  return (
    <div>
        {title && dateRange && desc ? (
        <>
            <div>
                {dateRange}
            </div>
            <div>
                <h3>{title}</h3>
                <div>{desc}</div>
            </div>
        </>
        ) : (
            ''
        )} 
    </div>
  );
};

export default ProjectCard;
