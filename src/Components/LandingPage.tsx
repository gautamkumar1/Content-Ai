import PricingPage from "@/app/pricing/page"
import FeaturesSection from "@/app/features/page"
import { HeroScrollDemo } from "./DashboardImage"
import { Button } from "./ui/button"
import Link from "next/link";
import { MarqueeDemo } from "./Testimonials"
import { AccordionDemo } from "./Faq"

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gray-500">Create Engaging </span>
          <br />
          Social Media Content with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
          Boost your social media presence with our AI-powered content creation tool. Save time and increase engagement.
        </p>

        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <Link href={"/generate"}>
              <Button variant="outline" size="lg" className="w-40 h-10 border-transparent text-white text-sm">
                Start Creating
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant="outline" size="lg" className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-gray-400 mt-2">Trusted by 27,000+ creators</p>

        {/* Dashboard Section Image */}
        <div>
          <HeroScrollDemo />
        </div>

        {/* FeaturesSection */}
        <div>
          <FeaturesSection />
        </div>
        {/* PricingPage */}
        <div>
          <PricingPage />
        </div>
        {/* Testimonials */}
        <div>
          <MarqueeDemo />
        </div>
        {/* FAQ */}
        <div className="min-h-screen bg-black py-20">
          <div className="container mx-auto px-4">
            {/* FAQ Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 mb-4">
                FAQ
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Frequently Asked Questions about ContentTura AI
              </p>
            </div>

            {/* FAQ Accordion Container */}
            <div className="max-w-3xl mx-auto backdrop-blur-sm bg-blue-950/10 rounded-2xl p-6 md:p-8 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <AccordionDemo />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
