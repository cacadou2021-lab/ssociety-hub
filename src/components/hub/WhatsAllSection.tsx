import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const features = [
  { icon: '📋', title: 'Citește lista de contacte', desc: 'Import automat din CSV cu nume, telefon, oraș și mesaj personalizat.' },
  { icon: '🔍', title: 'Caută fiecare număr', desc: 'Deschide WhatsApp Desktop și verifică dacă numărul există pe platformă.' },
  { icon: '🚫', title: 'Evită duplicatele', desc: 'Dacă ai mai trimis deja unui contact, îl sare automat.' },
  { icon: '📨', title: 'Trimite și confirmă livrarea', desc: 'Verifică bifele ✓✓ pentru a confirma că mesajul a ajuns.' },
  { icon: '🧠', title: 'Comportament uman', desc: 'Intervale aleatorii, pauze spontane, viteza de tastare simulată.' },
  { icon: '🛡️', title: 'Protecție anti-ban', desc: 'Detectează erori, încetinește automat și intră în pauză de urgență.' },
  { icon: '📊', title: 'Dashboard în timp real', desc: 'Statistici live: trimise, confirmate, eșuate, rată de succes.' },
  { icon: '💾', title: 'Salvează progresul', desc: 'Continuă exact de unde a rămas — niciun contact pierdut.' },
];

const stats = [
  { value: '360h', label: 'Non-stop / lună' },
  { value: '~10', label: 'Mesaje / oră' },
  { value: '0', label: 'Intervenții manuale' },
];

const schedule = [
  { icon: '⏰', title: '09:00 – 20:00', desc: 'Program de lucru activ' },
  { icon: '🍽️', title: '12:00 – 14:00', desc: 'Pauză de prânz automată' },
  { icon: '🔄', title: 'Zilnic, non-stop', desc: 'Reia automat a doua zi' },
  { icon: '⚡', title: '~10 mesaje / oră', desc: 'Ritm natural, sigur' },
];

