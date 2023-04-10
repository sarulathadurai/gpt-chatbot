import { Box } from "@mui/material";
import React from "react";

export default function Loader() {

  return (
    <Box
      pt={2}
    >
      <Box bgcolor={"primary.light"} width="41%" p={2} borderRadius={3}>
        <div className="dot-container">
          <Box
            className="dot-elastic-before"
            sx={{ backgroundColor: "primary.main" }}
          ></Box>
          <Box
            className="dot-elastic"
            sx={{ backgroundColor: "primary.main" }}
          ></Box>
          <Box
            className="dot-elastic-after"
            sx={{ backgroundColor: "primary.main" }}
          ></Box>
        </div>
      </Box>
    </Box>
  );
}
