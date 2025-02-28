import Image from 'next/image';
import { FC, memo } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col">
        {portfolioItems.map((item, index) => {
          const { title, image, description } = item;
          return (
            <div className="mb-8" key={`${title}-${index}`}>
              <h3 className="mb-4 text-xl font-bold text-gray-800 text-center md:text-left">
                {title}
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                {/* On smartphones, this will appear below the text.
                    On medium+ screens, it occupies the left side */}
                <div className="order-2 md:order-1 w-full md:w-2/5">
                  <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/30 h-64">
                    <Image
                      alt={title}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                      src={image}
                    />
                  </div>
                </div>
                {/* Text box: appears above the image on smartphones, and to the right on larger screens */}
                <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center">
                  <div className="p-4 shadow-lg shadow-black/30">
                    <p className="whitespace-pre-line text-base text-gray-800">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;