import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import TheMainHeader from "./TheMainHeader";
import TheMainFooter from "./TheMainFooter";

const TheMainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack minHeight="100vh">
      <TheMainHeader />
      <Box
        sx={{
          pt: {
            xs: "66px",
            md: "74px",
          },
        }}
        flex={1}
      >
        {children}
      </Box>
      <TheMainFooter />
    </Stack>
  );
};

export default TheMainLayout;
