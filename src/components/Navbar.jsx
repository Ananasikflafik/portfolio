function Navbar() {
    return (
        <nav className="max-w-5xl h-14 mx-auto px-6 flex items-center justify-between bg-amber-400">
            <div>
                <span className="font-mono text-lg text-primary tracking-widest uppercase cursor-pointer"> AK</span>
            </div>
            <div className= "hidden md:flex items-center gap-8">
             <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Skills</a>
                <a href="">Contacts</a>
            </div>
        </nav>
    );
}
export default Navbar;