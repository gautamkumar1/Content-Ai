import {Star} from "lucide-react"
import Image from "next/image"
import PricingPage from "@/app/pricing/page"

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
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=40&width=40`}
                alt={`Creator ${i + 1}`}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          ))}
        </div>
        <p className="text-gray-400 mt-2">Trusted by 27,000+ creators</p>

        <div>
          <PricingPage/>
        </div>
      </main>

    </div>
  )
}