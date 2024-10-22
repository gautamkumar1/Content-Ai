import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
    {
      name: "Gautam",
      username: "@gautam",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/gautam",
    },
    {
      name: "Priya",
      username: "@priya",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/priya",
    },
    {
      name: "Amit",
      username: "@amit",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/amit",
    },
    {
      name: "Neha",
      username: "@neha",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/neha",
    },
    {
      name: "Suresh",
      username: "@suresh",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/suresh",
    },
    {
      name: "Anjali",
      username: "@anjali",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/anjali",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-blue-500/20 bg-blue-950/10 hover:bg-blue-900/20",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img 
          className="rounded-full ring-2 ring-blue-500/20" 
          width="32" 
          height="32" 
          alt="" 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-blue-100">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-blue-300/60">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-blue-200/80">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-black">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}