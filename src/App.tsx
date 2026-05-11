import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ArrowRight, 
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Command,
  Heart,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { TechCorner } from './components/TechCorner';

const NeonBadge = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`px-2 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono text-white/80 tracking-tighter flex items-center gap-2 ${className}`}>
    <div className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse shadow-[0_0_8px_#FF007F]" />
    {children}
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-neon flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,0,127,0.3)] group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-white uppercase italic">Neon<span className="text-brand-neon">Morphic</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-xs font-bold tracking-[0.2em] text-white/60">
          <a href="#" className="hover:text-brand-neon transition-colors">MARKETPLACE</a>
          <a href="#" className="hover:text-brand-neon transition-colors">CREATORS</a>
          <a href="#" className="hover:text-brand-neon transition-colors">DROPS</a>
          <a href="#" className="hover:text-brand-neon transition-colors">ARCHIVE</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center px-8 py-3 bg-transparent border-2 border-brand-neon text-[10px] font-black tracking-[0.2em] text-white rounded-2xl hover:bg-brand-neon transition-all hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] uppercase italic group">
            Connect wallet
          </button>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="flex flex-col gap-6 p-8 text-sm font-bold tracking-widest text-white/60 text-center">
              <a href="#" className="hover:text-brand-neon transition-colors">MARKETPLACE</a>
              <a href="#" className="hover:text-brand-neon transition-colors">CREATORS</a>
              <a href="#" className="hover:text-brand-neon transition-colors">DROPS</a>
              <button className="px-8 py-4 bg-brand-neon text-white rounded-full font-black">
                CONNECT WALLET
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-neon/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-display font-black text-white tracking-[0.2em] uppercase italic underline decoration-brand-neon decoration-2 underline-offset-8">MARKETPLACE FOR</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.8] mb-12 tracking-tighter uppercase italic">
            CREATORS
          </h1>
          
          <p className="text-lg text-white/40 max-w-lg mb-10 leading-relaxed font-medium">
            The world's first hybrid apparel protocol. Connect with top artists, creators and crypto enthusiasts to design and explore top-tier outfit systems.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-brand-neon hover:text-white transition-all shadow-xl hover:shadow-[0_0_40px_rgba(255,0,127,0.4)] uppercase tracking-tighter italic text-xl">
              Explore
            </button>
            <button className="flex items-center gap-3 text-white font-bold group">
              <span className="border-b-2 border-white/20 group-hover:border-brand-neon transition-colors">Create Outfit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-brand-neon" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
            <div className="neon-card p-6 border-brand-neon/20 bg-brand-neon/5">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-5 h-5 text-brand-neon" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Current Bid</span>
              </div>
              <div className="text-2xl font-display font-black text-white">15.50 ETH</div>
              <div className="text-xs text-white/20 font-mono mt-1">≈ $23,932.31 USD</div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex -space-x-4 mb-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-black object-cover" 
                    alt="user"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white uppercase italic">
                  +5k
                </div>
              </div>
              <span className="text-xs font-bold text-white/40 uppercase tracking-[0.1em]">50,000+ Active Designers</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1320&auto=format&fit=crop" 
              alt="Cyber Fashion" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            {/* Animated Glow Border */}
            <div className="absolute inset-0 border-[8px] border-brand-neon/10 rounded-[2rem] pointer-events-none" />
            
            {/* Floating Badges inspired by motif */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 right-[-20px] z-20"
            >
              <NeonBadge className="scale-125">
                <ShieldCheck className="w-3 h-3 text-green-400" />
                100% AUTHENTICITY GUARANTEED
              </NeonBadge>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute top-32 left-[-30px] z-20"
            >
              <NeonBadge className="p-3 bg-black/60 border-white/20">
                <TrendingUp className="w-4 h-4 text-brand-neon" />
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40">TREND_SCORE</span>
                  <span className="text-xs font-black">99.8% STABILITY</span>
                </div>
              </NeonBadge>
            </motion.div>

            <div className="absolute bottom-10 left-10 right-10">
              <div className="neon-card p-6 border-white/10 backdrop-blur-3xl flex justify-between items-center group-hover:border-brand-neon/40 transition-colors">
                <div className="grid grid-cols-4 gap-6 flex-grow">
                  {[
                    { label: 'Days', val: '12' },
                    { label: 'Hours', val: '03' },
                    { label: 'Mins', val: '11' },
                    { label: 'Secs', val: '43' },
                  ].map((t, i) => (
                    <div key={i} className="text-center group/time">
                      <div className="text-2xl font-display font-black text-white group-hover/time:text-brand-neon transition-colors">{t.val}</div>
                      <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ item, i }: { item: any, i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="group neon-card p-4 hover:border-brand-neon/30 transition-all duration-500"
  >
    <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
      <img 
        src={item.img} 
        alt={item.name} 
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-3 left-3">
        <NeonBadge>NEW DROP</NeonBadge>
      </div>
      <button className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-lg text-white/40 hover:text-brand-neon hover:bg-black/60 transition-all">
        <Heart className="w-4 h-4" />
      </button>
      
      {/* Bid Overlay appearing on hover */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 space-y-4">
        <div className="text-center">
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1 block">Current High Bid</span>
            <span className="text-2xl font-black text-white">{item.price}</span>
        </div>
        <button className="w-full py-3.5 bg-gradient-to-r from-brand-purple to-brand-neon text-white font-black rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-brand-neon/20 tracking-widest text-[10px] italic">
          PLACE BID
        </button>
      </div>
    </div>

    <div className="flex justify-between items-end">
      <div>
        <h4 className="font-display font-black text-white uppercase italic tracking-tighter text-lg leading-none group-hover:text-brand-neon transition-colors">{item.name}</h4>
        <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 rounded-full bg-brand-purple/20 border border-brand-purple/40 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=creator${i}`} className="w-full h-full object-cover" alt="creator" />
            </div>
            <span className="text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors uppercase">{item.creator}</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-black text-brand-neon uppercase tracking-widest">Ending In</span>
        <div className="flex items-center gap-1 text-[10px] font-mono text-white/60">
            <Clock className="w-3 h-3" />
            12H 03M
        </div>
      </div>
    </div>
  </motion.div>
);

const AppContent = () => {
  const trending = [
    { name: "Krypton V2", price: "2.4 ETH", creator: "ZeroX", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop" },
    { name: "Void Shell", price: "1.8 ETH", creator: "Nova", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop" },
    { name: "Pulse One", price: "4.2 ETH", creator: "Flux", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" },
  ];

  const explorer = [
    { name: "Hologram X", price: "0.9 ETH", creator: "Ghost", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop" },
    { name: "Neon Mesh", price: "2.1 ETH", creator: "Prism", img: "https://images.unsplash.com/photo-1504333638930-c87a15951cc7?q=80&w=1470&auto=format&fit=crop" },
    { name: "Cyber Core", price: "3.5 ETH", creator: "Vortex", img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop" },
    { name: "Aura Plate", price: "1.2 ETH", creator: "Lumos", img: "https://images.unsplash.com/photo-1518005020480-3090c061730a?q=80&w=1321&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#030005] selection:bg-brand-neon selection:text-white">
      <div className="side-dots left-8 md:flex hidden">
        {[...Array(6)].map((_, i) => <div key={i} className="side-dot" />)}
      </div>
      <div className="side-dots right-8 md:flex hidden">
        {[...Array(6)].map((_, i) => <div key={i} className="side-dot" />)}
      </div>
      <Nav />
      <Hero />
      
      {/* Highest Bids Section */}
      <section className="py-24 bg-[#05010a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white italic tracking-tighter uppercase mb-4">Highest <span className="text-brand-neon">Live Bid</span></h2>
              <p className="text-white/20 text-xs font-mono font-bold tracking-[0.2em] uppercase">Real-time auction protocol active</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-brand-neon transition-colors tracking-widest uppercase mb-1">
              See All Items <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trending.map((item, i) => (
              <div key={i}>
                <ProductCard item={item} i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Grid */}
      <section className="py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">Explore <br /> <span className="text-brand-purple">Designs</span></h2>
            </div>
            <div className="flex gap-4">
                {['ALL', 'JACKETS', 'EQUIPMENT', 'HELMETS'].map(filter => (
                    <button key={filter} className={`px-5 py-2 rounded-lg text-[10px] font-black tracking-widest transition-all ${filter === 'ALL' ? 'bg-brand-neon text-white' : 'bg-white/5 text-white/40 hover:text-white'}`}>
                        {filter}
                    </button>
                ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {explorer.map((item, i) => (
              <div key={i}>
                <ProductCard item={item} i={i + 10} />
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="px-12 py-5 border-[3px] border-white/5 hover:border-brand-neon/40 text-sm font-black text-white uppercase tracking-[0.2em] rounded-2xl transition-all hover:scale-105">
                LOAD_MORE_RESOURCES
            </button>
          </div>
        </div>
      </section>

      {/* Footer Motif Style */}
      <footer className="py-32 bg-black relative border-t border-white/5">
        <div className="absolute inset-0 bg-brand-neon/5 opacity-30 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-20 items-start mb-24">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-neon flex items-center justify-center rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-black text-2xl tracking-tighter text-white uppercase italic">NEONMORPHIC</span>
              </div>
              <p className="text-white/40 font-medium leading-relaxed mb-10">
                Pioneering the hybrid future where digital and physical fashion converge. 
                Our protocol enables creators to mint, license, and manifest high-end 
                outfit systems across realities.
              </p>
              <div className="flex gap-8">
                {['TWITTER', 'INSTAGRAM', 'DISCORD'].map(l => (
                    <a key={l} href="#" className="text-[10px] font-black text-white/30 hover:text-brand-neon transition-colors tracking-widest">{l}</a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-6">
              <h5 className="text-[10px] font-black text-brand-neon uppercase tracking-[0.4em] mb-10">Protocol Docs</h5>
              <div className="grid gap-6">
                {['Marketplace', 'Staking', 'Governance', 'Material OS'].map(l => (
                  <a key={l} href="#" className="font-bold text-white/60 hover:text-white transition-colors flex items-center justify-between group">
                    {l} <ArrowRight className="w-4 h-4 text-brand-neon opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h5 className="text-[10px] font-black text-brand-neon uppercase tracking-[0.4em] mb-10">System Status</h5>
              <div className="neon-card bg-brand-neon/5 border-brand-neon/20 p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-white mb-1 uppercase italic tracking-tighter">V4 ARCHITECTURE</div>
                  <div className="text-[8px] font-mono text-white/40 uppercase">BLOCK_SYNC_COMPLETE</div>
                </div>
                <div className="w-3 h-3 bg-brand-neon rounded-full animate-pulse shadow-[0_0_10px_#FF007F]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="text-[9px] font-mono font-bold text-white/20 uppercase tracking-[0.4em]">© 2026 NEONMORPHIC_STUDIOS.PXC // ALL ASSETS ENCRYPTED</div>
            <div className="flex gap-10">
                <a href="#" className="text-[9px] font-mono font-bold text-white/20 hover:text-white transition-colors">SECURITY_MANIFEST</a>
                <a href="#" className="text-[9px] font-mono font-bold text-white/20 hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <AppContent />
    </div>
  );
}

