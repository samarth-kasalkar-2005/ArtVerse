"use client";

import {
  Crown,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "Upload artworks",
      "Basic analytics",
      "Community access",
    ],
  },

  {
    name: "Pro Artist",
    price: "$9/mo",
    features: [
      "Advanced analytics",
      "Premium badge",
      "Unlimited uploads",
      "Priority exposure",
    ],
  },

  {
    name: "Studio",
    price: "$29/mo",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Marketplace promotion",
      "Early access features",
    ],
  },
];

export default function PremiumPlans() {

  const { theme } = useTheme();

  return (
    <div>

      {/* HERO */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-3 mb-6">

          <Crown className="text-yellow-400" size={40} />

          <h1
            className={`text-4xl md:text-6xl font-bold
            ${
              theme === "dark"
                ? "text-white"
                : "text-black"
            }`}
          >
            ArtVerse Premium
          </h1>

        </div>

        <p
          className={`text-xl max-w-3xl mx-auto
          ${
            theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Unlock advanced creator tools, premium exposure,
          exclusive features, and powerful analytics.
        </p>

      </div>

      {/* PLANS */}
      <div className="grid lg:grid-cols-3 gap-8">

        {plans.map((plan, index) => (

          <div
            key={plan.name}
            className={`rounded-3xl p-8 border transition hover:scale-[1.03] shadow-xl
            ${
              index === 1
                ? "bg-gradient-to-br from-purple-600 to-pink-600 border-purple-400"
                : theme === "dark"
                ? "bg-zinc-900 border-zinc-800 text-white"
                : "bg-white border-gray-200 text-black"
            }`}
          >

            <div className="flex items-center gap-3 mb-6">

              {index === 1 ? (
                <Sparkles className="text-yellow-300" />
              ) : (
                <ShieldCheck className="text-purple-400" />
              )}

              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

            </div>

            <h3 className="text-3xl sm:text-5xl font-bold mb-8">
              {plan.price}
            </h3>

            <div className="flex flex-col gap-4 mb-10">

              {plan.features.map((feature) => (

                <div
                  key={feature}
                  className={`flex items-center gap-3
                  ${
                    index === 1
                      ? "text-white"
                      : theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >

                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>

                  {feature}

                </div>

              ))}

            </div>

            <button
              className={`w-full py-4 rounded-2xl font-semibold transition
              ${
                index === 1
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Get Started
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}