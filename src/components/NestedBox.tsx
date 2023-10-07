import { Box } from "theme-ui";
import { useTheme } from "@emotion/react";

export default function NestedBox(props: any) {
  const theme = useTheme() as any;
  console.log({ theme });
  return (
    <Box
      sx={{
        bg: "secondary",
        p: 3,
        color: "text",
        ...props.sx,
      }}
    >
      Nested Box
    </Box>
  );
}
