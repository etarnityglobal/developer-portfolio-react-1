
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import { PROJECTS, SERVICES, SKILLS, EXPERIENCES } from './constants';

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-premium-blue text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Available for new projects
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] tracking-tight text-slate-900">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue">Ideas</span> Into Digital Reality
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              Senior Developer specializing in <span className="text-brand-pink font-semibold">Web</span>, <span className="text-brand-blue font-semibold">Mobile Apps</span>, and <span className="text-brand-purple font-semibold">Immersive Gaming</span> experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="px-8 py-4 bg-premium-text text-white rounded-2xl font-bold shadow-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 glass border border-gray-200 rounded-2xl font-bold hover:bg-white transition-all transform hover:-translate-y-1">
                Contact Me
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
               <i className="fa-brands fa-react text-3xl"></i>
               <i className="fa-brands fa-node-js text-3xl"></i>
               <i className="fa-brands fa-unity text-3xl"></i>
               <i className="fa-brands fa-swift text-3xl"></i>
               <i className="fa-brands fa-aws text-3xl"></i>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-premium-pink via-premium-blue to-premium-gold rounded-[40px] rotate-6 opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 bg-white border-2 border-slate-100 rounded-[40px] -rotate-3 overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/developer/800/1000" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl float-animation">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <i className="fa-solid fa-check"></i>
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Experience</p>
                      <p className="font-bold">10+ Years</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 reveal-section">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading 
            badge="About Me"
            title="A Creative Mind with an Engineering Heart"
            subtitle="I don't just write code; I design systems that solve complex problems and create meaningful connections between people and technology."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl glass soft-shadow hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-premium-blue text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Vision</h3>
              <p className="text-gray-500 leading-relaxed">Unique aesthetics blended with robust architecture for iconic digital products.</p>
            </div>
            <div className="p-8 rounded-3xl glass soft-shadow hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-premium-pink text-brand-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-terminal"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Prowess</h3>
              <p className="text-gray-500 leading-relaxed">Expertise across full-stack web, native mobile apps, and low-level game optimization.</p>
            </div>
            <div className="p-8 rounded-3xl glass soft-shadow hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-premium-gold text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Focus</h3>
              <p className="text-gray-500 leading-relaxed">Dedicated to speed, accessibility, and high conversion rates for every deliverable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50 reveal-section">
        <div className="container mx-auto">
          <SectionHeading 
            center
            badge="Skills & Tech"
            title="My Technical Toolkit"
            subtitle="Harnessing the power of cutting-edge technologies to build future-proof solutions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center text-2xl">
                  <i className={skill.icon}></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-premium-text">{skill.name}</span>
                    <span className="text-sm font-semibold text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 reveal-section">
        <div className="container mx-auto">
          <SectionHeading 
            center
            badge="Expertise"
            title="Comprehensive Solutions"
            subtitle="Three pillars of modern digital creation, executed with premium quality."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="p-10 rounded-[40px] glass transition-all hover:scale-[1.02] relative group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-2xl mb-8`}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 font-bold text-premium-text group-hover:translate-x-2 transition-transform cursor-pointer">
                  <span>Learn more</span>
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-premium-blue/20 reveal-section">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading 
              badge="Portfolio"
              title="Recent Masterpieces"
              subtitle="A curated selection of high-end projects spanning across web, app, and game design."
            />
            <div className="flex gap-4">
              <button className="px-6 py-2.5 bg-white rounded-full text-sm font-bold shadow-sm">All Work</button>
              <button className="px-6 py-2.5 hover:bg-white rounded-full text-sm font-bold transition-colors">Web</button>
              <button className="px-6 py-2.5 hover:bg-white rounded-full text-sm font-bold transition-colors">Apps</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="w-16 h-16 rounded-full bg-white text-premium-text flex items-center justify-center text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h4>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white border border-gray-100 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-10 py-5 bg-premium-text text-white rounded-2xl font-bold shadow-2xl hover:bg-gray-800 transition-all">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 reveal-section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading 
                badge="Career Timeline"
                title="Professional Experience"
                subtitle="A decade of building excellence and leading innovation in digital development."
              />
              <div className="space-y-12 mt-12">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-slate-100 last:border-0 pb-12 last:pb-0">
                    <div className="absolute top-0 left-[-11px] w-5 h-5 rounded-full bg-brand-blue border-4 border-white shadow-sm"></div>
                    <span className="text-brand-blue font-bold text-sm mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-lg font-medium text-gray-400 mb-4">{exp.company}</p>
                    <p className="text-gray-500 leading-relaxed max-w-lg">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-premium-pink/30 rounded-[60px] p-12 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <i className="fa-solid fa-trophy text-[200px] text-brand-pink rotate-12"></i>
              </div>
              <h3 className="text-4xl font-display font-bold mb-10 leading-tight">Recognition & Achievements</h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="text-3xl text-brand-pink"><i className="fa-solid fa-medal"></i></div>
                   <div>
                      <p className="font-bold text-xl mb-1">Awwwards Honorable Mention</p>
                      <p className="text-gray-600">Site of the Day for Nexus Enterprise Portal, 2023.</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="text-3xl text-brand-purple"><i className="fa-solid fa-star"></i></div>
                   <div>
                      <p className="font-bold text-xl mb-1">Top Rated Developer (Upwork)</p>
                      <p className="text-gray-600">Maintained 100% job success score for 5 consecutive years.</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="text-3xl text-brand-blue"><i className="fa-solid fa-code-branch"></i></div>
                   <div>
                      <p className="font-bold text-xl mb-1">50+ Open Source Contributions</p>
                      <p className="text-gray-600">Active contributor to React and Unity community tools.</p>
                   </div>
                </div>
              </div>
              <div className="mt-12 glass p-6 rounded-3xl border-brand-pink/20">
                 <p className="italic text-lg text-gray-600 mb-4">"The quality of work delivered was beyond our expectations. A true professional who understands both business and tech."</p>
                 <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/seed/client/50/50" className="w-10 h-10 rounded-full" alt="Client"/>
                    <div>
                       <p className="font-bold text-sm">Alexander Pierce</p>
                       <p className="text-xs text-gray-400 uppercase">CEO, TechNova Solutions</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 reveal-section">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto glass rounded-[50px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-premium-text text-white">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Let's Talk</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Ready to start your next big project?</h2>
              <p className="text-gray-400 text-lg mb-12">I'm currently available for freelance work and consulting. Whether you have a specific idea or just want to chat about possibilities, I'm all ears.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-brand-pink transition-colors">
                      <i className="fa-solid fa-envelope"></i>
                   </div>
                   <div>
                      <p className="text-gray-400 text-sm">Email me at</p>
                      <p className="font-bold text-xl">hello@developer.com</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-brand-blue transition-colors">
                      <i className="fa-solid fa-phone"></i>
                   </div>
                   <div>
                      <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                      <p className="font-bold text-xl">+1 (555) 123-4567</p>
                   </div>
                </div>
              </div>
              
              <div className="mt-16 pt-16 border-t border-white/10 flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-premium-text transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-premium-text transition-all"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-premium-text transition-all"><i className="fa-brands fa-dribbble"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-premium-text transition-all"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                    <option>Website Development</option>
                    <option>App Development</option>
                    <option>Game Development</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Your Message</label>
                  <textarea rows={5} placeholder="Tell me about your project details..." className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-brand-blue text-white rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-100 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <a href="#" className="text-2xl font-display font-bold tracking-tight text-premium-text flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white text-sm">
                JD
              </div>
              <span>Dev.Expert</span>
            </a>
            <div className="flex gap-8">
              <a href="#about" className="text-sm font-medium text-gray-500 hover:text-premium-text">About</a>
              <a href="#portfolio" className="text-sm font-medium text-gray-500 hover:text-premium-text">Work</a>
              <a href="#contact" className="text-sm font-medium text-gray-500 hover:text-premium-text">Contact</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-premium-text">Privacy Policy</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
             <p className="text-gray-400 text-sm mb-4 md:mb-0">
               © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by <span className="text-premium-text font-bold">Your Name</span>
             </p>
             <div className="flex items-center gap-2 text-xs text-gray-400 uppercase font-bold tracking-widest">
               <span>Made with</span>
               <i className="fa-solid fa-heart text-brand-pink"></i>
               <span>in the Digital Space</span>
             </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button (Optional) */}
      <a href="#contact" className="fixed bottom-8 right-8 w-14 h-14 bg-brand-pink text-white rounded-full flex items-center justify-center text-xl shadow-2xl hover:scale-110 transition-transform z-40 md:hidden">
        <i className="fa-solid fa-message"></i>
      </a>
    </div>
  );
};

export default App;
