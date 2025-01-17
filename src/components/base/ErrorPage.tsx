import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "background.paper",
        padding: 3,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "5rem", fontWeight: "bold", color: "error.main" }}
      >
        404
      </Typography>
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Oops! Trang bạn tìm không tồn tại.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Có thể trang này đã bị xóa hoặc không còn tồn tại.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Quay về trang chủ
      </Button>
    </Box>
  );
};

export default ErrorPage;
