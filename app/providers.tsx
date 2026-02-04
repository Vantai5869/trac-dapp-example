"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#E53935" }, // Pokédex red
    secondary: { main: "#FFCB05" }, // Pokémon yellow
    background: { default: "#B3E5FC", paper: "#FFFFFF" }, // sky-ish
    text: { primary: "#111827" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#B3E5FC",
          backgroundImage:
            "radial-gradient(circle at 12px 12px, rgba(255,255,255,0.45) 0 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.75)",
          borderColor: "rgba(17, 24, 39, 0.25)",
          borderWidth: 1,
          borderStyle: "solid",
          backdropFilter: "blur(6px)",
        },
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
