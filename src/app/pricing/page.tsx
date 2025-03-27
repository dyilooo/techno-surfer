import Link from "next/link"
import { Check, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Transparent Pricing Plans
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the right plan for your business needs with our flexible pricing options.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="tech-card flex flex-col">
                <CardHeader>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Starter</CardTitle>
                  <CardDescription>
                    Perfect for small businesses just getting started with digital marketing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-primary">$499</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic SEO optimization</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Social media management (2 platforms)</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Monthly performance report</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>2 blog posts per month</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact?plan=starter">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card flex flex-col border-primary">
                <CardHeader>
                  <div className="text-sm font-medium text-primary mb-2">Most Popular</div>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Professional</CardTitle>
                  <CardDescription>
                    Ideal for growing businesses looking to expand their online presence.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-primary">$999</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Comprehensive SEO strategy</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Social media management (4 platforms)</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>PPC campaign management</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Bi-weekly performance reports</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email & phone support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>4 blog posts per month</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact?plan=professional">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card flex flex-col">
                <CardHeader>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Enterprise</CardTitle>
                  <CardDescription>
                    Comprehensive solution for established businesses with advanced needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-primary">$1,999</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced SEO & content strategy</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Social media management (all platforms)</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced PPC & remarketing campaigns</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Weekly performance reports</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support with dedicated manager</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>8 blog posts per month</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email marketing campaigns</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact?plan=enterprise">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Custom Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Need a tailored solution for your specific business requirements? Contact us for a custom quote.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact?plan=custom">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

