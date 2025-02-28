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
            <div className="mb-16" key={`${title}-${index}`}>
              <div className="grid grid-cols-[2fr_3fr] grid-rows-[10%_90%] gap-x-8 gap-y-4 h-64">
                {/* Title in column 1, row 1 */}
                <div className="col-start-1 row-start-1 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>
                {/* Empty cell in column 2, row 1 */}
                <div className="col-start-2 row-start-1" />
                {/* Image in column 1, row 2 */}
                <div className="col-start-1 row-start-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/30 h-full w-full">
                    <Image
                      alt={title}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                      src={image}
                    />
                  </div>
                </div>
                {/* Text in column 2, row 2 */}
                <div className="col-start-2 row-start-2 flex items-center justify-center">
                  <div className="p-4 shadow-lg shadow-black/30 h-full w-full flex items-center justify-center">
                    <p className="whitespace-pre-line text-base text-gray-800">
                      {description}
                    </p>
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