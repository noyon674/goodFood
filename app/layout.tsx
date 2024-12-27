import Footer from "./_components/Footer";
import TopMenu from "./_components/TopMenu";
import "./main.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
