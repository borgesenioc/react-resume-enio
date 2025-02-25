import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-4xl font-bold text-gray">Solutions</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="flex flex-col" key={`${title}-${index}`}>
                <h3 className="mb-3 mt-2 text-center text-2xl font-bold text-gray-800">{title}</h3>
                <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl h-80">
                  <Image
                    alt={title}
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    src={image}
                  />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay]
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        { 'opacity-0 hover:opacity-80': !mobile },
        showOverlay && 'opacity-80'
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank"
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});