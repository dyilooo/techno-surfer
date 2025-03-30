"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, ShoppingCart, DollarSign, Mail, Menu } from "lucide-react"

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
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/about"
          >
            <Info className="h-4 w-4" />
            About
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
              pathname === "/services" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/services"
          >
            <Menu className="h-4 w-4" />
            Services
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
              pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/pricing"
          >
            <DollarSign className="h-4 w-4" />
            Pricing
          </Link>
          <Link
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
              pathname === "/cart" ? "text-primary" : "text-muted-foreground"
            }`}
            href="/cart"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>
          <Button asChild variant="default" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 