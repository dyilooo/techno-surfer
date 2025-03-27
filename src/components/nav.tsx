"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="glass-effect fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <Link href="/" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            TechnoSurfer
          </Link>
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/services" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/pricing"
          >
            Pricing
          </Link>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 