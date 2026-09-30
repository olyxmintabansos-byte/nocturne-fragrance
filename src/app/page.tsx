'use client';

import { useState } from 'react';

const FragrancePyramidSVG = ({ activeNote }: { activeNote: any }) => {
  const notes = [
    { y: 10, w: 80, label: 'TOP', items: 'Bergamot / Saffron' },
    { y: 60, w: 140, label: 'HEART', items: 'Oud / Leather / Rose' },
    { y: 110, w: 200, label: 'BASE', items: 'Amber / Musk / Vetiver' },
  ];
  return (
    <svg viewBox="0 0 220 180" className="w-full h-full">
      {notes.map((n, i) => (
        <g key={i}>
          <rect x={(220 - n.w) / 2} y={n.y} width={n.w} height={40} fill={activeNote === i ? 'rgba(212,175,55,0.2)' : 'none'} stroke="#d4af37" strokeWidth="1" rx="2"/>
          <text x="110" y={n.y + 18} textAnchor="middle" fontSize="8" fill="#d4af37" fontWeight="bold">{n.label}</text>
          <text x="110" y={n.y + 32} textAnchor="middle" fontSize="7" fill="#faf8f5" opacity="0.7">{n.items}</text>
        </g>
      ))}
    </svg>
  );
};

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b border-accent/20 bg-primary sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm tracking-widest">
        <span className="text-accent font-bold">OLYX ATELIER</span>
        <span className="text-accent/50 mx-2">//</span>
        <span className="text-accent/70 text-xs">MAISONS</span>
      </div>
      <button onClick={onCartOpen} className="text-accent hover:text-light transition text-sm">CART</button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div className={`fixed right-0 top-0 h-screen w-96 bg-primary border-l border-accent/20 transform transition z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6"><h2 className="text-2xl text-accent mb-4">CART</h2><p className="text-accent/50">Empty.</p></div>
    </div>
  </>
);

export default function NocturneHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeNote, setActiveNote] = useState(0);
  const [sillage, setSillage] = useState(3);
  const [monogram, setMonogram] = useState('');
  const [concentration, setConcentration] = useState('extrait');

  const specs = [
    { label: 'Type', value: 'Extrait de Parfum' },
    { label: 'Concentration', value: '25% oil' },
    { label: 'Volume', value: '50ml crystal' },
    { label: 'Longevity', value: '8-12 hours' },
    { label: 'Projection', value: 'Intimate-close' },
    { label: 'House', value: 'Nocturne Paris' },
    { label: 'Nose', value: 'Master perfumer' },
    { label: 'Batch', value: 'Small batch #044' }
  ];

  return (
    <main style={{background:'#1a0a14',color:'#faf8f5',minHeight:'100vh'}}>
      <style>{`:root{--primary:#1a0a14;--accent:#d4af37;--light:#faf8f5;}`}</style>
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-2" style={{fontFamily:'Playfair Display,serif',color:'#d4af37'}}>Nocturne</h1>
          <h2 className="text-xl mb-6" style={{color:'#faf8f5',opacity:0.7}}>Niche Artisanal Extrait de Parfum</h2>
          <p className="text-lg mb-8" style={{color:'rgba(250,248,245,0.6)',lineHeight:1.8}}>
            Parisian extrait blending leather and oud over amber musk. 25% concentration in hand-blown crystal. Intimate luxury for those who understand that fragrance is memory.
          </p>
          <div className="flex gap-6 items-center mb-12">
            <div>
              <div className="text-3xl font-bold" style={{color:'#d4af37'}}>$390</div>
              <div className="text-sm" style={{color:'rgba(250,248,245,0.4)'}}>Rp 6.100.000 / €360</div>
            </div>
            <button onClick={() => setCartOpen(true)} className="px-8 py-3 font-bold transition" style={{background:'#d4af37',color:'#1a0a14'}}>ADD TO CART</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded" style={{background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.2)'}}>
              <label className="block text-sm mb-2" style={{color:'#d4af37'}}>Sillage Radius: {sillage}ft</label>
              <input type="range" min="1" max="6" value={sillage} onChange={(e) => setSillage(parseInt(e.target.value))} className="w-full" />
            </div>
            <div className="p-4 rounded" style={{background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.2)'}}>
              <label className="block text-sm mb-2" style={{color:'#d4af37'}}>Monogram Preview</label>
              <input type="text" maxLength={3} value={monogram} onChange={(e) => setMonogram(e.target.value.toUpperCase())} placeholder="ABC" className="bg-transparent border border-accent/30 px-4 py-2 text-center text-2xl w-full" style={{color:'#d4af37'}} />
            </div>
          </div>
        </div>

        <div className="aspect-square rounded flex items-center justify-center" style={{background:'rgba(212,175,55,0.05)',border:'1px solid rgba(212,175,55,0.15)'}}>
          <FragrancePyramidSVG activeNote={activeNote} />
        </div>
      </section>

      <section className="border-y py-16" style={{borderColor:'rgba(212,175,55,0.15)'}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{fontFamily:'Playfair Display,serif',color:'#d4af37'}}>Fragrance Notes</h2>
          <div className="grid grid-cols-3 gap-4">
            {['TOP: Bergamot, Saffron','HEART: Oud, Leather, Rose','BASE: Amber, Musk, Vetiver'].map((n, i) => (
              <button key={i} onClick={() => setActiveNote(i)} className="p-6 rounded text-left transition" style={{background: activeNote === i ? 'rgba(212,175,55,0.15)' : 'transparent',border: '1px solid rgba(212,175,55,0.2)'}}>
                <div className="text-sm" style={{color:'#d4af37'}}>{n}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12" style={{fontFamily:'Playfair Display,serif',color:'#d4af37'}}>Details</h2>
        <div className="grid grid-cols-4 gap-4">{specs.map((s, i) => (
          <div key={i} className="p-4 rounded" style={{border:'1px solid rgba(212,175,55,0.15)'}}>
            <div className="text-xs mb-1" style={{color:'#d4af37'}}>{s.label}</div>
            <div className="text-sm" style={{color:'rgba(250,248,245,0.7)'}}>{s.value}</div>
          </div>
        ))}</div>
      </section>

      <footer className="py-8" style={{borderTop:'1px solid rgba(212,175,55,0.15)'}}>
        <div className="max-w-7xl mx-auto px-6 text-center text-sm" style={{color:'rgba(250,248,245,0.4)'}}>Nocturne / Parisian niche perfumery</div>
      </footer>
    </main>
  );
}
