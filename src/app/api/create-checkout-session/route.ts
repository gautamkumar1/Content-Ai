import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-09-30.acacia",
});

// POST request handler for creating a checkout session
export async function POST(req: Request) {
  try {
    // Destructuring priceId and userId from the request JSON
    const { priceId, userId } = await req.json();

    // Check if priceId or userId is missing and return an error response
    if (!priceId || !userId) {
      return NextResponse.json(
        { error: "Missing priceId or userId" },
        { status: 400 }
      );
    }

    // Create a new Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/generate?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      client_reference_id: userId,
    });

    // Return session ID as JSON response
    return NextResponse.json({ sessionId: session.id });

  } catch (error: unknown) { // Changed `error: any` to `error: unknown` to avoid `any` type linting issue

    // Narrowing the type of `error` to handle it more safely
    if (error instanceof Error) {
      console.error("Error creating checkout session:", error);

      return NextResponse.json(
        { error: "Error creating checkout session", details: error.message },
        { status: 500 }
      );
    }

    // Fallback error response if it's not an instance of Error
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
