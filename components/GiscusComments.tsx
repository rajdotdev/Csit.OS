import React from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentsProps {
  term: string;
}

const GiscusComments: React.FC<GiscusCommentsProps> = ({ term }) => {
  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 font-sans">Discussions</h3>
      <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
        <Giscus
          id="comments"
          repo="rajdotdev/Giscus"
          repoId="R_kgDORXtY-w"
          category="Announcements"
          categoryId="DIC_kwDORXtY-84C3HOB"
          mapping="specific"
          term={term}
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default GiscusComments;
