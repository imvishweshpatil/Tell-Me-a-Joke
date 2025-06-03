// import Loader from "./components/loader";
// import Nav from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Nav /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
