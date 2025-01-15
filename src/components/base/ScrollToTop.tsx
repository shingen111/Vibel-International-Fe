"use client";
import { ArrowUpward } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import Visibility from "./Visibility";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Visibility visibility={isVisible}>
      <Tooltip title="Click to scroll to top" arrow>
        <Button
          variant="contained"
          onClick={scrollToTop}
          sx={{
            padding: "0",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            position: "fixed",
            zIndex: 20,
            right: "20px",
            bottom: "20px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            minWidth: "auto",
          }}
        >
          <ArrowUpward className="!h-5" />
        </Button>
      </Tooltip>
    </Visibility>
  );
}
