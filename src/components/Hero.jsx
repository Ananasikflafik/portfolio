import { ArrowUpRight, ChevronDown, } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const stats = [
    { value: "10.0", label: "CGPA" },
    { value: "4", label: "Projects" },
    { value: "2", label: "Year of study" },
    { value: "3", label: "Programming languages" }, 
];

const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/Ananasikflafik" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anastasiia-kozak---" },
    { icon: FaEnvelope, label: "Email", href: "mailto:akozak316@gmail.com" },
];

function Hero() {
    return (
        <section id='hero' className='pt-32 pb-24 px-6 max-w-5xl m-auto'>
            <div className='grid md:grid-cols-[1fr_auto] gap-12 items-end'>
                <div>
                    <p className='font-mono uppercase text-primary mb-6 text-base tracking-normal'>
                        Available for work · Ottawa, Canada
                    </p>
                    <h1 className='font-display font-medium text-foreground text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] tracking-tight mb-8'>
                        Anastasiia
                        <br />
                        Kozak
                    </h1>
                    <p className='text-lg text-muted-foreground max-w-xl leading-relaxed'>
                        CS student at the University of Ottawa building things at the intersection
                        of software and hardware — from web apps to Raspberry Pi-powered devices.
                        I like understanding how systems work from the ground up.
                    </p>
                </div>

                <div className='flex md:flex-col gap-4 pb-1'>
                    {socials.map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='group flex items-center gap-2 font-mono text-base tracking-widest text-muted-foreground uppercase
                            hover:text-foreground transition-colors'>

                            <Icon size={14} />
                            <span className='hidden md:inline'>{label}</span>
                            <ArrowUpRight
                                size={10}
                            className='opacity-0 group-hover:opacity-100 transition-opacity'/>
            
                        </a>
                    ))
                    }
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 justify-center md:grid-cols-4 gap-8">
                {stats.map(({value, label}) => (
                    <div key={label}>
                        <div className='font-medium font-display text-3xl '>{value}</div>
                        <div className='font-mono text-base tracking-widest uppercase text-muted-foreground mt-1'>{ label}</div>
                        </div>
                    ))}
            </div>
            <div className="mt-16 flex justify-center">
                <ChevronDown size={18} className="text-muted-foreground animate-bounce" />
            </div>

            

       </section>
    );
}

export default Hero;