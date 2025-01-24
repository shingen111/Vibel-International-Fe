/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";

export const alt = "Insight Detail Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: {
      slug,
    },
  });

  if (!post || !post.imageURL) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
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
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
          fontSize: 24,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          position: "relative",
        }}
      >
        <img className="h-full object-cover" src={imageUrl} alt={post.title} />
      </div>
    ),
    {
      ...size,
    }
  );
}
