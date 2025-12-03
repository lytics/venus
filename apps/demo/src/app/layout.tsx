import "./globals.css";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/**
 * CUSTOM FONTS
 *
 * To add custom fonts, uncomment the imports below and configure your font:
 *
 * Example with local fonts:
 *
 * import localFont from "next/font/local";
 *
 * const customFont = localFont({
 *   src: [
 *     {
 *       path: "../../public/fonts/YourFont-Regular.ttf",
 *       weight: "400",
 *       style: "normal",
 *     },
 *     {
 *       path: "../../public/fonts/YourFont-Bold.ttf",
 *       weight: "700",
 *       style: "normal",
 *     },
 *   ],
 *   variable: "--font-custom",
 * });
 *
 * Then add {customFont.variable} to the html className below.
 * Create a utility class in globals.css to use it:
 *
 * @utility font-custom {
 *   font-family: var(--font-custom), system-ui, sans-serif;
 * }
 */

export const metadata = {
  title: "Venus",
  description: "Venus",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Script
          src="//unpkg.com/react-grab/dist/index.global.js"
          crossOrigin="anonymous"
          data-enabled="true"
          strategy="afterInteractive"
        />
        <CommandPaletteProvider>
          {children}
          <Toaster position="bottom-center" />
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
