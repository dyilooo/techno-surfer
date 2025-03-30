"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, TrendingUp } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  plan: string
  message: string
  budget: string
  contactPreference: string
}

export default function ContactPage() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const planParam = searchParams.get("plan")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceParam || "",
    plan: planParam || "",
    message: "",
    budget: "",
    contactPreference: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      plan: "",
      message: "",
      budget: "",
      contactPreference: "email",
    })
  }

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
                  Get in Touch
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to boost your online presence? Fill out the form below and our team will get back to you
                  shortly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Contact Information</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seo">SEO Optimization</SelectItem>
                            <SelectItem value="ppc">PPC Advertising</SelectItem>
                            <SelectItem value="social-media">Social Media Marketing</SelectItem>
                            <SelectItem value="email-marketing">Email Marketing</SelectItem>
                            <SelectItem value="content-marketing">Content Marketing</SelectItem>
                            <SelectItem value="analytics">Analytics & Reporting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                            <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5000+">$5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan">Pricing Plan</Label>
                      <Select value={formData.plan} onValueChange={(value) => handleSelectChange("plan", value)}>
                        <SelectTrigger id="plan">
                          <SelectValue placeholder="Select a plan (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Starter ($499/mo)</SelectItem>
                          <SelectItem value="professional">Professional ($999/mo)</SelectItem>
                          <SelectItem value="enterprise">Enterprise ($1,999/mo)</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project and requirements..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup
                        defaultValue="email"
                        value={formData.contactPreference}
                        onValueChange={(value) => handleSelectChange("contactPreference", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label htmlFor="phone-contact">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card className="tech-card">
                  <CardHeader>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly through these channels.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">founder@technosurfers.com</p>
                        <p className="text-sm text-muted-foreground">support@technosurfers.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="tech-card">
                  <CardHeader>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Why Choose DigiMarkPro?</CardTitle>
                    <CardDescription>We're committed to helping your business succeed online.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team of digital marketing experts has years of experience across various industries.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Results-Driven</h3>
                      <p className="text-sm text-muted-foreground">
                        We focus on delivering measurable results that impact your bottom line.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Transparent Reporting</h3>
                      <p className="text-sm text-muted-foreground">
                        Regular reports and analytics to keep you informed about your campaign performance.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Dedicated Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized attention and support throughout your digital marketing journey.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

