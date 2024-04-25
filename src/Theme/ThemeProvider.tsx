import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f50b5",
        contrastText: "#fff",
      },
      secondary: {
        main: "#f44336",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
