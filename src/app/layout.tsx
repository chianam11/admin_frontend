import { ThemeProvider } from 'next-themes';
import "./globals.css";
import NavLink from './components/btn/nav/NavLink';
import Navbar from './components/btn/nav/Navbar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='flex'>
          <NavLink />
          {children}
        </div>

      </body>
    </html>
  );
}
