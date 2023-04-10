import { Box, Typography } from "@mui/material";
import React from "react";

export default function Header({
  title,
  containerStyle,
  textStyle,
}: {
  title: string;
  containerStyle?: object;
  textStyle?: object;
}) {
  return (
    <Box
      p={2}
      borderRadius={"5px 5px 0px 0px"}
      sx={{ borderBottom: "2px solid #ca0714", ...containerStyle }}
    >
      <Typography
        color="#ca0714"
        variant="h5"
        sx={{ fontWeight: "bold", ...textStyle }}
      >
        {title}
      </Typography>
    </Box>
  );
}
