import Image from "next/image";
import React from "react";

interface ImageHoverProps {
  src: string;
  alt?: string;
  className?: string;
  [x: string]: any;
}

const ImageHover: React.FC<ImageHoverProps> = (
  { src, alt, className, ...props },
  
) => {
  return (
    <div className={`image-container h-full w-full ${className}`}>
      <Image
        className="image !h-full object-cover hover:cursor-pointer "
        src={src}
        height={1000}
        width={1000}
        alt={alt ?? "img"}
        {...props}
      />
    </div>
  );
};

export default ImageHover;
