import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Mail, MessageSquare, TrendingUp } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-16">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-primary-foreground"
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
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    TechnoSurfer
                  </h1>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-muted-foreground">
                  Ride the Digital Wave with TechnoSurfer Marketing!!!
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Our comprehensive digital marketing solutions help businesses grow their online presence, increase traffic, and convert more customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    alt="Digital Marketing Dashboard"
                    className="w-full h-auto object-cover aspect-video"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Digital Marketing Solutions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Choose from our comprehensive range of digital marketing services to grow your business online.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="tech-card group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] text-base">
                    Improve your website's visibility in search engines and drive organic traffic with our expert SEO
                    services.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/seo">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>PPC Advertising</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px]">
                    Drive targeted traffic and generate leads with our strategic pay-per-click advertising campaigns.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/ppc">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px]">
                    Build your brand presence and engage with your audience through effective social media marketing.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/social-media">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px]">
                    Nurture leads and drive conversions with personalized email campaigns that deliver results.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/email-marketing">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Content Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px]">
                    Engage your audience with high-quality content that builds authority and drives organic growth.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/content-marketing">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="tech-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px]">
                    Gain valuable insights into your marketing performance with comprehensive analytics and reporting.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href="/services/analytics">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Why Choose Us
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                We deliver results-driven digital marketing solutions tailored to your business needs.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="tech-card flex flex-col items-center space-y-4 p-8 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Data-Driven Approach</h3>
                <p className="text-center text-muted-foreground text-lg">
                  We use analytics and insights to optimize your campaigns for maximum ROI.
                </p>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4 p-8 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Industry Expertise</h3>
                <p className="text-center text-muted-foreground text-lg">
                  Our team has years of experience across various industries and platforms.
                </p>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4 p-8 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Dedicated Support</h3>
                <p className="text-center text-muted-foreground text-lg">
                  We provide ongoing support and regular updates to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get in touch with our team to discuss your digital marketing needs and how we can help you achieve
                your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  <Link href="/services">View All Services</Link>
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

