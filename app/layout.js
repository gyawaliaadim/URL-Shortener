import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Url Shortener - Aadim Gyawali",
  description: "Shorten your url for ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
