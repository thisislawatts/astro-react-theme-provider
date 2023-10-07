import { Box, ThemeUIProvider } from "theme-ui";
import NestedBox from "./NestedBox";

const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#111",
    primary: "#33e",
    secondary: "lime",
  },
  space: [0, 10, 20, 30, 40],
};

export default function App(props: any) {
  return (
    <ThemeUIProvider theme={theme}>
      App.start
      <Box
        sx={{
          bg: "primary",
          p: 3,
          mt: 1
        }}
      >
        Box Content
      </Box>
      {props.children}
      <NestedBox sx={{
        mb: 2
      }}/>
      App.end
    </ThemeUIProvider>
  );
}
