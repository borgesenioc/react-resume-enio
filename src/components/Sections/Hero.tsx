import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-400/10 p-6 px-4 sm:px-10 text-center shadow-xl backdrop-blur-sm">
            <h1 className="pt-8 text-4xl font-bold text-black sm:text-4xl lg:text-6xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-gray-950">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4 pb-8">
              {actions.map(({href, text, primary, Icon, target, rel}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-gray-800 ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-black ring-black',
                  )}
                  href={href}
                  key={text}
                  rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} // Add rel for security
                  target={target || '_self'} // Ensure target is set correctly
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-gray-800 p-1 ring-black ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
