"use client";
import Image from "next/image";

export default function Upskilling() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">
            Upskilling for the Future
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Enhance communication, reasoning, and technical skills with
            structured learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          <FeatureCard
            title="Interpersonal Skills"
            image="/Interpersonal Skills.jpg"
            items={[
              "Effective Communication",
              "Questioning to Clarify Doubts",
              "Improving Listening Skills",
              "Mock GD & Mock PI",
              "Email & Professional Writing",
              "Emotional Intelligence",
              "7Cs of Communication",
              "Telephone Etiquette",
              "Managerial Communication",
              "Conflict Management",
            ]}
          />

          <FeatureCard
            title="Aptitude"
            image="/Aptitude.jpg"
            items={[
              "Algebra & Number Theory",
              "Arithmetic & Mensuration",
              "Work & Time",
              "Permutations & Combinations",
              "Data Interpretation",
              "Financial Mathematics",
              "Gamification",
              "Logical Reasoning",
              "Probability",
              "Problem Solving",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, image, items }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_26px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
      {/* Full Image Section */}
      <div className="relative w-full h-52">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-7">
        <h3 className="text-xl font-semibold text-secondary mb-5">{title}</h3>

        {/* Two Column List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-700 text-[15px] leading-relaxed">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2 items-start">
              <span className="text-secondary text-lg leading-tight">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
