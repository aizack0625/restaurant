import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/Header/Header";
import 'modern-css-reset/dist/reset.min.css';
import { AuthProvider } from "@/context/AuthContext";
import { CssBaseline } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harvest Restaurant",
  description: "Harvest Restaurant",
};

export default function RootLayout({ children }) {
  return (

    <html lang="ja" suppressHydrationWarning={true}>
    <CssBaseline />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
