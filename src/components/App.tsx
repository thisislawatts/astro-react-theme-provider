import { Box, ThemeUIProvider } from "theme-ui";

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
        }}
      >
        Box Content
      </Box>
      {props.children}
      App.end
    </ThemeUIProvider>
  );
}
