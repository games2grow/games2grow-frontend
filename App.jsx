import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Gamepad2, 
  Award, 
  ShieldCheck, 
  Calculator, 
  BookOpen, 
  BrainCircuit, 
  FlaskConical, 
  Star, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowRight,
  Loader2
} from 'lucide-react';

/**
 * HEADLESS WORDPRESS INTEGRATION NOTE:
 * In a real Next.js environment, you would use getStaticProps or getServerSideProps.
 * Below is a client-side simulation of fetching from the WP REST API.
 * API Endpoint Example: https://your-wp-site.com/wp-json/wp/v2/posts
 */

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wpData, setWpData] = useState({ categories: [], loading: true });

  // Simulate fetching data from WordPress REST API
  useEffect(() => {
    const fetchWordPressContent = async () => {
      try {
        // In reality, you'd fetch from: `https://api.games2grow.com/wp-json/wp/v2/games`
        // Simulating a 1.5s network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockCategories = [
          { id: 1, title: "Math Mania", icon: <Calculator />, color: "orange", desc: "Numbers & Logic", slug: "math" },
          { id: 2, title: "Word Wizards", icon: <BookOpen />, color: "green", desc: "Reading & Vocab", slug: "words" },
          { id: 3, title: "Brain Teasers", icon: <BrainCircuit />, color: "red", desc: "Focus & Memory", slug: "brain" },
          { id: 4, title: "Science Scouts", icon: <FlaskConical />, color: "blue", desc: "Nature & Animals", slug: "science" }
        ];

        setWpData({ categories: mockCategories, loading: false });
      } catch (error) {
        console.error("WP API Error:", error);
        setWpData({ categories: [], loading: false });
      }
    };

    fetchWordPressContent();
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const getCategoryStyles = (color) => {
    const map = {
      orange: { bg: 'bg-[#FFF8E1]', iconBg: 'bg-orange-100', text: 'text-[#F57C00]' },
      green: { bg: 'bg-[#E8F5E9]', iconBg: 'bg-green-100', text: 'text-[#388E3C]' },
      red: { bg: 'bg-[#FFEBEE]', iconBg: 'bg-red-100', text: 'text-[#D32F2F]' },
      blue: { bg: 'bg-[#E3F2FD]', iconBg: 'bg-blue-100', text: 'text-[#1976D2]' }
    };
    return map[color] || map.green;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800 overflow-x-hidden selection:bg-green-200">
      
      {/* Navigation - Fixed */}
      <nav className="fixed w-full top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="bg-[#5D4037] p-2 rounded-full border-4 border-green-600 group-hover:scale-105 transition-transform">
                <Sprout className="h-6 w-6 text-green-400" />
              </div>
              <span className="font-extrabold text-2xl text-green-700">games<span className="text-green-500">2</span>grow</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center font-bold text-green-800">
              {['Home', 'Games', 'How It Works', 'About', 'Blog'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-[#FF7043] hover:bg-[#F4511E] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all">
                Sign Up Free
              </button>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-green-800">
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left z-20">
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#1B5E20] leading-none mb-6">
                Learn. Play. <span className="text-[#8BC34A]">GROW!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
                The world's favorite playground for curious minds. Powered by WordPress, built for speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#FF7043] hover:bg-[#F4511E] text-white px-10 py-4 rounded-full font-extrabold text-lg shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                  PLAY NOW
                </button>
                <button className="bg-white border-4 border-green-600 text-green-700 px-10 py-4 rounded-full font-extrabold text-lg hover:bg-green-50 transition-all">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="relative h-[450px] hidden md:block">
               <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-[4rem] rotate-3"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#5D4037] w-48 h-48 rounded-full border-[12px] border-white shadow-2xl flex items-center justify-center animate-pulse">
                    <Sprout className="h-24 w-24 text-[#8BC34A]" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full transform translate-y-1/2">
          <svg className="w-full h-24 md:h-48" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#5D4037"></path>
          </svg>
        </div>
      </section>

      {/* WordPress Content Section */}
      <section id="games" className="bg-[#5D4037] pt-24 pb-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-white text-4xl font-black mb-2">From the Library</h2>
              <p className="text-green-200 font-bold uppercase tracking-widest text-sm">Managed via Headless WordPress</p>
            </div>
            {wpData.loading && <div className="text-white flex items-center font-bold"><Loader2 className="animate-spin mr-2" /> Syncing with WP...</div>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wpData.loading ? (
              // Loading Skeleton
              [1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white/10 h-64 rounded-[2.5rem] animate-pulse"></div>
              ))
            ) : (
              wpData.categories.map((cat) => {
                const styles = getCategoryStyles(cat.color);
                return (
                  <div key={cat.id} className={`${styles.bg} rounded-[2.5rem] p-8 text-center cursor-pointer group hover:scale-105 transition-all shadow-2xl border-b-[12px] border-black/10`}>
                    <div className={`${styles.iconBg} w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 shadow-inner transform group-hover:rotate-12 transition-transform`}>
                      {React.cloneElement(cat.icon, { className: `h-12 w-12 ${styles.text.replace('text-', 'text-')}` })}
                    </div>
                    <h4 className={`text-2xl font-black ${styles.text} mb-2`}>{cat.title}</h4>
                    <p className="text-[#5D4037] font-bold text-sm">{cat.desc}</p>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-20 bg-[#FFA726] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border-b-[16px] border-[#E65100]">
              <div className="relative z-10 md:flex items-center justify-between">
                <div className="mb-8 md:mb-0 md:max-w-xl">
                  <h3 className="text-white text-4xl md:text-5xl font-black mb-4 leading-tight">Ready to start growing?</h3>
                  <p className="text-[#5D4037] text-xl font-bold">Join 50,000+ happy little sprouts today!</p>
                </div>
                <button className="bg-white text-[#E65100] px-12 py-5 rounded-full font-black text-2xl shadow-xl hover:scale-105 transition-transform">
                  GET STARTED
                </button>
              </div>
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <Sprout size={300} color="white" />
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FDFBF7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1B5E20] text-5xl font-black mb-16">The Parent Vine</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Sarah", seed: "Sarah" },
              { name: "Mike", seed: "Mike" },
              { name: "Anna", seed: "Anna" }
            ].map(user => (
              <div key={user.name} className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-green-50 hover:border-green-200 transition-colors">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.seed}`} alt="Avatar" className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100" />
                <div className="flex justify-center mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 font-medium italic mb-6">"This platform is exactly what we needed for summer learning!"</p>
                <p className="font-black text-[#1B5E20]">{user.name} T.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B5E20] text-white py-20 border-t-[20px] border-[#8BC34A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-full"><Sprout className="text-[#1B5E20]" /></div>
              <span className="text-3xl font-black">games2grow</span>
            </div>
            <p className="max-w-sm text-green-100 font-medium leading-relaxed">
              We make learning feel like play. Using the latest in web technology to sprout the next generation of thinkers.
            </p>
          </div>
          <div>
            <h5 className="font-black text-xl mb-6">Play</h5>
            <ul className="space-y-4 font-bold text-green-200">
              <li><a href="#" className="hover:text-white">All Games</a></li>
              <li><a href="#" className="hover:text-white">Teacher Portal</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xl mb-6">Social</h5>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/10 p-3 rounded-2xl hover:bg-white hover:text-[#1B5E20] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
