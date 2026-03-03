import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const stats = [
  { label: 'Imagini din text', value: '∞', desc: 'Orice preparat, instant', color: 'violet' },
  { label: 'Calitate export', value: '4K', desc: 'Print + web ready', color: 'teal' },
  { label: 'Fotograf angajat', value: '0€', desc: 'Zero costuri sesiune', color: 'amber' },
  { label: 'Per preparat', value: '60s', desc: 'Generare completă', color: 'pink' },
];

const features = [
  { icon: '✍️', title: 'Text-to-Dish Rendering', desc: 'Scrii numele unui preparat — primești o imagine cinematografică în stilul bucătăriei tale în sub 60 de secunde.' },
  { icon: '🔆', title: 'Photo Enhancement Engine', desc: 'Încarci o poză cu telefonul — motorul reconstruiește iluminarea, platingul și fundalul la standard Michelin.' },
  { icon: '🏷️', title: 'Logo & Decor Branding', desc: 'Logo-ul, paleta de culori și interiorul restaurantului sunt integrate consistent în fiecare imagine generată.' },
  { icon: '📷', title: 'Live Dish Capture', desc: 'Fotografiezi preparatul direct din aplicație — upscale și relight instant, gata de publicat în câteva secunde.' },
  { icon: '📊', title: 'Bulk Excel / Menu Import', desc: 'Încarci tot meniul ca spreadsheet — motorul procesează simultan toate preparatele, fără input manual.' },
  { icon: '🎙️', title: 'Voice Mode', desc: 'Descrii preparatul cu vocea — recunoașterea vocală alimentează direct pipeline-ul de generare. Zero tastare.' },
  { icon: '🖼️', title: 'Multi-Platform Export', desc: 'Output optimizat pentru website, delivery apps, meniuri print 4K și social media — toate formatele incluse.' },
  { icon: '✏️', title: 'Edit & Authenticity Control', desc: 'Ajustezi stilul de platare, ingredientele vizibile și fundalul — preparatul rămâne autentic și recognoscibil.' },
];

const workflow = [
  { step: 1, label: 'Upload meniu\nsau poze' },
  { step: 2, label: 'Setezi logo\n& decor' },
  { step: 3, label: 'AI generează\nimaginile' },
  { step: 4, label: 'Editezi\n& refinezi' },
  { step: 5, label: 'Exporti\n& publici' },
];

const actionPills = [
  { icon: '📄', label: 'Upload Menu' },
  { icon: '🏷️', label: 'Logo' },
  { icon: '📍', label: 'Location' },
  { icon: '🖼️', label: 'Bulk Photos' },
  { icon: '🎙️', label: 'Voice Mode' },
  { icon: '📊', label: 'Import Excel' },
];

const statColors = {
  violet: { card: 'border-violet-500/20 hover:border-violet-500/40', label: 'text-violet-400', accent: 'bg-violet-500', value: 'text-violet-300' },
  teal: { card: 'border-emerald-500/20 hover:border-emerald-500/40', label: 'text-emerald-400', accent: 'bg-emerald-500', value: 'text-emerald-300' },
  amber: { card: 'border-amber-500/20 hover:border-amber-500/40', label: 'text-amber-400', accent: 'bg-amber-500', value: 'text-amber-300' },
  pink: { card: 'border-pink-500/20 hover:border-pink-500/40', label: 'text-pink-400', accent: 'bg-pink-500', value: 'text-pink-300' },
};

