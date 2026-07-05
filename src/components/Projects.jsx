import { ArrowUpRight} from "lucide-react";

// Maybe shorter descriptions !!!
const PROJECTS = [
    { name: "Portfolio Website",
        year: "2026",
        tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
        description:
        "This site. Designed and built from scratch using React and Tailwind CSS with a custom dark theme, responsive layout, and automatic CI/CD deployment via Vercel.",
        href: "https://github.com/YOUR_USERNAME/portfolio", // ← заміни
        live: "https://portfolio-bay-three-80.vercel.app/",         
    },

    { name: "Remote-Controlled Cannon",
        year: "2024",
        tags: ["Python", "Raspberry Pi", "Hardware", "Networking"],
        description:
        "Hardware + software project: a Raspberry Pi-powered cannon controlled over a local network via laptop. Supports full directional movement (up/down/left/right) and remote firing — all through a custom Python control interface.",
        href: "",
        live: "",
    },
     
    { name: "Threes Game Clone",
        year: "2024",
        tags: ["Java", "OOP", "Game Logic"],
        description:
        "Full implementation of the Threes puzzle game in Java. Covers tile-merging logic, score tracking, and win/loss detection — built to practice object-oriented design patterns.",
        href: "",
        live: "",
    },
        
    { name: "Pixel Game — Hackathon",
        year: "2025",
        tags: ["JavaScript", "Canvas API", "24-hour build"],
        description:
        "Built at Carleton University's women-in-tech hackathon in a team of 3. A pixel-art browser game written in JavaScript — a language none of us had used before. Learned the language and shipped a working game in one day.",
        href: "", // додай посилання якщо є
        live: "",
    },
];

function Projects() { 
    return (
        <section id='projects' className=' pt-24 pb-24 px-6 max-w-5xl m-auto'>
            <div className="flex justify-between items-baseline mb-12">
                <h2 className="font-display text-4xl text-foreground italic font-semibold">Projects</h2>
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                {PROJECTS.length} projects
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border">
                {PROJECTS.map((project) => {
                    const hasLink = Boolean(project.href || project.live);
                    const linkHref = project.live || project.href;
                    const Wrapper = hasLink ? 'a' : 'div';
                    const wrapperProps = hasLink ?
                        {href: linkHref, target: "_blank", rel: "noopener noreferrer" }
                        : {};
                    return (
                        <Wrapper
                            key={project.name} 
                            {...wrapperProps}
                            className='group bg-background border-2 border-background p-8 hover:bg-card hover:border-purple-300 transition-colors'>
                            
                            {/*Year + arrow */}
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono tracking-widest uppercase text-primary">{project.year }</span>
                                {hasLink &&
                                    (<ArrowUpRight
                                        size={16}
                                        className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 "
                                    />)}
                            </div>

                            {/*Name*/}
                            <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors text-foreground">
                                {project.name}
                            </h3>

                            {/*Description*/}
                            <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/*Tags*/}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                    key={tag}
                                    className="font-mono text-sm px-2 py-1 border border-border text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                        </Wrapper>
                    );
                    
                })
                }

            </div>

            {/* Future Projects*/}
            <p className="mt-8 font-mono text-muted-foreground text-center tracking-wider">
                COMING SOON — Smart Mirror (Raspberry Pi) · Job Application Tracker (Full-Stack)
            </p>
        </section>
    );
}

export default Projects;