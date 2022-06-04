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

export function getAllPosts(fields: string[] = [], filterByTag?: string, filterByCategory?: string | string[]): PostItems[] {
  const slugs = getPostSlugs();
  let posts = slugs
  .map((slug) => getPostBySlug(slug, fields))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if(filterByTag) {
    posts = posts.filter((post) => post.tags.includes(filterByTag));
  } else if(filterByCategory) {
    posts = posts.filter((post) => post.category?.toLowerCase() === filterByCategory);
  }

  return posts;
}

export function getCategoryByValue(value: string | string[]) {
  let category = {};
  const cat = getAllCategories().filter((category) => category.value === value);
  if(cat.length === 1) { category = cat[0] }
  return category;
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
      if(tag[field]) {
        minimalTag[field] = tag[field];
      }
    })
    filteredTags.push(minimalTag);
  })

  return filteredTags;
}

