import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from './mdxUtils';
import { ICategory, ITag } from '../../types';

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

type PostItems = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs();
  return slugs
  .map((slug) => getPostBySlug(slug, fields))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getAllCategories(): ICategory[] {
  // need to create proper categories, and count of posts
  return [
    {
      label: 'Business',
      value: 'business'
    },
    {
      label: 'News',
      value: 'news'
    },
    {
      label: 'Supply Chain',
      value: 'supply-chain'
    },
    {
      label: 'Technology',
      value: 'technology'
    }
  ];
}

export function getAllTags(fields: string[] = []): ITag[] {
  // need to create proper tags
  const tags = [
    {
      label: 'AI',
      value: 'ai',
      description: ''
    },
    {
      label: 'Business Intelligence',
      value: 'business-intelligence',
      description: ''
    },
    {
      label: 'Automation',
      value: 'automation',
      description: ''
    },
    {
      label: 'ERP',
      value: 'erp',
      description: ''
    },
    {
      label: 'IoT',
      value: 'iot',
      description: ''
    },
    {
      label: 'Materials',
      value: 'materials',
      description: ''
    },
    {
      label: 'Open Source',
      value: 'open-source',
      description: ''
    },
    {
      label: 'PLM',
      value: 'plm',
      description: ''
    },
    {
      label: 'Retail',
      value: 'retail',
      description: ''
    },
    {
      label: 'SCM',
      value: 'scm',
      description: ''
    },
    {
      label: 'Transparency',
      value: 'transparency',
      description: ''
    }
  ];

  const filteredTags = [];

  tags.map((tag) => {
    let minimalTag = {};

    fields.forEach((field) => {
      // minimalTagtag[field]
      if(tag[field]) {
        minimalTag[field] = tag[field]
      }
    })
    console.log('minimal tag: ', minimalTag);
    filteredTags.push(minimalTag);
  })

  console.log('filtered tags: ', filteredTags);

  return filteredTags;
}

