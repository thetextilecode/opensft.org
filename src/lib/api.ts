import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from './mdxUtils';
import { ICategory, ITag } from '../../types';
import { postCategories, postTags } from '../../opensft.config';

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

export function getAllPosts(
  fields: string[] = [],
  filterByTag?: string,
  filterByCategory?: string | string[]
): PostItems[] {
  const isLocal = String(process.env.NODE_ENV) === 'development';

  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => {
      return isLocal || !post.draft;
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  let tempPosts = posts;

  if (filterByTag) {
    tempPosts = posts.filter((post) => {
      return post.tags?.includes(filterByTag);
    });
  } else if (filterByCategory) {
    tempPosts = posts.filter((post) => {
      return post.category?.toLowerCase() === filterByCategory;
    });
  }

  return tempPosts;
}

export function getCategoryByValue(value: string | string[]) {
  let category = {};
  const cat = getAllCategories().filter((category) => category.value === value);
  if (cat.length === 1) {
    category = cat[0];
  }
  return category;
}

export function getAllCategories(): ICategory[] {
  // need to create proper categories, and count of posts
  return postCategories;
}

export function getAllTags(fields?: string[]): ITag[] {
  let tags = postTags;

  // if fields are not provided, just return them all
  if (fields) {
    const filteredTags = [];

    tags.map((tag) => {
      let minimalTag = {};

      fields.forEach((field) => {
        if (tag[field]) {
          minimalTag[field] = tag[field];
        }
      });
      filteredTags.push(minimalTag);
    });

    tags = filteredTags;
  }

  return tags;
}

export function getTagByValue(value: string) {
  let tag = {};
  const tagTemp = getAllTags().filter((tagData) => {
    return tagData.value === value;
  });

  if (tagTemp.length === 1) {
    tag = tagTemp[0];
  }
  return tag;
}
