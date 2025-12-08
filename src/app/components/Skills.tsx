'use client'
import React, { useState } from "react";

type SkillCategoryKey = "professional" | "content" | "social" | "admin" ;

interface SkillCategory {
  key: SkillCategoryKey;
  label: string;
}

export default function Skills() {
  const [active, setActive] = useState<SkillCategoryKey>("professional");

  const skillCategories: SkillCategory[] = [
    { key: "professional", label: "PROFESSIONAL SKILLS" },
    { key: "content", label: "CONTENT AND EDITING SKILLS" },
    { key: "social", label: "SOCIAL MEDIA SKILLS" },
    { key: "admin", label: "ADMINISTRATIVE SKILLS" },
    
  ];

  const skillItems: Record<SkillCategoryKey, string[]> = {
    professional:["Fast learner","Clear communicator","Creative & strategic thinker","Calm under pressure",
    "Consistent output even with limited resources","Ability to transform scattered ideas into structured content",
    "Reliable, proactive, and solution-driven"],
    content: ["Short-form video editing", "Storytelling for attention retention","Series planning & structuring","Hook writing & pacing",
    "Repurposing long-form content into short-form","Creating educational, emotional, or relatable content",
    "Optimizing content for IG & TikTok algorithms"],
    social: ["Page setup & optimization","Brand identity development","Hashtag strategy (platform-appropriate)","Analytics interpretation",
      "Audience engagement & retention strategy","Consistent content flow management"
],
    admin: ["Data entry & organization","Scheduling & planning","Document creation","Attention to detail",
            "Professional communication","Time management & workflow prioritization"
],
    
  };

  return (
    <section id="skills">

    
    <div
      className="w-full bg-amber-100 p-6 md:p-12"
      style={{ fontFamily: "'Red Rose', cursive" }}
    >
      <div className="flex justify-start w-full">
        <div className="w-full md:max-w-2xl flex flex-col gap-4 items-start">
          <h1 className="font-semibold text-2xl md:text-4xl text-center w-full">
            Skills
          </h1>

          <div className="text-left font-light text-base md:text-lg w-full">
            {/* SCROLLABLE FLEX LINKS */}
            <ul className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide py-2">
              {skillCategories.map((cat) => (
                <li
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`cursor-pointer px-4 py-2 rounded-full whitespace-nowrap ${
                    active === cat.key
                      ? "bg-amber-200 text-black font-semibold"
                      : "bg-amber-200 text-gray-700 font-light"
                  }`}
                >
                  {cat.label}
                </li>
              ))}
            </ul>

            {/* CONTENT */}
            <div className="mt-4">
              <ul
    className="space-y-1"
    style={{
      listStyleType: "disc",
      listStylePosition: "outside",
      paddingLeft: "1.25rem" 
    }}
  >
                {skillItems[active].map((item) => (
                  <li key={item} style={{ display: "list-item" }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
