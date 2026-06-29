import { Languages } from "lucide-react";

const SKILLS = [
    {category: "Programming Languages", items: ["Python", "Java", "JavaScript", "C (intro)",]},
    {category: "Hardware & Embedded", items: ["Raspberry Pi", "Ardurino", "Digital Circuits", "Raspberry Pi OS",]},
    {category: "Web & Tools", items: ["React", "Tailwind CSS", "HTML/CSS", "Git", "Github", "Vite", "VS Code"]},
    {category: "AI Tools", items: ["Claude", "ChatGPT", "GitHub Copilot",]},
    {category: "Concepts", items: ["OOP", "Data Structures (intro)", "Digital System", "Discrete Math", "Linear Algebra", "Calculus",]},
];
const LANGUAGES = [
    { lang: "Ukrainian", level: "Native" },
    { lang: "English", level: "Fluent" },
    { lang: "Russian", level: "Fluent" },
    {lang: "Polish", level: "Learning"},
];

function Skills() { 
    return (
        <section id='skills' className=' pt-24 pb-24 px-6 max-w-5xl m-auto'>
            <div className="flex justify-between items-baseline mb-12">
                <h2 className="font-display text-4xl text-foreground italic font-semibold">Skills</h2>
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                Technical
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {SKILLS.map((skill) => (
                    <div 
                        key={skill.category}
                        className="p-6 border-border border transition-colors hover:border-purple-300">
                        <h3 className="font-mono tracking-[0.2em] font-medium text-sm mb-5 uppercase text-primary">
                            {skill.category}
                        </h3>
                        <div className="flex flex-wrap gap-2" >
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className="font-mono text-sm bg-secondary px-3 py-1.5 hover:bg-primary hover:text-background transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                 ))}

            </div>

            <div className="p-6 border-border border hover:border-purple-300 transition-colors mt-6">
                <h3 className="font-mono tracking-[0.2em] font-medium text-sm mb-5 uppercase text-primary">
                            Languages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    {LANGUAGES.map(({ lang, level }) => (
                        <div key={lang}>
                        <div
                            className="text-sm font-medium text-foreground"> 
                            {lang}
                        </div>
                        <div className="font-mono text-xs text-muted-foreground mt-1">
                                {level}
                            </div>
                        </div>    
                        ))}
                </div>
            </div>

        </section>
    );
}

export default Skills;