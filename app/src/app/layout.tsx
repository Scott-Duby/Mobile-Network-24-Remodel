import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MN24",
  description: "MN24 web app",
};

// Add a route here when its page exists; the menu stays hidden while this is empty.
const navLinks: { href: string; label: string }[] = [
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-40 bg-base-200 shadow-sm">
          <nav className="navbar mx-auto w-full max-w-5xl px-4">
            <div className="navbar-start">
              <Link href="/" className="text-lg font-bold text-primary">
                Mobile Network 24
              </Link>
            </div>
            {navLinks.length > 0 && (
              <div className="navbar-end">
                <ul className="menu menu-horizontal hidden gap-1 md:flex">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <details className="dropdown dropdown-end md:hidden">
                  <summary
                    className="btn btn-ghost btn-square"
                    aria-label="Open menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </summary>
                  <ul className="menu dropdown-content z-50 mt-2 w-48 rounded-box bg-base-100 p-2 shadow-sm">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            )}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
