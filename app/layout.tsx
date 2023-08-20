import { AnalyticsWrapper } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gnasamx.site"),
  title: "Ganesh Pawar",
  description: "Developer.",
  colorScheme: "dark",
  icons: {
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ganesh Pawar",
    description: "Developer.",
    url: "https://gnasamx.site",
    siteName: "Ganesh Pawar",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ganesh Pawar",
    card: "summary_large_image",
    images: ["/favicon.svg"],
    creator: "@gnasamx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex h-screen flex-col">
            <main className="flex-1 mx-auto w-full flex items-center justify-center px-3 py-4 sm:py-6 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
