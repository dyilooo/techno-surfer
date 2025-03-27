import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Mail, MessageSquare, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
                  Our Digital Marketing Services
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive digital marketing solutions tailored to help your business grow online.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SEO Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Improve your website's visibility in search engines and drive organic traffic with our expert SEO
                      services.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Keyword Research & Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>On-Page SEO Optimization</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Technical SEO Audits</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Link Building & Authority Building</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Local SEO Optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=seo">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">PPC Advertising</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Drive targeted traffic and generate leads with our strategic pay-per-click advertising campaigns.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Google Ads Management</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Social Media Advertising</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Display & Remarketing Campaigns</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Ad Copy & Creative Development</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Conversion Rate Optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=ppc">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Social Media Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Build your brand presence and engage with your audience through effective social media marketing.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Social Media Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Content Creation & Curation</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Community Management</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Influencer Marketing</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Social Media Analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=social-media">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Email Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Nurture leads and drive conversions with personalized email campaigns that deliver results.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Email Campaign Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Email Template Design</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Automated Email Sequences</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>List Management & Segmentation</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Performance Analysis & Optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=email-marketing">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Content Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Engage your audience with high-quality content that builds authority and drives organic growth.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Content Strategy Development</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Blog Writing & Management</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Copywriting Services</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Infographics & Visual Content</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Content Distribution</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=content-marketing">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="tech-card flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Analytics & Reporting</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-4">
                      Gain valuable insights into your marketing performance with comprehensive analytics and reporting.
                    </CardDescription>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Google Analytics Setup & Management</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Custom Dashboard Creation</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Conversion Tracking</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Regular Performance Reports</span>
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>Data-Driven Recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact?service=analytics">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Ready to Boost Your Online Presence?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your digital marketing needs and how we can help you achieve your goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/pricing">View Pricing</Link>
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

