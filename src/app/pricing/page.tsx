"use client";

import { CheckIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

const pricingPlans = [
  {
    name: "Basic",
    price: "9",
    priceId: "price_1QBgQZB0lp2wkbPQR1L9a3jL",
    features: [
      "100 AI-generated posts per month",
      "Twitter thread generation",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "29",
    priceId: "price_1QBgS6B0lp2wkbPQymEl7YGG",
    features: [
      "500 AI-generated posts per month",
      "Twitter, Instagram, and LinkedIn content",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceId: null,
    features: [
      "Unlimited AI-generated posts",
      "All social media platforms",
      "Custom AI model training",
      "Dedicated account manager",
    ],
  },
];

export default function PricingPage() {
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (priceId: string) => {
    if (!isSignedIn) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          userId: user?.id,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-gray-800 flex flex-col
                         transition-all duration-300 ease-in-out
                         hover:border-blue-500/30 hover:bg-blue-950/10
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]
                         hover:transform hover:scale-105
                         backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4 text-white
                           group-hover:text-blue-200 transition-colors">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold mb-6 text-white
                          group-hover:text-blue-100 transition-colors">
                ${plan.price}
                <span className="text-lg font-normal text-gray-400
                               group-hover:text-blue-300/60">
                  /month
                </span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center mb-3 text-gray-300
                             group-hover:text-blue-200/90 transition-colors"
                  >
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500
                                      group-hover:text-blue-400 transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => plan.priceId && handleSubscribe(plan.priceId)}
                disabled={isLoading || !plan.priceId}
                className="w-full bg-white text-black 
                         transition-all duration-300
                         hover:bg-blue-100 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}