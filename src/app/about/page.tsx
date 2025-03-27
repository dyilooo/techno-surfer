import Link from "next/link"
import { TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
                  About DigiMarkPro
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're a team of digital marketing experts dedicated to helping businesses grow online.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2015, DigiMarkPro began with a simple mission: to help businesses navigate the complex
                  world of digital marketing and achieve measurable results. What started as a small team of passionate
                  marketers has grown into a full-service digital marketing agency serving clients across various
                  industries.
                </p>
                <p className="text-muted-foreground">
                  Our journey has been defined by our commitment to staying ahead of the ever-evolving digital
                  landscape, embracing new technologies, and developing innovative strategies that drive real business
                  growth for our clients.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped hundreds of businesses transform their online presence and achieve
                  their marketing goals. Our team of experts brings together diverse skills and experiences, united by a
                  shared passion for digital excellence and client success.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
                  <img
                    alt="DigiMarkPro Team"
                    className="rounded-lg object-cover aspect-video overflow-hidden relative"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our work and relationships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="tech-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      We focus on delivering measurable results that impact your bottom line. Your success is our
                      success.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="tech-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Transparency</h3>
                    <p className="text-muted-foreground">
                      We believe in open communication and complete transparency in our strategies, reporting, and
                      pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="tech-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Innovation</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of the curve by embracing new technologies and approaches to deliver cutting-edge
                      digital marketing solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the experts behind DigiMarkPro's success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">SEO Director</p>
                </div>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Social Media Strategist</p>
                </div>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">David Kim</h3>
                  <p className="text-sm text-muted-foreground">PPC Specialist</p>
                </div>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Jessica Patel</h3>
                  <p className="text-sm text-muted-foreground">Content Marketing Manager</p>
                </div>
              </div>
              <div className="tech-card flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover h-40 w-40 relative"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Robert Wilson</h3>
                  <p className="text-sm text-muted-foreground">Analytics Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can help your business grow with our digital marketing expertise.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/services">Explore Our Services</Link>
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

