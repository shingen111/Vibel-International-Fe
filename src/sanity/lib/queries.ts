import { groq } from "next-sanity";

/**
 * @todo Get total number of posts
 */
export const totalPostsQuery = groq`count(*[_type == "post"])`;

// Get all posts
export const postsQuery = (page = 1, pageSize = 10) => groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  categories[]-> { "name": title },
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  description,
} | order(_createdAt desc)[${(page - 1) * pageSize}...${page * pageSize}]`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, description, mainImage, body, _createdAt, categories[]-> { "name": title }, "imageURL": mainImage.asset->url, "authorName": author->name, categories[]-> { "name": title },
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
