import React from "react";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import MultiStepForm from "./MultiStepForm";
import { createTheme, ThemeProvider } from "@material-ui/core";
const theme = createTheme({
  palette: {
    primary: {
      main: "#f02727", // This is an orange looking color
    },
    secondary: {
      main: "#c30606", //Another orange-ish color
    },
  },
  // fontFamily: font // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});
function Lending() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{ maxWidth: "800px" }} component={Box} p={4}>
          <Paper component={Box} p={3}>
            <MultiStepForm theme={theme} />
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Lending;
