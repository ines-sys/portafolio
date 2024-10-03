import React from 'react';
import { IExperienceCard } from './types';

const ExperienceCard = ({dateRange, title, desc}: IExperienceCard) => {
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

export default ExperienceCard;
