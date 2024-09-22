import { Noto_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClerkProvider } from "./ConvexClerkProvider";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Podcasts",
  description: "Generate your podcasts using AI",
  icons: "/icons/LOGO.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
