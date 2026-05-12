import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search, FileText, Megaphone, Scale, File, Heart,
  MapPin, Phone, Mail, Clock, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COMUPE — Consórcio dos Municípios Pernambucanos" },
      { name: "description", content: "O COMUPE une municípios pernambucanos para compras coletivas, licitações compartilhadas e serviços de excelência." },
      { property: "og:title", content: "COMUPE — Consórcio dos Municípios Pernambucanos" },
      { property: "og:description", content: "Gestão pública municipal mais eficiente em Pernambuco." },
    ],
  }),
  component: Index,
});

function HexIcon({ className = "", color = "#0F4C9A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5l9.5 5.5v10L12 22.5 2.5 17V7L12 1.5z" />
    </svg>
  );
}

const navLinks = [
  { label: "Consorciados", href: "#municipios" },
  { label: "Institucional", href: "#hero" },
  { label: "Licitações", href: "#licitacoes" },
  { label: "Agenda", href: "#noticias" },
  { label: "Ouvidoria", href: "#acesso" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 md:px-11 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <HexIcon className="w-7 h-7" />
          <div className="leading-tight">
            <div className="font-bold text-[15px] text-primary tracking-tight">COMUPE</div>
            <div className="text-[9px] text-soft-foreground">Consórcio dos Municípios Pernambucanos</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[11px] font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contato" className="bg-primary text-white text-[11px] font-semibold px-4 py-[7px] rounded-[7px] hover:opacity-90 transition-opacity">
            Contato
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-card-border bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[13px] font-medium text-muted-foreground">
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="bg-primary text-white text-[12px] font-semibold px-4 py-2 rounded-[7px] text-center">
            Contato
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative bg-primary pt-28 pb-16 px-6 md:px-11 overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.03 }}
      />
      <div
        className="absolute top-10 right-40 w-56 h-56 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.04 }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-medium text-white"
          style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
          Entidade Pública · Pernambuco
        </div>
        <h1
          className="mt-6 text-[30px] md:text-[42px] font-bold text-white leading-[1.25] max-w-2xl"
          style={{ letterSpacing: "-0.5px" }}
        >
          Gestão pública municipal mais <span style={{ color: "#93c5fd" }}>eficiente</span>
        </h1>
        <p
          className="mt-5 text-[13px] font-normal max-w-[360px]"
          style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}
        >
          O COMUPE une municípios pernambucanos para compras coletivas, licitações compartilhadas e serviços de excelência.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#municipios" className="bg-white text-primary font-bold text-[12px] px-5 py-3 rounded-[8px] hover:opacity-95 transition">
            Conheça o COMUPE
          </a>
          <a
            href="#licitacoes"
            className="text-white font-semibold text-[12px] px-5 py-3 rounded-[8px] transition"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)" }}
          >
            Ver licitações →
          </a>
        </div>
        <div
          className="mt-10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {[
            { n: "+30", l: "Municípios consorciados" },
            { n: "+200", l: "Licitações realizadas" },
            { n: "2011", l: "Ano de fundação" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[22px] font-bold text-white">{s.n}</div>
              <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ badge, badgeStyle, title, subtitle, titleColor = "#0d1b2e", subtitleColor = "#6b7280" }: {
  badge: string; badgeStyle?: React.CSSProperties; title: string; subtitle: string; titleColor?: string; subtitleColor?: string;
}) {
  return (
    <div className="mb-9">
      <span
        className="inline-block text-[10px] font-semibold uppercase px-3 py-1 rounded-full"
        style={{ letterSpacing: "0.4px", color: "#0F4C9A", backgroundColor: "#e8f0fc", ...badgeStyle }}
      >
        {badge}
      </span>
      <h2 className="mt-3 text-[22px] font-bold" style={{ color: titleColor, letterSpacing: "-0.4px" }}>{title}</h2>
      <p className="mt-2 text-[12px]" style={{ color: subtitleColor }}>{subtitle}</p>
    </div>
  );
}

function OutlineButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <div className="mt-9 flex justify-center">
      <a
        href={href}
        className="text-[12px] font-semibold text-primary px-7 py-3 rounded-[8px] bg-white"
        style={{ border: "1.5px solid #0F4C9A" }}
      >
        {children}
      </a>
    </div>
  );
}

