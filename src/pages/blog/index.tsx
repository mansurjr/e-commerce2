import { memo } from 'react';
import BlogHero from './components/blogHero';
import BlogArticles from './components/blogArticles';

const Blog = () => {
  return (
    <div className="Blog">
        <BlogHero/>
        <BlogArticles/>
    </div>
  );
};

export default memo(Blog);