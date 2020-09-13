import React from "react";
import Box from "@material-ui/core/Box";

function FormDivider() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"start"}
      height={"0.1rem"}
      width={"100%"}
    >
      <div style={{ width: "81%", height: "100%", background: "lightgrey" }} />
    </Box>
  );
}

export default FormDivider;