const licitacoes = [
  { tag: "Veículos", tagBg: "#fef3c7", tagText: "#92400e", proc: "P.L. Nº 07/2026 — P.E. Nº 05/2026", titulo: "Novo edital de aquisição de veículos para municípios" },
  { tag: "Informática", tagBg: "#dbeafe", tagText: "#1e40af", proc: "P.L. Nº 06/2026 — P.E. Nº 04/2026", titulo: "Edital de equipamentos de informática e tecnologia" },
  { tag: "Medicamentos", tagBg: "#dcfce7", tagText: "#166534", proc: "P.L. Nº 05/2026 — P.E. Nº 03/2026", titulo: "Edital de medicamentos e material médico-hospitalar" },
];

function Licitacoes() {
  return (
    <section id="licitacoes" className="bg-white py-[52px] px-6 md:px-11">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="Transparência" title="Licitações recentes" subtitle="Processos licitatórios abertos disponíveis para os municípios consorciados." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {licitacoes.map((c) => (
            <article
              key={c.proc}
              className="rounded-[14px] p-[24px_22px] flex flex-col relative overflow-hidden group transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#0d1b2e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#fbbf24" }} />
              <span
                className="self-start text-[10px] font-semibold px-2.5 py-1 rounded-md"
                style={{ backgroundColor: "rgba(251,191,36,0.15)", color: "#fbbf24" }}
              >
                {c.tag}
              </span>
              <div className="mt-3 text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{c.proc}</div>
              <h3 className="mt-2 text-[13px] font-semibold flex-1 text-white" style={{ lineHeight: 1.55 }}>
                {c.titulo}
              </h3>
              <a href="#" className="mt-4 text-[11px] font-semibold no-underline" style={{ color: "#fbbf24" }}>Ver edital →</a>
            </article>
          ))}
        </div>
        <OutlineButton href="#">Ver todas as licitações →</OutlineButton>
      </div>
    </section>
  );
}

const noticias = [
  { bg: "#dbeafe", data: "Nov 2023", titulo: "Comupe promove curso para técnicos na nova lei de licitações" },
  { bg: "#dcfce7", data: "Out 2023", titulo: "Destinação de 2.160 exames de mamografia a municípios consorciados" },
  { bg: "#fef3c7", data: "Dez 2025", titulo: "Contratação de serviços de gestão de mídias sociais e produção audiovisual" },
];

function Noticias() {
  return (
    <section id="noticias" className="py-[52px] px-6 md:px-11" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="Novidades" title="Notícias" subtitle="Fique por dentro das últimas novidades e ações do COMUPE." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {noticias.map((c) => (
            <article
              key={c.titulo}
              className="rounded-[14px] overflow-hidden transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#0d1b2e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                style={{
                  height: 90,
                  background: `linear-gradient(135deg, ${c.bg} 0%, rgba(15,76,154,0.6) 100%)`,
                  position: "relative",
                }}
              >
                <div className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-md" style={{ backgroundColor: "#fbbf24", color: "#0d1b2e" }}>
                  {c.data}
                </div>
              </div>
              <div className="p-[18px_20px]">
                <h3 className="text-[13px] font-semibold text-white" style={{ lineHeight: 1.55 }}>{c.titulo}</h3>
                <a href="#" className="mt-3 inline-block text-[11px] font-semibold" style={{ color: "#fbbf24" }}>Leia mais →</a>
              </div>
            </article>
          ))}
        </div>
        <OutlineButton href="#">Ver todas as notícias →</OutlineButton>
      </div>
    </section>
  );
}

const portais = [
  { Icon: Search, label: "Portal da Transparência", sub: "Dados públicos" },
  { Icon: FileText, label: "e-SIC", sub: "Sistema de Informação ao Cidadão" },
  { Icon: Megaphone, label: "e-Ouvidoria", sub: "Registre sua manifestação" },
  { Icon: Scale, label: "TCE-PE", sub: "Tribunal de Contas" },
  { Icon: File, label: "Portal de Licitações", sub: "Editais e processos" },
  { Icon: Heart, label: "Contratações COVID-19", sub: "Lei Federal 13.979/2020" },
];

