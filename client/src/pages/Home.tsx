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
          <h1>Vista o que<br /><em>representa</em> você.</h1>
          <p className="hero-intro">Moda modesta pensada para acompanhar a sua rotina com elegância, conforto e propósito.</p>
          <a className="button-primary" href="#colecao">Conheça a curadoria <ArrowUpRight size={17} /></a>
          <p className="hero-note">Peças escolhidas com cuidado. Atendimento próximo, do nosso jeito.</p>
        </div>
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Mulher usando vestido modesto em uma boutique" className="hero-image" />
          <div className="hero-caption"><span>01</span><span>Elegância que permanece</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <p>Uma boutique para quem entende que vestir-se também é uma maneira de cuidar de si.</p>
        <span className="strip-line" />
        <p className="strip-small">Serra · Espírito Santo</p>
      </section>

      <section id="colecao" className="collection-section section-pad">
        <div className="section-heading">
          <div>
            <SectionLabel>A curadoria</SectionLabel>
            <h2>Escolhas para<br /><em>dias importantes.</em></h2>
          </div>
          <p>Uma seleção de peças com caimento, presença e discrição. Para a igreja, para o trabalho, para as ocasiões que pedem algo especial — e para todos os dias no meio delas.</p>
        </div>
        <div className="editorial-grid">
          <a className="editorial-card card-tall" href={whatsappUrl} target="_blank" rel="noreferrer">
            <img src={dressesImage} alt="Vestidos modestos em uma arara de boutique" />
            <div className="card-overlay"><span>01 / Coleção</span><h3>Vestidos &amp; conjuntos</h3><ArrowUpRight size={18} /></div>
          </a>
          <div className="editorial-side-note">
            <span className="vertical-word">MODA MODESTA</span>
            <div><p>Os detalhes fazem a diferença.</p><span className="tiny-rule" /></div>
          </div>
        </div>
      </section>

      <section id="fardamentos" className="atelier-section">
        <div className="atelier-image"><img src={uniformsImage} alt="Fardamentos personalizados organizados em um ateliê" /></div>
        <div className="atelier-copy">
          <SectionLabel>Para vestir uma comunidade</SectionLabel>
          <h2>Fardamentos<br /><em>com identidade.</em></h2>
          <p>Desenvolvemos fardamentos personalizados para igrejas e departamentos: jovens, senhoras, crianças, obreiros e corais. Cada pedido é tratado com atenção para que o resultado represente o propósito de vocês.</p>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre um projeto <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section id="sobre" className="about-section section-pad">
        <div className="about-mark"><img src={markImage} alt="" /><span>Desde a escolha<br />até o encontro</span></div>
        <div className="about-copy"><SectionLabel>Jeová Jireh</SectionLabel><h2>Um atendimento<br /><em>que olha de perto.</em></h2><p>Você não precisa escolher sozinha. Conte o que procura, para qual ocasião e como gosta de se sentir. A gente ajuda a encontrar a peça certa — com tempo, conversa e atenção aos detalhes.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a loja <MessageCircle size={16} /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src={markImage} alt="" /><div><strong>Jeová Jireh</strong><span>Moda Modesta</span></div></div>
        <div className="footer-info"><p><MapPin size={16} /> Av. Argentina, 689 · Vista da Serra 1 · Serra/ES</p><p><MessageCircle size={16} /> (27) 98880-7140</p></div>
        <div className="footer-links"><a href="https://www.instagram.com/jeovajireh_modamodesta/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>Vista-se com propósito.</span><span>© 2026 Jeová Jireh Moda Modesta</span></div>
      </footer>
    </main>
  );
}
