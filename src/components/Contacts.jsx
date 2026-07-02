import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';

const socials = [
    { icon: FaGithub, label: "github.com/Ananasikflafik", href: "https://github.com/Ananasikflafik" },
    { icon: FaLinkedin, label: "www.linkedin.com/in/anastasiia-kozak---", href: "https:www.linkedin.com/in/anastasiia-kozak---" },
    { icon: FaEnvelope, label: "akozak316@gmail.com", href: "mailto:akozak316@gmail.com" },
];

function Contacts() {
    return (
        <section id="contacts" className = "pt-12 pb-24 px-6 max-w-5xl m-auto">
            <div className="py-18 border-y border-border grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
                        Get in touch
                    </p>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight mb-6">
                        Open to
                        <br />
                        <span className="">opportunities.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-sm ">
                        Looking for a Co-op placement for Summer 2027. Also open to
                        interesting projects, collaborations, or just a good conversation
                        about tech.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {socials.map(({ icon: Icon, label, href}) => (
                        <a  key={label}
                            href={href}
                            target='_blank'
                            rel="noopener noreferrer"
                            className="group p-4 flex justify-between border border-border hover:bg-card hover:border-primary transition-all">
                            <div className="flex items-center gap-4">
                                <Icon
                                    size={16}
                                className="text-muted-foreground group-hover:text-primary transition-colors"/>
                                <span
                                className="text-sm font-mono">
                                    {label}</span>
                            </div>
                            <ArrowUpRight
                                size={16}
                            className="text-muted-foreground group-hover:text-primary"/>
                        </a>
                    )) }
                </div>
            </div>

            <div className="pt-8 flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                © 2026 Anastasiia Kozak
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                Built with React · Ottawa
                </span>
            </div>
        </section>
    );
}

export default Contacts;