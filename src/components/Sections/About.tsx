import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-gradient-to-b from-gray-100 to-white" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}

        <div
          className={classNames(
            'col-span-1 flex flex-col gap-y-8 bg-neutral-200/20 p-4 backdrop-blur rounded-lg shadow-lg sm:block',
            {'md:col-span-3': !!profileImageSrc},
          )}>
          <div className="flex flex-col gap-y-2 mb-8">
            <h2 className="text-2xl font-bold text-black">About me</h2>
            <p className="prose prose-sm text-gray-900 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-4" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-gray-900" />}
                <span className="text-sm font-bold text-gray-900">{label}:</span>
                <span className=" text-sm text-gray-900">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
