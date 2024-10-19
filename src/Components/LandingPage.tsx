import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ArrowRight, Check, Sparkles, Zap, Repeat, Globe } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Engaging Social Media Content with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost your social media presence with our AI-powered content creation tool. Save time and increase engagement.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>AI-Powered Content Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  Create high-quality, engaging content for multiple social media platforms in seconds.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Repeat className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Multi-Platform Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Seamlessly create content for Facebook, Instagram, Twitter, LinkedIn, and more.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  Automatically optimize your content for better search engine visibility and reach.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Basic", "Pro", "Enterprise"].map((plan) => (
                <Card key={plan} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {plan === "Basic" ? "Free" : plan === "Pro" ? "$29/mo" : "Custom"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {[
                        "100 AI-generated posts/mo",
                        "Basic analytics",
                        "2 social media platforms",
                        ...(plan !== "Basic" ? ["Unlimited AI-generated posts", "Advanced analytics", "All social media platforms"] : []),
                        ...(plan === "Enterprise" ? ["Dedicated support", "Custom integrations"] : []),
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full">{plan === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Social Media Manager",
                  content: "This AI tool has revolutionized our content creation process. We're saving hours each week!",
                },
                {
                  name: "Sarah Lee",
                  role: "Small Business Owner",
                  content: "As a solo entrepreneur, this tool has been a game-changer for maintaining my social media presence.",
                },
                {
                  name: "Mike Chen",
                  role: "Digital Marketing Agency",
                  content: "The AI-generated content is surprisingly good. It's like having an extra team member.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="mb-4">"{testimonial.content}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Social Media?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of creators and businesses using AI to supercharge their social media content.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Content Creator. All rights reserved.</p>
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