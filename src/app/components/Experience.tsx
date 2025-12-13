'use client'
import React, { useState } from "react";

type ExperienceCategoryKey =
  | "kleanfingers"
  | "easycart"
  | "totallytoyo"
  | "toyoisafoodie"
  | "hairbyfae"
  | "mide";

interface ExperienceCategory {
  key: ExperienceCategoryKey;
  label: string;
  description: string;
}

export default function Experience() {
  const [active, setActive] =
    useState<ExperienceCategoryKey>("kleanfingers");

  const experienceCategories: ExperienceCategory[] = [
    {
      key: "kleanfingers",
      label: "kleanfingers",
      description:
        "Kleanfingers Cleaning Services - Glasgow, Scotland (Aug – Oct, 2025)"
    },
    {
      key: "easycart",
      label: "easycart",
      description:
        "EasyCart Cleaning Services - Edinburgh, Scotland (Apr – Jul, 2025)"
    },
    {
      key: "totallytoyo",
      label: "totallytoyo",
      description:
        "TotallyToyo (Lifestyle, Travel & Everyday Content) – TikTok (Jun – Sep, 2025)"
    },
    {
      key: "toyoisafoodie",
      label: "toyoisafoodie",
      description:
        "Toyosiafoodie – TikTok Food Page (Jul – Oct, 2025)"
    },
    {
      key: "hairbyfae",
      label: "HairByFae",
      description:
        "HairByFae – UK-based Hairstylist (Jul 2025 – Present)"
    },
    {
      key: "mide",
      label: "the.mide.wenceslaus",
      description:
        "the.mide.wenceslaus – Travel Content Page (Mar 2025 – Present)"
    }
  ];

  const experienceItems: Record<ExperienceCategoryKey, string[]> = {
    kleanfingers: [
      "Content Creator & Social Media Manager",
      "Built the brand’s online presence from scratch across Instagram & Facebook",
      "Created educational, relatable, and service-focused content",
      "Repurposed long-form blogs into engaging carousels and reels",
      "Optimized bio, page identity & brand positioning",
      "Strengthened awareness within the local niche"
    ],
    easycart: [
      "Assistant Social Media Manager",
      "Edited reels and short-form video content",
      "Designed branded flyers, carousels & promotional materials",
      "Maintained page consistency and cohesive visual branding",
      "Wrote clear, service-driven captions"
    ],
    totallytoyo: [
      "Content Editor, Scripting & Series Lead",
      "Planned, structured & executed a 13-part Mauritius travel series",
      "Edited narrative-driven short-form videos to boost retention",
      "Crafted story scripts and improved storytelling clarity",
      "Organized content flow for consistent, engaging posting"
    ],
    toyoisafoodie: [
      "Content Planner, Social Media Manager & Video Editor",
      "Structured and planned food-inspired content",
      "Edited short-form videos using hooks and optimized pacing",
      "Supported page visibility during the collaboration"
    ],
    hairbyfae: [
      "Social Media Manager & Short-Form Video Editor",
      "Created & edited IG/TikTok content showcasing transformations",
      "Crafted captions and optimized posting flow",
      "Helped boost engagement and attract new clients"
    ],
    mide: [
      "Social Media Manager & Video Editor",
      "Edited reels, carousels & detailed captions",
      "Maintained a cohesive travel aesthetic",
      "Supported consistent storytelling & page flow"
    ]
  };

  const activeCategory = experienceCategories.find(
    (cat) => cat.key === active
  );

  return (
    <section id="job-experience">

   
    <div
      className="w-full bg-[#d9e4ec] p-6 md:p-12"
      style={{ fontFamily: "'Red Rose', cursive" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-6">
          <h1 className="font-semibold text-2xl md:text-4xl text-center">
            JOB EXPERIENCES
          </h1>

          {/* PILLS */}
          <ul
            className="
              flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide py-2
            "
          >
            {experienceCategories.map((cat) => (
              <li
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`
                  px-6 py-3
                  rounded-full
                  text-sm
                  text-center
                  cursor-pointer
                  transition
                  ${
                    active === cat.key
                      ? "bg-[#385e72] text-black font-semibold"
                      : "bg-[#6aabd2] text-gray-700 font-light"
                  }
                `}
              >
                {cat.label}
              </li>
            ))}
          </ul>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base font-light max-w-2xl">
            {activeCategory?.description}
          </p>

          {/* LIST */}
          <ul
            className="space-y-1 text-sm md:text-base"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              paddingLeft: "1.25rem"
            }}
          >
            {experienceItems[active].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}
