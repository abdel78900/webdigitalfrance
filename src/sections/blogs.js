import React from 'react';
import { Container, Box, Grid, Divider } from 'theme-ui';
import Masonry from 'react-masonry-css'
import BlockTitle from '../components/block-title';
import BlogCard from '../components/cards/blog-card';

import blogImage1 from '../assets/blog-1-1.png';
import blogImage2 from '../assets/blog-1-2.png';
import blogImage3 from '../assets/blog-1-3.png';
import blogImage4 from '../assets/blog-1-4.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'How to work with prototype design with adobe xd featuring tools',
    description:
      'The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: null,
    title:
      'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: 'Multiple task wireframing with team management perform better',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: 'Multiple art board prototype with Figma',
    description:
      'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: blogImage4,
    title:
      'Team presentation with latest user interface & experience reach more',
    description: null,
    path: '/',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};
const breakpoints = {
  default:3,
  1100: 2,
  700: 1,
}

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
          <Masonry
              breakpointCols={breakpoints}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
              >
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
            <div key={index}>
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            </div>
            )
          )}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
