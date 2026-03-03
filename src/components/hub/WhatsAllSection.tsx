import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Send, BarChart3, Brain, Search, Ban, Save, ArrowRight, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

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
