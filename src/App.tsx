import { useState, useEffect } from 'react';
import { Sparkles, Zap, TrendingUp, Users, Rocket, ArrowRight, Star, Award, Target } from 'lucide-react';

const KarigariLogo = () => (
  <svg viewBox="0 0 860 640" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <g>
      <rect x="278" y="179" width="70" height="70" fill="#F5F1E8" rx="0" />
      <rect x="379" y="109" width="133" height="133" fill="#F5F1E8" rx="25" />
      <rect x="545" y="179" width="70" height="70" fill="#F5F1E8" rx="0" />
      
      <rect x="213" y="276" width="133" height="133" fill="#F5F1E8" rx="25" />
      <rect x="379" y="276" width="133" height="133" fill="#F5F1E8" rx="25" />
      <rect x="545" y="276" width="133" height="133" fill="#F5F1E8" rx="25" />
      
      <rect x="278" y="442" width="70" height="70" fill="#F5F1E8" rx="0" />
      <rect x="379" y="442" width="133" height="133" fill="#F5F1E8" rx="25" />
      <rect x="545" y="442" width="70" height="70" fill="#F5F1E8" rx="0" />
    </g>
  </svg>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({ history: true });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: '100% Handmade', desc: 'Handmade with care and heritage.' },
    { icon: <Award className="w-8 h-8" />, title: 'Premium Fabric Quality', desc: 'Sustainably sourced, built to last.' },
    { icon: <Users className="w-8 h-8" />, title: 'Limited Edition Patterns', desc: 'Classic style crafted for today.' },
    { icon: <Target className="w-8 h-8" />, title: 'Rare Block Designs', desc: 'Clothing made to be loved, not replaced.' }
  ];

  const stats = [
    { number: '100%', label: 'Handcrafted' },
    { number: 'Zero', label: 'Compromise' },
    { number: '24/7', label: 'Support' },
    { number: '#1', label: 'Handmade Label' }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: 'linear-gradient(to bottom, #A05838 0%, #975234 20%, #8E4C30 40%, #85462C 60%, #7C4028 80%, #6D3A24 100%)' }}>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-pulse" style={{ background: 'linear-gradient(to right, rgba(216, 136, 100, 0.2), rgba(232, 152, 116, 0.2), rgba(200, 120, 84, 0.2))' }} />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 241, 232, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Sparkles className="w-4 h-4 opacity-40" style={{ color: '#F5F1E8' }} />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
            <KarigariLogo />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border animate-bounce" style={{ background: 'rgba(245, 241, 232, 0.2)', borderColor: 'rgba(245, 241, 232, 0.3)' }}>
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold" style={{ color: '#F5F1E8' }}>
              COMING SOON
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider" style={{ color: '#F5F1E8', animation: 'fadeIn 0.8s ease-out forwards' }}>
            KARIGARI
          </h1>
          
          <p className="text-xl md:text-3xl mb-4 font-light" style={{ color: 'rgba(245, 241, 232, 0.9)', animation: 'fadeIn 0.8s ease-out 0.2s forwards', opacity: 0 }}>
            From Karigar's Hands to Your Wardrobe.
          </p>
          
          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(245, 241, 232, 0.7)', animation: 'fadeIn 0.8s ease-out 0.4s forwards', opacity: 0 }}>
          More than just clothing, it is a celebration of handmade artistry, tradition, and heritage. Rooted in Indian craftsmanship, each piece is created by skilled artisans.
          </p>
          
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl" 
            style={{ background: '#F5F1E8', color: '#A05838', boxShadow: '0 0 40px rgba(245, 241, 232, 0.3)', animation: 'fadeIn 0.8s ease-out 0.6s forwards', opacity: 0 }}
          >
            <span className="flex items-center gap-2">
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: 'rgba(245, 241, 232, 0.6)' }}>
            <div className="w-1 h-3 rounded-full animate-pulse" style={{ background: 'rgba(245, 241, 232, 0.6)' }} />
          </div>
        </div>
      </section>

      <section id="about" className={`py-32 px-6 relative transition-all duration-1000 border-t border-b ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#F5F1E8' }}>
              What is Karigari?
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ background: '#F5F1E8' }} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(245, 241, 232, 0.9)' }}>
                Karigari is not just another brand. It's a <span className="font-bold" style={{ color: '#F5F1E8' }}>celebration of craftsmanship</span>. If you believe in wearing something meaningful instead of mass-produced clothing, <span className="font-bold" style={{ color: '#F5F1E8' }}>Karigari</span> is for you.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>
                We believe clothing should be made with care, not mass-produced. Karigari blends handmade tradition with modern design to create timeless apparel.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 241, 232, 0.6)' }}>Our creations have been proudly worn by
              TV anchors and several well-known personalities, which motivates us to keep raising our quality standards.</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Craftsmanship', 'Innovation', 'Heritage', 'Quality'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-30 transition-colors cursor-default" style={{ background: 'rgba(245, 241, 232, 0.2)', borderWidth: '1px', borderColor: 'rgba(245, 241, 232, 0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse" style={{ background: 'rgba(245, 241, 232, 0.2)' }} />
              <div className="relative p-8 rounded-3xl border backdrop-blur-sm" style={{ background: 'rgba(160, 88, 56, 0.5)', borderColor: 'rgba(245, 241, 232, 0.3)' }}>
                <div className="w-32 h-32 mx-auto mb-6">
                  <KarigariLogo />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Ready for Launch</h3>
                <p className="text-center" style={{ color: 'rgba(245, 241, 232, 0.8)' }}>Be among the first to experience Karigari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hist */}
<section id="history" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.history ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'linear-gradient(to bottom, rgba(160, 88, 56, 0.2), transparent)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#F5F1E8' }}>
        Our History
      </h2>
      <div className="w-24 h-1 mx-auto mb-8" style={{ background: '#F5F1E8' }} />
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
      <div className="space-y-6">
        <p className="text-xl leading-relaxed" style={{ color: 'rgba(245, 241, 232, 0.9)' }}>
        Karigari was born in the 1900s as a small family initiative. What started with our grandfather's passion for textile art later became a generational legacy. Our father continued the tradition and today, we proudly carry forward the same valuessuch as honesty, quality, and respect for craftsmanship.
        </p>
      
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse" style={{ background: 'rgba(245, 241, 232, 0.2)' }} />
        <div className="relative p-12 rounded-3xl border backdrop-blur-sm text-center" style={{ background: 'rgba(160, 88, 56, 0.4)', borderColor: 'rgba(245, 241, 232, 0.3)' }}>
          <div className="w-48 h-48 mx-auto mb-6">
            <KarigariLogo />
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#F5F1E8' }}>30+ Years</h3>
          <p style={{ color: 'rgba(245, 241, 232, 0.8)' }}>Preserving tradition, creating heritage</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="work" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'linear-gradient(to bottom, transparent, rgba(160, 88, 56, 0.3))', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#F5F1E8' }}>
              Our Work
            </h2>
            <p className="text-xl" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>Handcrafted with passion and precision</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl border transition-all hover:scale-105 hover:shadow-2xl" style={{ borderColor: 'rgba(245, 241, 232, 0.3)' }}>
              <img 
                src="./Pics/33.JPG" 
                alt="Block printing on fabric with traditional wooden stamp"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F5F1E8' }}>Traditional Block Printing</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 241, 232, 0.8)' }}>Hand-carved wooden blocks creating timeless patterns</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border transition-all hover:scale-105 hover:shadow-2xl" style={{ borderColor: 'rgba(245, 241, 232, 0.3)' }}>
              <img 
                src="./Pics/22.JPG" 
                alt="Artisan printing on textile with traditional tools"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F5F1E8' }}>Artisan Craftsmanship</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 241, 232, 0.8)' }}>Every piece tells a story of skilled hands</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border transition-all hover:scale-105 hover:shadow-2xl" style={{ borderColor: 'rgba(245, 241, 232, 0.3)' }}>
              <img 
                src="./Pics/44.JPG" 
                alt="Hand stamping technique demonstration"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F5F1E8' }}>Timeless Weaves</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 241, 232, 0.8)' }}>Handcrafted Elegence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'linear-gradient(to bottom, rgba(160, 88, 56, 0.3), rgba(160, 88, 56, 0.5))', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#F5F1E8' }}>
              Why Karigari?
            </h2>
            <p className="text-xl" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>What makes our craft different</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border hover:border-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{ background: 'rgba(160, 88, 56, 0.3)', borderColor: 'rgba(245, 241, 232, 0.3)', boxShadow: '0 0 0 rgba(245, 241, 232, 0.2)' }}
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform" style={{ color: '#F5F1E8' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F5F1E8' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(245, 241, 232, 0.7)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border hover:border-opacity-50 transition-all hover:scale-105" style={{ background: 'rgba(160, 88, 56, 0.2)', borderColor: 'rgba(245, 241, 232, 0.2)' }}>
                <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: '#F5F1E8' }}>
                  {stat.number}
                </div>
                <div className="font-semibold" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'linear-gradient(to bottom, rgba(160, 88, 56, 0.5), transparent)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-20 h-20 mx-auto mb-8" style={{ color: '#F5F1E8' }} />
          <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: '#F5F1E8' }}>Our Vision</h2>
          <p className="text-xl leading-relaxed mb-6" style={{ color: 'rgba(245, 241, 232, 0.9)' }}>
            Bringing traditional art and craftsmanship into the digital world with authenticity and care.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>
            Reaching a global audience while empowering artisans and preserving handmade traditions.
          </p>
        </div>
      </section>

      <section id="cta" className={`py-32 px-6 transition-all duration-1000 border-t border-b ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-16 rounded-3xl shadow-2xl overflow-hidden" style={{ background: '#F5F1E8', boxShadow: '0 0 60px rgba(245, 241, 232, 0.3)' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(160, 88, 56, 0.05)' }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#A05838' }}>Contact Us</h2>
              <p className="text-xl mb-12" style={{ color: '#7C4028' }}>
                Get in touch with us for inquiries and collaborations
              </p>
              
              <div className="max-w-md mx-auto space-y-6">
                <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(160, 88, 56, 0.1)' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#A05838' }}>
                      <svg className="w-6 h-6" style={{ color: '#F5F1E8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#7C4028' }}>Email</p>
                      <a href="mailto:karigaritheprint@gmail.com" className="text-lg font-bold hover:underline" style={{ color: '#A05838' }}>
                        karigaritheprint@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(160, 88, 56, 0.1)' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#A05838' }}>
                      <svg className="w-6 h-6" style={{ color: '#F5F1E8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#7C4028' }}>Phone</p>
                      <a href="tel:+919871516061" className="text-lg font-bold hover:underline" style={{ color: '#A05838' }}>
                        +91 981 807 2257<br />
                        +91 987 151 6061
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(245, 241, 232, 0.2)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <KarigariLogo />
          </div>
          <div className="text-3xl font-black mb-4" style={{ color: '#F5F1E8' }}>
            KARIGARI
          </div>
          <p className="mb-6" style={{ color: 'rgba(245, 241, 232, 0.7)' }}>Where craft meets innovation</p>
          <div className="flex justify-center gap-6 text-sm" style={{ color: 'rgba(245, 241, 232, 0.6)' }}>
            <a href="https://www.instagram.com/karigaritheprint?igsh=ZXJjZm40M2FmaXZ5" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.instagram.com/karigaritheprint?igsh=ZXJjZm40M2FmaXZ5" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.instagram.com/karigaritheprint?igsh=ZXJjZm40M2FmaXZ5" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <p className="text-xs mt-8" style={{ color: 'rgba(245, 241, 232, 0.5)' }}>© 2026 Karigari. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}