import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "~/theme";
import TheMainLayout from "~/components/layouts/TheMainLayout";

const prompt = localFont({
  src: "./fonts/Prompt-Regular.woff",
  variable: "--font-prompt-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MVP EX. Buy and Sell MVPX.",
  description: "MVP EX. Buy and Sell MVPX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TheMainLayout>{children}</TheMainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
