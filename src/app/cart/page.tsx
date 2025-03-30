import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart, CreditCard, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Nav />

      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Your Cart
                  </h1>
                </div>
                <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
                  <Link href="/services" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
              <Separator className="my-6" />
              <div className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="SEO Optimization Package"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg">SEO Optimization Package - Basic</h3>
                      <p className="text-sm text-muted-foreground">Monthly subscription</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center font-medium">1</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="mr-2 h-3 w-3" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center font-medium text-lg">$299.00</div>
                </div>
                <Separator />
                <div className="flex flex-col gap-4 sm:flex-row p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Social Media Marketing Package"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg">Social Media Marketing - Standard</h3>
                      <p className="text-sm text-muted-foreground">Monthly subscription</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center font-medium">1</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="mr-2 h-3 w-3" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center font-medium text-lg">$399.00</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$698.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>-$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$69.80</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>$767.80</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
              <div className="mt-6 rounded-lg border p-4 bg-card">
                <h3 className="mb-2 font-medium flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  Have a promo code?
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:border-primary/80 transition-all duration-300">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 