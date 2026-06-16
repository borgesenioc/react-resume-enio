import {FC, memo} from 'react';

export const ArticlesSection: FC = memo(() => {
  return (
    <section id="Articles" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <a href="#Articles">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Articles</h2>
        </a>
        <div className="grid gap-8">
          <p className="text-gray-600 italic">Articles coming soon...</p>
        </div>
      </div>
    </section>
  );
});

ArticlesSection.displayName = 'ArticlesSection';
export default ArticlesSection;