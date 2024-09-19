import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Potcast",
  description: "Generate your potcasts using AI",
  icons: "/icons/LOGO.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className}`}>{children}</body>
    </html>
  );
}
