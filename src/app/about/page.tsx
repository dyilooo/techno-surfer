import Link from "next/link"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-16">
        {/* Founder Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Founder
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Ron Smith
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Founder & Consultant | Technosurfers.com
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Ron Smith is a business strategist, marketing consultant, and founder of Technosurfers.com. 
                    With over 15 years of experience in sales, real estate, and small business coaching, he's helped 
                    clients across the U.S. and internationally achieve bold, often "impossible" goals.
                  </p>
                  <p>
                    Known for building powerful systems from scratch and creating fast, lasting results, Ron blends 
                    strategic thinking with a hands-on, relationship-first approach. He currently leads mastermind 
                    groups, workshops, and business development initiatives through both Technosurfers and the World 
                    Trade Center Tacoma.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary/20">
                  <Image
                    src="/images/founder.png"
                    alt="Ron Smith - Founder of TechnoSurfer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Building Digital Success Stories
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're more than just a digital marketing agency - we're your partner in growth and success.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 items-center mt-12">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  Founded in 2015, TechnoSurfer began with a simple mission: to help businesses navigate the complex
                  world of digital marketing and achieve measurable results. What started as a small team of passionate
                  marketers has grown into a full-service digital marketing agency serving clients across various
                  industries.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our journey has been defined by our commitment to staying ahead of the ever-evolving digital
                  landscape, embracing new technologies, and developing innovative strategies that drive real business
                  growth for our clients.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, we're proud to have helped hundreds of businesses transform their online presence and achieve
                  their marketing goals. Our team of experts brings together diverse skills and experiences, united by a
                  shared passion for digital excellence and client success.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    alt="TechnoSurfer Team"
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

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Ready to Work With Us?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Let's discuss how we can help your business grow with our digital marketing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
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

