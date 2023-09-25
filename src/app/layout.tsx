import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import type { Metadata } from "next";
// import { Lato } from "next/font/google";
import { Container } from "@mui/material";
//const lato = Lato({ subsets: ["latin"] });
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/themes";
import Head from "next/head";

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
        <ThemeProvider theme={theme}>
          <Header />

          <Container fixed> {children}</Container>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
