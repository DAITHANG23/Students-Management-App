import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/themes";

import Providers from "@/app/providers";
import AppProvider from "@/contexts/AppContext";
export const metadata: Metadata = {
  title: "Đoàn Thiếu Nhi Thánh Thể Giáo Xứ Tử Đình",
  description: "Thông Tin Đoàn Thiếu nhi Thánh thể giáo xứ Tử Đình",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <AppProvider>
            <ThemeProvider theme={theme}>
              <Header />

              <Box sx={{ marginTop: "100px" }}> {children}</Box>

              <Footer />
            </ThemeProvider>
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