function Acesso() {
  return (
    <section id="acesso" className="py-[52px] px-6 md:px-11" style={{ backgroundColor: "#0d1b2e" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Portais"
          badgeStyle={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
          title="Acesso rápido"
          subtitle="Links diretos para os principais portais e sistemas institucionais."
          titleColor="#ffffff"
          subtitleColor="rgba(255,255,255,0.5)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portais.map(({ Icon, label, sub }) => (
            <a
              key={label}
              href="#"
              className="rounded-[12px] p-[20px_18px] flex items-center gap-3.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(15,76,154,0.5)" }}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-white">{label}</div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const municipios = [
  { i: "AF", n: "Afogados da Ingazeira", r: "Sertão do Pajeú" },
  { i: "AR", n: "Arcoverde", r: "Sertão Central" },
  { i: "CA", n: "Caruaru", r: "Agreste Central" },
  { i: "OL", n: "Olinda", r: "Região Metropolitana" },
  { i: "IG", n: "Igarassu", r: "Mata Norte" },
  { i: "ST", n: "Serra Talhada", r: "Sertão do Pajeú" },
];

function Municipios() {
  const [q, setQ] = useState("");
  const filtered = municipios.filter((m) => m.n.toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="municipios" className="py-[52px] px-6 md:px-11" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="Rede" title="Municípios consorciados" subtitle="Encontre informações sobre os municípios que fazem parte do COMUPE." />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar município..."
          className="w-full bg-white rounded-[9px] px-4 py-2.5 text-[12px] mb-5 outline-none focus:border-primary"
          style={{ border: "1.5px solid #e5e7eb" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <div key={m.n} className="bg-white border border-card-border rounded-[10px] p-[14px_16px] flex items-center gap-2.5">
              <div
                className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-[11px] font-bold text-primary shrink-0"
                style={{ backgroundColor: "#e8f0fc" }}
              >
                {m.i}
              </div>
              <div>
                <div className="text-[12px] font-semibold" style={{ color: "#1a2744" }}>{m.n}</div>
                <div className="text-[10px] text-soft-foreground">{m.r}</div>
              </div>
            </div>
          ))}
        </div>
        <OutlineButton href="#">Ver todos os municípios →</OutlineButton>
      </div>
    </section>
  );
}

const contatos = [
  { Icon: MapPin, label: "Endereço", value: "Av. Recife, 6205 — Jardim São Paulo / Recife-PE · CEP 50910-380" },
  { Icon: Phone, label: "Telefone", value: "(81) 3455-5131" },
  { Icon: Mail, label: "E-mail", value: "comupe@comupe.org" },
  { Icon: Clock, label: "Atendimento", value: "Segunda a sexta / 08h às 17h" },
];

function Contato() {
  return (
    <section id="contato" className="bg-white py-[52px] px-6 md:px-11">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="Fale conosco" title="Contato" subtitle="Envie sua mensagem e retornaremos em breve." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { id: "nome", label: "Nome completo", type: "text" },
              { id: "email", label: "E-mail", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[11px] font-semibold mb-1.5" style={{ color: "#374151", letterSpacing: "0.1px" }}>
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  className="w-full bg-white rounded-[8px] px-3 py-2.5 text-[12px] outline-none focus:border-primary"
                  style={{ border: "1.5px solid #e5e7eb" }}
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="block text-[11px] font-semibold mb-1.5" style={{ color: "#374151", letterSpacing: "0.1px" }}>
                Mensagem
              </label>
              <textarea
                id="msg"
                rows={5}
                className="w-full bg-white rounded-[8px] px-3 py-2.5 text-[12px] outline-none focus:border-primary resize-none"
                style={{ border: "1.5px solid #e5e7eb" }}
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-bold text-[12px] py-3 rounded-[8px] hover:opacity-95 transition">
              Enviar mensagem
            </button>
          </form>
          <div className="flex flex-col gap-5">
            {contatos.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0" style={{ backgroundColor: "#e8f0fc" }}>
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-soft-foreground" style={{ letterSpacing: "0.5px" }}>{label}</div>
                  <div className="text-[12px] font-medium mt-0.5" style={{ color: "#1a2744", lineHeight: 1.6 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Navegação", links: ["Consorciados", "Institucional", "Licitações", "Agenda"] },
    { h: "Portais", links: ["Portal da Transparência", "e-SIC", "e-Ouvidoria", "TCE-PE"] },
    { h: "Contato", links: ["comupe@comupe.org", "(81) 3455-5131", "Fale conosco"] },
  ];
  return (
    <footer style={{ backgroundColor: "#07111f" }} className="px-6 md:px-11 pt-14 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <HexIcon className="w-5 h-5" color="#ffffff" />
              <span className="text-white text-[14px] font-bold">COMUPE</span>
            </div>
            <p className="mt-4 text-[10px]" style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              Consórcio dos Municípios Pernambucanos<br />
              CNPJ: 22.824.173/0001-67<br />
              Av. Recife, 6205 — Recife-PE
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-[10px] font-bold uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.6px" }}>
                {c.h}
              </div>
              <ul className="flex flex-col gap-[7px]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[11px] no-underline" style={{ color: "rgba(255,255,255,0.45)" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 COMUPE — Todos os direitos reservados</span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Desenvolvido com ♥ em Pernambuco</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Licitacoes />
        <Noticias />
        <Acesso />
        <Municipios />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
