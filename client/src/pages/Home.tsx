// Direção visual: boutique alto padrão, acolhedora e humana. Menos elementos, mais respiro, curadoria e atendimento personalizado.
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const heroImage = "/manus-storage/jeova-hero-editorial_daf7e197.jpg";
const dressesImage = "/manus-storage/jeova-categorias-vestidos_99c68712.jpg";
const uniformsImage = "/manus-storage/jeova-fardamentos-atelier_53f367bb.jpg";
const markImage = "/manus-storage/jeova-simbolo_dc19085a.png";
const whatsappUrl = "https://wa.me/5527988807140";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <div className="topline">
        <span>Moda modesta &amp; fardamentos personalizados</span>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Atendimento por WhatsApp <ArrowUpRight size={13} /></a>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Jeová Jireh Moda Modesta">
          <img src={markImage} alt="" className="brand-mark" />
          <span>
            <strong>Jeová Jireh</strong>
            <small>Moda Modesta</small>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#colecao" onClick={() => setMenuOpen(false)}>Coleção</a>
          <a href="#fardamentos" onClick={() => setMenuOpen(false)}>Fardamentos</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a loja</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Fale conosco <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <SectionLabel>Uma forma de se apresentar ao mundo</SectionLabel>
          <h1>Roupa bonita<br /><em>para você.</em></h1>
          <p className="hero-intro">Vestidos, conjuntos e fardamentos para vestir bem, com conforto e propósito.</p>
          <a className="button-primary" href="#colecao">Ver roupas <ArrowUpRight size={17} /></a>
          <p className="hero-note">Gostou de uma peça? Chame no WhatsApp.</p>
        </div>
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Mulher usando vestido modesto em uma boutique" className="hero-image" />
          <div className="hero-caption"><span>01</span><span>Elegância que permanece</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <p>Vista-se bem. Sinta-se bem. Viva o seu propósito.</p>
        <span className="strip-line" />
        <p className="strip-small">Atendimento em Serra e para todo o Brasil</p>
      </section>

      <section id="colecao" className="collection-section section-pad">
        <div className="section-heading">
          <div>
            <SectionLabel>A curadoria</SectionLabel>
            <h2>Veja as<br /><em>novidades.</em></h2>
          </div>
          <p>Escolha uma categoria, veja as peças e fale com a gente para saber tamanho, cor e valor.</p>
        </div>
        <div className="editorial-grid">
          <div className="gallery-grid">
            <a className="editorial-card card-tall" href={whatsappUrl} target="_blank" rel="noreferrer">
              <img src={dressesImage} alt="Vestidos modestos em uma arara de boutique" />
              <div className="card-overlay"><span>01 / Vestidos</span><h3>Vestidos bonitos e confortáveis</h3><ArrowUpRight size={18} /></div>
            </a>
            <a className="editorial-card card-tall gallery-second" href={whatsappUrl} target="_blank" rel="noreferrer">
              <img src={heroImage} alt="Look modesto em tons quentes" />
              <div className="card-overlay"><span>02 / Conjuntos</span><h3>Prontos para usar</h3><ArrowUpRight size={18} /></div>
            </a>
          </div>
          <div className="editorial-side-note">
            <span className="vertical-word">ESCOLHA COM CALMA</span>
            <div><p>Chame a gente. Vamos ajudar.</p><span className="tiny-rule" /></div>
          </div>
        </div>
      </section>

      <section id="fardamentos" className="atelier-section">
        <div className="atelier-image"><img src={uniformsImage} alt="Fardamentos personalizados organizados em um ateliê" /></div>
        <div className="atelier-copy">
          <SectionLabel>Para vestir uma comunidade</SectionLabel>
          <h2>Fardamentos<br /><em>para o seu grupo.</em></h2>
          <p>Fazemos fardamentos para igrejas e departamentos. Envie sua ideia e peça um orçamento pelo WhatsApp.</p>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section id="sobre" className="about-section section-pad">
        <div className="about-mark"><img src={markImage} alt="" /><span>Desde a escolha<br />até o encontro</span></div>
        <div className="about-copy"><SectionLabel>Jeová Jireh</SectionLabel><h2>Fale com<br /><em>a gente.</em></h2><p>Diga o que você procura. A gente ajuda com tamanho, cor e combinação.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={16} /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src={markImage} alt="" /><div><strong>Jeová Jireh</strong><span>Moda Modesta</span></div></div>
        <div className="footer-info"><p><MapPin size={16} /> Av. Argentina, 689 · Vista da Serra 1 · Serra/ES</p><p><MessageCircle size={16} /> (27) 98880-7140</p></div>
        <div className="footer-links"><a href="https://www.instagram.com/jeovajireh_modamodesta/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>Vista-se com propósito.</span><span>© 2026 Jeová Jireh Moda Modesta</span></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar no WhatsApp</a>
    </main>
  );
}
