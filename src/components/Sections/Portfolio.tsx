import Image from 'next/image';
import Link from 'next/link';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col max-w-4xl mx-auto">
        {portfolioItems.map((item, index) => {
          const {title, image, description, link} = item;
          // Fallback link:
          const targetUrl = link || 'http://enioborges.com';
          return (
            <div className="mb-14" key={`${title}-${index}`}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 
                              md:grid-cols-[4fr_5fr] md:grid-rows-[auto_auto]">
                {/* Title: For mobile, row1; for md, placed in col1 row1 */}
                <div className="order-1 md:col-start-1 md:row-start-1 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {title}
                  </h3>
                </div>
                {/* Text: For mobile, appears after title; for md, in col2 spanning both rows */}
                <div className="order-2 md:col-start-2 md:row-start-2 md:row-span-1 flex items-center justify-center">
                  <div className="p-4 shadow-lg shadow-black/30 w-full h-full flex items-center justify-center">
                    <p className="whitespace-pre-line text-base text-gray-800">
                      {description}
                    </p>
                  </div>
                </div>
                {/* Image: For mobile, appears last; for md, in col1 row2 */}
                <div className="order-3 md:col-start-1 md:row-start-2">
                  {/* 'group' class is key for the hover effect */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/30 h-64 group">
                    <Link href={targetUrl} rel="noopener noreferrer" target="_blank">
                      {/* The image is still displayed as normal */}
                      <Image
                        alt={title}
                        className="h-full w-full object-cover cursor-pointer"
                        placeholder="blur"
                        src={image}
                      />
                      {/* Overlay at 70% black, visible on hover */}
                      <div
                        className="
                          absolute 
                          inset-0 
                          bg-black 
                          bg-opacity-0 
                          group-hover:bg-opacity-85 
                          transition 
                          duration-300 
                          flex 
                          items-center 
                          justify-center
                        "
                      >
                        {/* Hover text appears when bg is visible */}
                        <span
                          className="
                            mx-8  
                            text-white 
                            opacity-0 
                            group-hover:opacity-100 
                            px-2 
                            text-center 
                            text-sm 
                            md:text-2xl
                          "
                        >
                          Check the Project Blueprint and Live page
                        </span>
                      </div>
                    </Link>
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