export default function InstantMenuSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-20">
      <div className="relative bg-[#0a0a18] border border-violet-500/15 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Top gradient strip */}
        <div className="h-[3px] bg-gradient-to-r from-violet-500 via-emerald-400 to-amber-400 animate-pulse" />

        {/* Brand strip */}
        <div className="px-5 md:px-7 py-2.5 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-display font-extrabold text-[13px] text-white">
            <span className="w-[7px] h-[7px] rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] animate-pulse" />
            MrDelivery.AIStudio
          </div>
          <div className="hidden md:block text-[10px] font-mono text-[#5a5a80]">
            Infrastructure by <strong className="text-emerald-400 font-medium">MrDelivery AI Agency</strong>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
              <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse" />
              ON
            </div>
          </div>
        </div>

        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        {/* Header */}
        <div className="px-6 md:px-8 pt-6 pb-5 border-b border-white/[0.06]">
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-[50px] h-[50px] bg-[#161628] border border-white/[0.08] rounded-xl flex items-center justify-center text-2xl shrink-0 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-emerald-400" />
              🍽️
            </motion.div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-[10px] font-mono font-medium uppercase tracking-wider text-violet-300">
                  <span className="w-[5px] h-[5px] rounded-full bg-violet-400 animate-[pulse_1.5s_ease-in-out_infinite]" />
                  Michelin Cinematic Engine
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/12 border border-amber-500/28 text-[10px] font-mono font-medium uppercase tracking-wider text-amber-400">
                  <span className="w-[5px] h-[5px] rounded-full bg-amber-400 animate-[pulse_1.5s_ease-in-out_infinite]" />
                  AI Visual Studio
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl text-white leading-[1.15] tracking-tight mb-2">
                Instant Menu <span className="text-amber-400">Pictures</span>
              </h2>
              <p className="text-[#9090b8] text-sm md:text-base leading-relaxed max-w-2xl">
                Turn any text or photo into a stunning menu image, customized with your logo and restaurant decor. Edit dishes to perfection, keep authenticity, and create premium visuals for websites, delivery apps, and social media — without costly professional photographers.
              </p>
            </div>
          </div>
        </div>

        {/* Actions bar */}
        <div className="px-6 md:px-8 py-3 border-b border-white/[0.06] bg-[#161628] flex items-center gap-2 flex-wrap">
          {actionPills.map((pill, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f0f1c] border border-white/[0.08] rounded-lg text-xs font-medium text-[#9090b8] hover:border-white/[0.15] hover:text-white hover:bg-[#1e1e35] transition-all cursor-pointer">
              {pill.icon} {pill.label}
            </div>
          ))}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-violet-500 border border-violet-500 rounded-lg text-xs font-bold text-white shadow-[0_0_16px_rgba(139,92,246,0.3)] cursor-pointer hover:bg-violet-400 transition-all">
            ✦ Process Menu
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/8 border border-emerald-500/25 rounded-lg text-xs font-medium text-emerald-400 hover:bg-emerald-500/16 transition-all cursor-pointer">
            📷 Capture Live Dish
          </div>
        </div>

        {/* Video */}
        <div className="px-6 md:px-8 py-5 border-b border-white/[0.06]">
          <div className="text-[#5a5a80] text-[10px] uppercase tracking-[0.15em] font-semibold mb-3 flex items-center gap-3">
            Demo — cinematic engine în acțiune
            <span className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-video bg-[#161628] rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <iframe
              src="https://www.youtube.com/embed/JjeXG0TIus8?rel=0&modestbranding=1"
              title="Instant Menu Pictures Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </motion.div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6 relative z-10">
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map((stat, i) => {
              const c = statColors[stat.color as keyof typeof statColors];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative bg-[#0f0f1c] border ${c.card} rounded-xl p-4 overflow-hidden transition-all`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.accent}`} />
                  <div className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${c.label}`}>{stat.label}</div>
                  <div className="font-display font-extrabold text-2xl md:text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-[11px] text-[#5a5a80]">{stat.desc}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Tagline */}
          <p className="font-display font-bold text-white text-lg md:text-xl leading-snug mb-2">
            Fiecare preparat merită să arate <em className="text-amber-400 not-italic">extraordinar</em> — exact ca gustul lui, fără sesiune foto costisitoare.
          </p>
          <p className="text-[#9090b8] text-sm leading-relaxed mb-6 max-w-3xl">
            Instant Menu Pictures folosește un <strong className="text-white font-semibold">motor AI de nivel Michelin</strong> care transformă descrieri text sau fotografii obișnuite în imagini editoriale de calitate studio. Sistemul învață identitatea vizuală a restaurantului tău — logo, paleta de culori, decor interior — și o aplică consistent pe fiecare imagine. Perfect pentru <strong className="text-white font-semibold">website, aplicații delivery, meniuri tipărite și social media</strong>, totul generat în secunde.
          </p>

          {/* Features */}
          <div className="text-[#5a5a80] text-[10px] uppercase tracking-[0.15em] font-semibold mb-3 flex items-center gap-3">
            <span className="w-5 h-px bg-violet-500" />
            Ce face motorul
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 p-3.5 bg-[#161628] border border-white/[0.06] rounded-xl hover:border-violet-500/20 hover:bg-violet-500/[0.04] hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 bg-violet-500/12 border border-violet-500/20 rounded-lg flex items-center justify-center shrink-0 text-sm">{feat.icon}</div>
                <div>
                  <strong className="block text-[13px] text-white font-semibold mb-0.5">{feat.title}</strong>
                  <span className="text-xs text-[#9090b8] leading-relaxed">{feat.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow */}
          <div className="text-[#5a5a80] text-[10px] uppercase tracking-[0.15em] font-semibold mb-3 flex items-center gap-3">
            <span className="w-5 h-px bg-violet-500" />
            Cum funcționează
          </div>
          <div className="bg-[#161628] border border-white/[0.06] rounded-xl p-4 flex items-center flex-wrap justify-center gap-2 mb-6">
            {workflow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#5a5a80] text-sm hidden md:inline">→</span>}
                <div className="flex flex-col items-center gap-2 min-w-[80px] text-center">
                  <div className="w-8 h-8 bg-violet-500/12 border border-violet-500/25 rounded-full flex items-center justify-center font-display text-xs font-bold text-violet-300">
                    {step.step}
                  </div>
                  <div className="text-[11px] text-[#9090b8] leading-snug whitespace-pre-line">{step.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expandable details from HTML */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-violet-500/10 to-amber-500/10 border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍽️</span>
                <div className="text-left">
                  <strong className="block text-sm text-white font-semibold">Instant Menu Pictures — Documentație Completă</strong>
                  <span className="text-xs text-[#9ca3af]">Michelin Cinematic Engine • Ghid complet de utilizare</span>
                </div>
              </div>
              {showDetails ? <ChevronUp size={20} className="text-violet-400" /> : <ChevronDown size={20} className="text-violet-400 group-hover:translate-y-0.5 transition-transform" />}
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-6 bg-[#0a0e1a]/80 border border-[#374151]/50 rounded-2xl p-5 md:p-8">

                    {/* Cum funcționează */}
                    <div>
                      <h3 className="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">🎬 Cum funcționează motorul</h3>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Încarcă meniul sau fotografiile', desc: 'Import din PDF, Excel, poze individuale sau direct prin captură live din aplicație.' },
                          { step: 2, title: 'Setează identitatea vizuală', desc: 'Logo-ul, culorile brandului și decoruri interioare sunt analizate automat de AI.' },
                          { step: 3, title: 'AI generează imaginile', desc: 'Motorul Michelin Cinematic recreează fiecare preparat cu iluminare cinematografică și plating profesional.' },
                          { step: 4, title: 'Editează și refinează', desc: 'Ajustează styling-ul, ingredientele vizibile, fundalul — menținând autenticitatea preparatului.' },
                          { step: 5, title: 'Exportă și publică', desc: 'Download instant în toate formatele: 4K print, web optimized, social media ready.' },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3 p-3 bg-white/[0.02] border-l-2 border-violet-500/50 rounded-r-lg hover:border-amber-500/50 hover:bg-white/[0.04] transition-all">
                            <span className="w-7 h-7 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{s.step}</span>
                            <div>
                              <strong className="block text-sm text-white">{s.title}</strong>
                              <span className="text-xs text-[#9ca3af]">{s.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Formate suportate */}
                    <div>
                      <h3 className="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">📦 Formate de Input Suportate</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { icon: '📄', title: 'PDF / Text Menu', desc: 'Importă meniul complet din orice format text' },
                          { icon: '📊', title: 'Excel / CSV Bulk', desc: 'Procesare simultană a tuturor preparatelor' },
                          { icon: '📷', title: 'Fotografii Telefon', desc: 'Upgrade automat la calitate Michelin' },
                          { icon: '🎙️', title: 'Dictare Vocală', desc: 'Descrie preparatul — AI generează imaginea' },
                        ].map((f, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                            <span className="text-2xl">{f.icon}</span>
                            <div>
                              <strong className="block text-sm text-violet-300">{f.title}</strong>
                              <span className="text-xs text-[#9ca3af]">{f.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Output */}
                    <div>
                      <h3 className="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">🖼️ Output & Export</h3>
                      <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl font-mono text-xs space-y-1">
                        <div><span className="text-violet-400">Website:</span> <span className="text-[#c4dcc8]">WebP optimizat, lazy-load ready</span></div>
                        <div><span className="text-violet-400">Delivery Apps:</span> <span className="text-[#c4dcc8]">Format standard Glovo / Bolt / Tazz</span></div>
                        <div><span className="text-violet-400">Print Menu:</span> <span className="text-[#c4dcc8]">4K resolution, CMYK ready</span></div>
                        <div><span className="text-violet-400">Social Media:</span> <span className="text-[#c4dcc8]">Instagram, Facebook, TikTok formats</span></div>
                        <div><span className="text-violet-400">Brand Consistency:</span> <span className="text-[#c4dcc8]">Logo watermark + decor styling automat</span></div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-3 border-t border-white/[0.06] bg-[#0f0f1c] flex items-center justify-between gap-3 flex-wrap">
          <p className="text-[11px] text-[#5a5a80] font-mono">
            <strong className="text-emerald-400 font-medium">MrDelivery.AIStudio</strong> — Infrastructure by MrDelivery AI Agency
          </p>
          <div className="flex gap-2">
            <a href="#" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#161628] text-[#9090b8] text-xs font-semibold rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all">
              ↗ Documentație
            </a>
            <a href="https://www.youtube.com/watch?v=JjeXG0TIus8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-violet-500 text-white text-xs font-bold rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-violet-400 transition-all">
              ▶ Încearcă gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
