import { ImageResponse } from 'next/og';
import { client } from '@/sanity/lib/client';
import { postQuery } from '@/sanity/lib/queries';

export const alt = 'Insight Detail Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post || !post.mainImage) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
          }}
        >
          Post Not Found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  const imageUrl = post.imageURL;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
          color: 'white',
          fontSize: 32,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px' }}>
          {post.title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}