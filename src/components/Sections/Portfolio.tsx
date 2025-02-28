import Image from 'next/image';
import { FC, memo } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col max-w-4xl mx-auto">
        {portfolioItems.map((item, index) => {
          const { title, image, description } = item;
          return (
            <div className="mb-8" key={`${title}-${index}`}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 
                              md:grid-cols-[2fr_3fr] md:grid-rows-[auto_auto]">
                {/* Title: For mobile, row1; for md, placed in col1 row1 */}
                <div className="order-1 md:col-start-1 md:row-start-1 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    {title}
                  </h3>
                </div>
                {/* Text: For mobile, appears after title; for md, in col2 spanning both rows */}
                <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center">
                  <div className="p-4 shadow-lg shadow-black/30 w-full h-full flex items-center justify-center">
                    <p className="whitespace-pre-line text-base text-gray-800">
                      {description}
                    </p>
                  </div>
                </div>
                {/* Image: For mobile, appears last; for md, in col1 row2 */}
                <div className="order-3 md:col-start-1 md:row-start-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/30 h-64">
                    <Image
                      alt={title}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                      src={image}
                    />
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