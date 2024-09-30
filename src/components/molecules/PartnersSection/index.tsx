import { cn } from '@/styles/utils';
import Image from 'next/image';
import React from 'react';

const PartnersSection: React.FC = () => {
  const partnersList = [
    {
      src: 'https://i.pravatar.cc/150?img=1',
      alt: 'Partner 1'
    },
    {
      src: 'https://i.pravatar.cc/150?img=2',
      alt: 'Partner 2'
    },
    {
      src: 'https://i.pravatar.cc/150?img=3',
      alt: 'Partner 3'
    },
    {
      src: 'https://i.pravatar.cc/150?img=4',
      alt: 'Partner 4'
    },
    {
      src: 'https://i.pravatar.cc/150?img=5',
      alt: 'Partner 5'
    }
  ];

  return (
    <div className="w-[1200px] m-auto mask-partners-image">
      <ul
        className={cn(`flex flex-nowrap w-[max-content] animate-scroll gap-10`)}
      >
        {partnersList.map((icon, index) => (
          <Image
            src={icon.src}
            alt={icon.alt}
            key={index}
            width={150}
            height={150}
          />
        ))}
        {/* According to how many images we have, we will need to duplicate more or less times */}
        {partnersList.map((icon, index) => (
          <Image
            src={icon.src}
            alt={icon.alt}
            key={index}
            width={150}
            height={150}
            aria-hidden="true"
          />
        ))}
        {partnersList.map((icon, index) => (
          <Image
            src={icon.src}
            alt={icon.alt}
            key={index}
            width={150}
            height={150}
            aria-hidden="true"
          />
        ))}
        {partnersList.map((icon, index) => (
          <Image
            src={icon.src}
            alt={icon.alt}
            key={index}
            width={150}
            height={150}
            aria-hidden="true"
          />
        ))}
      </ul>
    </div>
  );
};

export default PartnersSection;
