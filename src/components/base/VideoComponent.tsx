import React from "react";
import { Box } from "@mui/material";

interface VideoComponentProps {
  src: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {
  return (
    <Box sx={{ width: "1022px", margin: "auto" }}>
      <video controls style={{ width: "100%", height: "auto" }}>
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </Box>
  );
};

export default VideoComponent;
