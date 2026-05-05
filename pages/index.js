import React, { useState, useEffect } from 'react';
import { 
  Sprout, Calculator, BookOpen, BrainCircuit, FlaskConical, 
  Star, Menu, X, Facebook, Instagram, Twitter, Youtube, 
  ArrowRight, Loader2, Gamepad2, Award, ShieldCheck 
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wpData, setWpData] = useState({ categories: [], loading: true });

  useEffect(() => {
    const fetchWordPressContent = async () => {
      try {
        // This is your "Wall of Text" URL from SiteGround
        const res = await fetch('https://games2grow.net/wp-json/wp/v2/posts');
        const data = await res.json();
        
        const mappedCategories = data.slice(0, 4).map((post, index) => ({
          id: post.id,
          title: post.title.rendered,
          desc: "Educational Adventure",
          icon: [<Calculator key="1"/>, <BookOpen key="2"/>, <BrainCircuit key="3"/>, <FlaskConical key="4"/>][index % 4],
          color: ["orange", "green", "red", "blue"][index % 4]
        }));

        setWpData({ categories: mappedCategories, loading: false });
      } catch (error) {
        console.error("WP API Error:", error);
        setWpData({ categories: [], loading: false });
      }
    };
    fetchWordPressContent();
  }, []);

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
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800 overflow-x-hidden">
      <nav className="fixed w-full top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-[#5D4037] p-2 rounded-full border-4 border-green-600">
              <Sprout className="h-6 w-6 text-green-400" />
            </div>
            <span className="font-extrabold text-2xl text-green-700">games<span className="text-green-500">2</span>grow</span>
          </div>
          <button className="hidden md:block bg-[#FF7043] text-white px-6 py-2 rounded-full font-bold">Sign Up Free</button>
        </div>
      </nav>

      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1B5E20] leading-tight mb-6">Learn. Play. <span className="text-[#8BC34A]">GROW!</span></h1>
            <p className="text-xl text-gray-600 mb-8 font-medium">Fun educational games for kids, powered by Headless WordPress.</p>
            <button className="bg-[#FF7043] text-white px-10 py-4 rounded-full font-extrabold text-lg shadow-xl">START ADVENTURE</button>
          </div>
          <div className="hidden md:flex justify-center">
             <div className="bg-[#5D4037] w-48 h-48 rounded-full border-[12px] border-white shadow-2xl flex items-center justify-center">
               <Sprout className="h-24 w-24 text-[#8BC34A]" />
             </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full transform translate-y-1/2">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#5D4037"></path></svg>
        </div>
      </section>

      <section className="bg-[#5D4037] pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-3xl font-black mb-12">New Sprouts (From WordPress)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wpData.loading ? (
              [1, 2, 3, 4].map(i => <div key={i} className="bg-white/10 h-64 rounded-[2.5rem] animate-pulse"></div>)
            ) : (
              wpData.categories.map((cat) => {
                const styles = getCategoryStyles(cat.color);
                return (
                  <div key={cat.id} className={`${styles.bg} rounded-[2.5rem] p-8 text-center shadow-2xl transition-transform hover:scale-105`}>
                    <div className={`${styles.iconBg} w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6`}>
                      {React.cloneElement(cat.icon, { className: `h-10 w-10 ${styles.text}` })}
                    </div>
                    <h4 className={`text-xl font-black ${styles.text} mb-2`}>{cat.title}</h4>
                    <p className="text-[#5D4037] font-bold text-xs uppercase tracking-widest">{cat.desc}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