export default function WhatsAllSection() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-20">
      <div className="relative bg-[#0a0f0d] border border-[#25D366]/15 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden shadow-2xl">
        {/* Top glow strip */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#25D366] to-transparent animate-pulse" />
        
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25D366]/10 blur-[120px] -mr-64 -mt-64 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#128C7E]/5 blur-[100px] -ml-48 -mb-48" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-5 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] shrink-0"
            >
              <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
                <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.354.63 4.656 1.826 6.668L2.667 29.333l6.836-1.792A13.27 13.27 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm6.03 21.054c-.33-.165-1.953-.963-2.256-1.073-.304-.11-.524-.165-.745.165-.22.33-.853 1.073-1.046 1.293-.192.22-.385.248-.715.083-.33-.165-1.392-.513-2.652-1.637-.98-.875-1.642-1.956-1.835-2.286-.192-.33-.02-.508.145-.673.149-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.745-1.8-1.02-2.466-.27-.648-.544-.56-.745-.57-.192-.01-.413-.012-.633-.012s-.578.083-.88.413c-.303.33-1.155 1.128-1.155 2.752s1.183 3.191 1.347 3.413c.165.22 2.328 3.555 5.643 4.986.789.34 1.404.544 1.883.696.79.252 1.51.216 2.079.131.634-.094 1.953-.798 2.229-1.568.275-.77.275-1.43.192-1.568-.082-.137-.303-.22-.633-.385z"/>
              </svg>
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/25 text-[10px] md:text-[11px] font-black text-[#25D366] uppercase tracking-[0.2em] mb-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Activ 24/7 — Automatizare completă
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white leading-[1.15] tracking-tight">
                WhatsAll Bot — <span className="text-[#25D366]">Outreach automat</span><br className="hidden sm:block" /> pe WhatsApp
              </h2>
              <p className="text-[#7a9e84] text-sm md:text-base mt-2">Trimite mesaje personalizate la sute de restaurante — fără să atingi tastatura.</p>
            </div>
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="text-[#7a9e84] text-[11px] uppercase tracking-[0.12em] font-bold mb-3 flex items-center gap-3">
              Demo live
              <span className="flex-1 h-px bg-[#25D366]/15" />
            </div>
            <div className="w-full aspect-video bg-black/40 rounded-2xl overflow-hidden border border-[#25D366]/15">
              <video
                src="/videos/whatsall-prezentare.mp4"
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <p className="font-display font-bold text-white text-lg md:text-2xl leading-snug mb-4">
            Un angajat digital care <em className="text-[#25D366] not-italic">nu doarme niciodată,</em><br />
            nu uită niciun contact și nu greșește niciun mesaj.
          </p>
          <p className="text-[#c4dcc8] text-sm md:text-base leading-relaxed mb-8 max-w-3xl font-light">
            WhatsAll Bot preia lista ta de clienți, deschide WhatsApp Desktop automat,
            caută fiecare număr, verifică dacă nu a mai primit mesaj, lipește textul personalizat și îl trimite —
            unul câte unul, exact ca un om, dar de <strong className="text-[#c8f0ce]">360 de ori mai constant</strong>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#25D366]/5 border border-[#25D366]/15 rounded-2xl p-4 md:p-6 text-center hover:border-[#25D366]/35 hover:bg-[#25D366]/[0.09] transition-all"
              >
                <div className="font-display font-black text-2xl md:text-4xl text-[#25D366] mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-[#7a9e84] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="text-[#7a9e84] text-[11px] uppercase tracking-[0.14em] font-bold mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#25D366]" />
            Ce face botul
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-[#25D366]/20 hover:bg-[#25D366]/[0.04] hover:-translate-y-0.5 transition-all"
              >
                <div className="w-9 h-9 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0 text-base">{feat.icon}</div>
                <div>
                  <strong className="block text-sm text-[#e0f0e3] font-medium">{feat.title}</strong>
                  <span className="text-xs text-[#7a9e84] font-light leading-relaxed">{feat.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-br from-[#25D366]/[0.07] to-[#128C7E]/[0.07] border border-[#25D366]/20 rounded-2xl p-5 md:p-6 flex flex-wrap items-center gap-5 md:gap-6 mb-10">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="hidden md:block w-px h-8 bg-[#25D366]/15 mr-2" />}
                <span className="text-lg">{item.icon}</span>
                <div>
                  <strong className="block text-sm text-white font-medium">{item.title}</strong>
                  <span className="text-[11px] text-[#7a9e84]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Start Guide Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div className="text-left">
                  <strong className="block text-sm text-white font-semibold">Quick Start Guide — MrDelivery Outreach</strong>
                  <span className="text-xs text-[#9ca3af]">v10 Perfect Edition + Dashboard • Click pentru documentație completă</span>
                </div>
              </div>
              {showGuide ? <ChevronUp size={20} className="text-cyan-400" /> : <ChevronDown size={20} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />}
            </button>

            <AnimatePresence>
              {showGuide && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-6 bg-[#0a0e1a]/80 border border-[#374151]/50 rounded-2xl p-5 md:p-8">

                    {/* Ce primești */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">✨ Ce primești</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { icon: '🤖', title: 'Bot Automat WhatsApp', desc: 'Trimitere automată mesaje cu toate protecțiile anti-ban' },
                          { icon: '📊', title: 'Dashboard Live', desc: 'Monitorizare în timp real cu design futuristic' },
                          { icon: '🛡️', title: 'Anti-Ban Protection', desc: 'OCR duplicate check, delay-uri, pauze umane' },
                          { icon: '📈', title: 'Statistici Complete', desc: 'Timeline, rate succes, ETA, și multe altele' },
                        ].map((f, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                            <span className="text-2xl">{f.icon}</span>
                            <div>
                              <strong className="block text-sm text-cyan-300">{f.title}</strong>
                              <span className="text-xs text-[#9ca3af]">{f.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instalare */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">📦 Instalare (Prima Rulare)</h3>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Instalează Python 3.8+', desc: 'Descarcă de pe python.org. ⚠️ Bifează "Add Python to PATH"!' },
                          { step: 2, title: 'Instalează Tesseract OCR', desc: 'Windows: instalează în C:\\Program Files\\Tesseract-OCR' },
                          { step: 3, title: 'Instalează dependențele Python', desc: 'Rulează: pip install -r requirements.txt SAU start.bat → opțiunea [4]' },
                          { step: 4, title: 'Pregătește fișierul startbot.csv', desc: 'Format: Nume,Telefon,Oras — salvat ca UTF-8 (nu UTF-8 BOM), deschis cu Notepad (nu Excel)' },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3 p-3 bg-white/[0.02] border-l-2 border-cyan-500/50 rounded-r-lg hover:border-purple-500/50 hover:bg-white/[0.04] transition-all">
                            <span className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{s.step}</span>
                            <div>
                              <strong className="block text-sm text-white">{s.title}</strong>
                              <span className="text-xs text-[#9ca3af]">{s.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl font-mono text-xs text-emerald-400">
                        Nume,Telefon,Oras<br />
                        Restaurant La Maria,+40712345678,București<br />
                        Pizzeria Antonio,+40723456789,Cluj-Napoca
                      </div>
                    </div>

                    {/* Pornire */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">🚀 Pornire (Zilnică)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                          <strong className="block text-sm text-purple-400 mb-1">Metoda 1: start.bat (Recomandat)</strong>
                          <span className="text-xs text-[#9ca3af]">Dublu-click pe start.bat → Alege [2] Bot + Dashboard → Se deschid 2 ferestre automat</span>
                        </div>
                        <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                          <strong className="block text-sm text-purple-400 mb-1">Metoda 2: Manual</strong>
                          <span className="text-xs text-[#9ca3af]">Terminal 1: python dashboard_server.py → Terminal 2: python mrdelivery_outreach_v10_PERFECT.py → Browser: localhost:5000</span>
                        </div>
                      </div>
                    </div>

                    {/* Checklist */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">✅ Checklist ÎNAINTE de Start</h3>
                      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                        <ul className="space-y-1.5 text-xs text-[#c4dcc8]">
                          {[
                            'WhatsApp Desktop instalat și deschis',
                            'Ești logat în WhatsApp (scan QR code)',
                            'WhatsApp e fereastra ACTIVĂ (nu minimizat)',
                            'Power Settings → Never Sleep',
                            'startbot.csv salvat ca UTF-8',
                            'Mesajul pregătit în clipboard',
                            'Nu vei atinge mouse/tastatura în timpul rulării',
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-emerald-400">✅</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Setări */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">⚙️ Setări Importante</h3>
                      <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl font-mono text-xs space-y-1">
                        <div><span className="text-cyan-400">Ore de lucru:</span> <span className="text-[#c4dcc8]">09:00 - 20:00</span></div>
                        <div><span className="text-cyan-400">Pauză prânz:</span> <span className="text-[#c4dcc8]">12:00 - 14:00</span></div>
                        <div><span className="text-cyan-400">Delay mesaje:</span> <span className="text-[#c4dcc8]">90-240 secunde (1.5-4 minute)</span></div>
                        <div><span className="text-cyan-400">Pauze umane:</span> <span className="text-[#c4dcc8]">20% șansă, 2-8 minute</span></div>
                        <div><span className="text-cyan-400">Countdown:</span> <span className="text-[#c4dcc8]">10 secunde + BEEP</span></div>
                        <div><span className="text-cyan-400">Anti-ban:</span> <span className="text-[#c4dcc8]">3 erori → pauză 20 minute</span></div>
                      </div>
                    </div>

                    {/* Siguranță */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">🛡️ Siguranță & Best Practices</h3>
                      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                        <ul className="space-y-1.5 text-xs text-[#c4dcc8]">
                          {[
                            'Nu trimite peste 50-60 mesaje/oră',
                            'Respectă pauzele de prânz (12:00-14:00)',
                            'Oprește bot-ul peste noapte',
                            'Monitorizează dashboard-ul constant',
                            'La 2+ erori consecutive → verifică manual',
                            'Variază textul mesajelor periodic',
                            'Nu folosi aceeași listă zilnic',
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-emerald-400">✅</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Troubleshooting */}
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">🔧 Probleme Comune</h3>
                      <div className="space-y-3">
                        {[
                          { title: 'Dashboard nu se conectează', items: ['Dashboard server rulează?', 'Port 5000 liber?', 'Firewall nu blochează?'] },
                          { title: 'Bot nu pornește', items: ['WhatsApp Desktop deschis și logat?', 'WhatsApp e fereastra ACTIVĂ?', 'Tesseract instalat corect?'] },
                          { title: 'Erori UTF-8', items: ['Deschide CSV în Notepad (nu Excel)', 'Save As → Encoding: UTF-8 (nu BOM)', 'Salvează'] },
                        ].map((problem, i) => (
                          <div key={i} className="p-3 bg-amber-500/5 border-l-2 border-amber-500/40 rounded-r-lg">
                            <strong className="block text-sm text-amber-400 mb-1">{problem.title}</strong>
                            <ul className="text-xs text-[#9ca3af] space-y-0.5">
                              {problem.items.map((item, j) => (
                                <li key={j}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fișiere & Reset */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-cyan-400 mb-3">📁 Fișiere Generate</h3>
                        <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl font-mono text-xs space-y-1 text-[#9ca3af]">
                          <div><strong className="text-white">outreach_results.csv</strong> — Contacte procesate</div>
                          <div><strong className="text-white">outreach_log.txt</strong> — Log detaliat</div>
                          <div><strong className="text-white">outreach_progress.json</strong> — Progres resume</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-cyan-400 mb-3">🔄 Reset Complet</h3>
                        <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-xs text-[#9ca3af]">
                          <p className="mb-2">Șterge fișierele generate sau folosește:</p>
                          <code className="text-amber-400">start.bat → opțiunea [5]</code>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#25D366]/15">
            <p className="text-sm text-[#7a9e84]">
              Powered by <strong className="text-[#25D366]">WhatsAll Bot</strong> — automatizare WhatsApp pentru afaceri
            </p>
            <motion.a
              href="https://wild-bot-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-all"
            >
              Vezi demo complet
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
