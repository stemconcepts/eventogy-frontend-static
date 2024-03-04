import { Inter } from "next/font/google";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import SubMenu from "./components/shared/SubMenu";
import SearchContextProvider from "./providers/searchContextProvider";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Eventogy - Static",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.variable}`}>
        <SearchContextProvider>
          <Header pageTitle="Event Hub" />
          <div className="flex flex-col container p-0 space-y-5">
            <SubMenu />
            {children}
            <Footer />
          </div>
        </SearchContextProvider>
      </body>
    </html>
  );
}