import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

export const ArticlesSection: FC = memo(() => {
  return (
    <Section className="bg-white text-gray-800" sectionId={SectionId.Articles}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Articles</h2>
        <div className="grid gap-8">
          <p className="text-gray-600 italic">Articles coming soon...</p>
        </div>
      </div>
    </Section>
  );
});

ArticlesSection.displayName = 'ArticlesSection';
export default ArticlesSection;
