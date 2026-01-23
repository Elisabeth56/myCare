"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <section className="pt-36 pb-20 relative z-0">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h4 className="text-lg font-medium text-[hsl(var(--foreground))] mb-2">MyCare</h4>
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-5">
            Modern Hospital Management,{" "}
            <span className="relative inline-block">
              Simplified
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[hsl(var(--primary))] dark:bg-[hsl(var(--primary))]"></span>
            </span>
          </h1>
          <p className="text-[hsl(var(--foreground))] mb-6">
            Run clinical and administrative operations from one unified platform — built for clarity, speed, and scale.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 flex-wrap">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-2.5 rounded-full border border-[hsl(var(--stroke))] focus:border-[hsl(var(--primary))] bg-card text-card-foreground focus:border-primary focus:outline-hidden"
            />
            <button
              className="px-8 py-2.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--white))] hover:bg-[hsl(var(--primaryho))] transition-colors"
            >
              Get Started
            </button>
          </form>

          <p className="mt-3 text-[hsl(var(--foreground))]">Try for free. No credit card required.</p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative aspect-[700/444] w-full">
            <Image
              src="/images/hero/hero-light.svg"
              alt="Hero"
              fill
              className="block dark:hidden"
            />
            <Image
              src="/images/hero/hero-dark.svg"
              alt="Hero"
              fill
              className="hidden dark:block"
            />
          </div>

          {/* Decorative shapes */}
          <Image
            src="/images/shape/shape-01.png"
            alt="shape"
            width={46}
            height={246}
            className="absolute -left-12 top-0 z-10"
          />
          <Image
            src="/images/shape/shape-02.svg"
            alt="shape"
            width={37}
            height={37}
            className="absolute bottom-0 right-0 z-10"
          />
          <Image
            src="/images/shape/shape-03.svg"
            alt="shape"
            width={22}
            height={22}
            className="absolute -right-6 bottom-0 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
