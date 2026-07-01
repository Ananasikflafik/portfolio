import { useState } from "react";
import { ChevronDown, MapPin } from 'lucide-react';

const EDUCATION = [
  {
    institution: "University of Ottawa",
    degree: "Honours BSc in Computer Science (Co-op)",
    period: "2025 — 2029",
    location: "Ottawa, ON",
    gpa: "10.0 / 10.0 CGPA",
    highlights: [
      "Dean's Honour List — Fall 2025 & Winter 2026 (A+ in every course both semesters)",
      "Co-op stream — structured industry placements built into the degree",
      "Completed: Calculus I & II, Linear Algebra, Discrete Mathematics for Computing, Digital Systems I, Intro to Computing I & II, Logic I, Technical Report Writing",
      "Upcoming (Fall 2026): Data Structures & Algorithms, Computer Architecture, Advanced C++, Software Engineering",
      "Upcoming (Winter 2027): Databases I, Programming Paradigms, Software Construction",
    ],
  },
];

const ACTIVITIES = [
  {
    name: "Women-in-Tech Hackathon",
    org: "Carleton University",
    period: "2025",
    description:
      "Built a pixel-art browser game in JavaScript with a team of 3 — none of us had used the language before. Designed, coded, and shipped a working game within 24 hours.",
  },
  {
    name: "Computer Science Club",
    org: "High School",
    period: "2023 — 2025",
    description:
      "Regular participation in coding challenges, project building, and peer knowledge-sharing sessions.",
  },
  {
    name: "International Friendship Club",
    org: "High School",
    period: "2023 — 2025",
    description:
      "Organized cross-cultural events and supported international students — reflects the multilingual background and collaborative mindset carried into university.",
  },
];




function Education() { 
    const [expendedEdu, setExpandedEdu] = useState(0);
    const [expandedAct, setExpandedAct] = useState(null);

    return (
        <section id="education" className="pt-24 pb-24 px-6 max-w-5xl m-auto">
            <div className="flex justify-between items-baseline mb-12">
                <h2 className="font-display text-4xl text-foreground italic font-semibold">Education</h2>
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                2025 - Present
                </span>
            </div>
            <div className="divide-y divide-border mb-24">
                {EDUCATION.map((edu, i) => (
                <div
                key={edu.institution} className="group">
                        <button className="w-full py-7 flex items-start justify-between gap-6 text-left "
                        onClick={() => setExpandedEdu(expendedEdu === i ? null : i)}>
                            <div>
                                <div className="flex-1 grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-baseline">
                                    <span
                                        className="font-display text-2xl font-medium group-hover:text-primary transition-colors">
                                        {edu.institution}</span>
                                    <span className="font-mono text-sm uppercase text-muted-foreground tracking-wider">
                                        {edu.degree}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MapPin
                                    size={12}/>
                                    <span className="text-sm font-mono">
                                        {edu.location}</span>
                                    <span className = "text-sm font-mono">
                                        {edu.period}</span>
                                </div>
                            </div>
                            <ChevronDown
                                size={16}
                                className={`group-hover:text-primary text-muted-foreground mt-1 transition-transform duration-200 ${
                                    expendedEdu === i ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {expendedEdu === i && (
                            <div className = "pb-8 ">
                                <div className="inline-flex items-center gap-4 mb-5">
                                    <span className="font-mono text-xs tracking-wider px-3 py-1 bg-primary text-background font-medium">
                                        {edu.gpa}
                                    </span>
                                    <span className="font-mono text-xs tracking-wider px-3 py-1 border border-primary text-primary">
                                        Dean's Honour List × 2
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {edu.highlights.map((h, index) => (
                                        <li key={index}
                                            className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                                            <span className="text-primary mt-1 shrink-0">—</span>
                                            <span>{h}</span>
                                            </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                </div>
            ))}
            </div>

            <div className="flex justify-between items-baseline mb-12">
                <h2 className="font-display text-4xl text-foreground italic font-semibold">
                    Activities</h2>
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                Extracurricular
                </span>
            </div>

            <div className="divide-y divide-border">
                    {ACTIVITIES.map((act, i) => (
                      <div key={act.name} className="group">
                        <button
                          className="w-full py-7 flex items-start justify-between gap-6 text-left"
                          onClick={() => setExpandedAct(expandedAct === i ? null : i)}
                        >
                          <div className="flex-1 grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-baseline">
                            <div>
                              <span className="text-xl font-medium group-hover:text-primary transition-colors">
                                {act.name}
                              </span>
                              <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground ml-4">
                                {act.org}
                              </span>
                            </div>
                            <span className="font-mono text-sm text-muted-foreground">{act.period}</span>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`group-hover:text-primary text-muted-foreground mt-1 transition-transform duration-200 ${
                              expandedAct === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
            
                        {expandedAct === i && (
                          <div className="pb-8">
                            <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm">
                              {act.description}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

        </section>
    );
}
export default Education;