// import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Alien Tinder",
  description: "Nasa Space Apps Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased  overflow-x-hidden`}>
        <div className="max-w-screen-2xl w-full">
          <Header />
          <div className="w-full">
            <main> {children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
