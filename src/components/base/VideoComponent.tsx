import React from "react";

interface VideoComponentProps {
  src: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {
  return (
    <div className="sm:w-1022px w-full">
      <video controls style={{ width: "100%", height: "auto" }}>
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};

export default VideoComponent;
