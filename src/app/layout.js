import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Student Portfolio",
  description: "Personal student portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="navbar">
            <Link href="/" className="brand">
              Portfolio
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="page-shell">{children}</main>

        <footer className="site-footer">
          Portfolio
        </footer>
      </body>
    </html>
  );
}