"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Clock, CheckSquare, BarChart, Shield, Zap, Dumbbell } from "lucide-react"
import Image from "next/image"
import { useFadeIn } from "@/hooks/useFadeIn"

export default function SaasLanding() {
  const heroRef = useFadeIn()
  const featuresRef = useFadeIn()
  const overviewRef = useFadeIn()
  const pricingRef = useFadeIn()
  const faqRef = useFadeIn()
  const ctaRef = useFadeIn()

  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>{`
  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1.2s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
  }

  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`}</style>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BCwhite-AQ6yvosAwi20cyHRjgeYLTwjJlVroP.png"
            alt="BUFFCOMPLY"
            width={240}
            height={48}
            className="h-12 w-auto"
          />
          <span className="sr-only">BUFFCOMPLY</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#product-features">
            Product features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#form">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section ref={heroRef} className="fade-in-section w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Save time, take control
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Stay compliant. Monitor your affiliates with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-white hover:bg-primary/90 font-semibold px-6 py-3 rounded-full transition-colors duration-300">
                  Get in touch
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-full transition-colors duration-300"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          ref={featuresRef}
          className="fade-in-section w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What you get?</h2>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 mb-16">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">No Risks</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto">
                  Monitor affiliate content in real-time to ensure adherence to regulatory and brand guidelines.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Your time back</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto">
                  Automate content. Stop wasting hours manually checking websites, focus on growth and strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Network growth</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto">
                  Discover new affiliates and traffic sources to expand your reach.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Dumbbell className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Controll</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto">
                  Make Data-Driven Decisions, no more assumptions
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="product-features"
          ref={overviewRef}
          className="fade-in-section w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Product Features</h2>
            <div className="mt-16">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <li className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Google Search Scrape Intelligence</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Analyze search results and websites, to ensure proper brand usage, detect compliance risks, and
                        identify new traffic opportunities.
                      </p>
                      <ul className="grid gap-3">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Deep web search analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Brand compliance monitoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Traffic source discovery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-2xl group-hover:border-primary/20 transition-colors" />
                </li>
                <li className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Website Audit</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Automated website scraping and internal pages and link analysis to ensure content accuracy,
                        detect outdated offers, and monitor brand compliance
                      </p>
                      <ul className="grid gap-3">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Automated content scanning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Outdated offer detection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>Internal link analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-2xl group-hover:border-primary/20 transition-colors" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          ref={pricingRef}
          className="fade-in-section w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              One Product, One Price
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">BUFFCOMPLY</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">Everything you need for compliance</p>
                <p className="text-4xl font-bold text-center mb-6">
                  $399<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited searches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Compliance feature</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Google Search feature</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Automatic alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                    <span>Support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" ref={faqRef} className="fade-in-section w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does Buffcomply's Google Search Scraping work?</AccordionTrigger>
                <AccordionContent>
                  Buffcomply scans Google search results based on your selected keywords or URLs, analyzing websites to
                  detect brand mentions, compliance risks, and potential new traffic sources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of compliance issues can Buffcomply detect?</AccordionTrigger>
                <AccordionContent>
                  It identifies unauthorized brand usage, outdated promotions, missing disclaimers, and other violations
                  to ensure regulatory compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I track specific websites or just Google results?</AccordionTrigger>
                <AccordionContent>
                  You can do both! Buffcomply allows you to track Google search results or scan specific websites and
                  their internal pages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How often does Buffcomply update the data?</AccordionTrigger>
                <AccordionContent>
                  Buffcomply runs scans based on your settings—whether daily, weekly, or on demand—so you always have
                  the latest insights.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="form" ref={ctaRef} className="fade-in-section w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Want to retake control?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Contact our team and start saving time now
                </p>
              </div>
              <form className="w-full max-w-md space-y-4">
                <Input type="text" placeholder="Name" aria-label="Name" required />
                <Input type="text" placeholder="Company" aria-label="Company" required />
                <Input type="email" placeholder="Email" aria-label="Email" required />
                <Button type="submit" className="w-full">
                  Send
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 BUFFCOMPLY. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

