// Direção visual: loja mobile-first com clima de pôr do sol frio, linguagem simples, referências de luz/terra/linho e foco em atendimento por WhatsApp.
import { ArrowRight, ArrowUpRight, ChevronRight, Instagram, MapPin, Menu, MessageCircle, Search, X } from "lucide-react";
import { useState } from "react";

const heroImage = "/manus-storage/jeova-hero-editorial_daf7e197.jpg";
const dressesImage = "/manus-storage/jeova-categorias-vestidos_99c68712.jpg";
const uniformsImage = "/manus-storage/jeova-fardamentos-atelier_53f367bb.jpg";
const markImage = "/manus-storage/jeova-simbolo_dc19085a.png";
const whatsappUrl = "https://wa.me/5527988807140";

const categories = [
  { name: "Vestidos", image: dressesImage, alt: "Vestidos modestos" },
  { name: "Conjuntos", image: heroImage, alt: "Conjunto modesto" },
  { name: "Fardamentos", image: uniformsImage, alt: "Fardamentos para igrejas" },
  { name: "Novidades", image: dressesImage, alt: "Novidades da loja" },
];

const products = [
  { name: "Vestido Clara", detail: "Malha confortável · consulte cores", image: dressesImage },
  { name: "Conjunto Elegance", detail: "Caimento bonito · consulte tamanhos", image: heroImage },
  { name: "Fardamento da sua igreja", detail: "Faça seu orçamento", image: uniformsImage },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <a className="product-card" href={whatsappUrl} target="_blank" rel="noreferrer">
      <div className="product-image"><img src={product.image} alt={product.name} /><span>Ver peça <ArrowUpRight size={14} /></span></div>
      <div className="product-meta"><h3>{product.name}</h3><p>{product.detail}</p><strong>Falar com a loja</strong></div>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="shop-shell">
      <div className="benefit-bar"><span>Moda modesta para vestir bem</span><span>Atendimento rápido no WhatsApp</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Chamar agora <ArrowUpRight size={13} /></a></div>

      <header className="shop-header">
        <a className="brand" href="#inicio" aria-label="Jeová Jireh Moda Modesta"><img src={markImage} alt="" className="brand-mark" /><span><strong>Jeová Jireh</strong><small>Moda Modesta</small></span></a>
        <nav className={menuOpen ? "shop-nav open" : "shop-nav"}>
          <a href="#categorias" onClick={closeMenu}>Categorias</a><a href="#novidades" onClick={closeMenu}>Novidades</a><a href="#fardamentos" onClick={closeMenu}>Fardamentos</a><a href="#sobre" onClick={closeMenu}>A loja</a>
          <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={15} /> WhatsApp</a>
        </nav>
        <div className="header-actions"><button aria-label="Buscar"><Search size={19} /></button><button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </header>

      <section id="inicio" className="shop-hero">
        <div className="hero-text"><p className="eyebrow">Vista-se com propósito</p><h1>Roupa bonita<br /><em>para você.</em></h1><p className="hero-description">Vestidos, conjuntos e fardamentos para a sua rotina, para a igreja e para os dias especiais.</p><div className="hero-actions"><a className="shop-button" href="#novidades">Ver novidades <ArrowRight size={17} /></a><a className="hero-link" href={whatsappUrl} target="_blank" rel="noreferrer">Precisa de ajuda? <ArrowUpRight size={15} /></a></div></div>
        <div className="hero-photo"><img src={heroImage} alt="Vestido modesto em tons claros e azul do céu" /><span className="photo-tag">Peças escolhidas com cuidado</span></div>
      </section>

      <section className="trust-row"><div><span className="trust-icon">✦</span><strong>Escolha sem pressa</strong><small>A gente ajuda pelo WhatsApp</small></div><div><span className="trust-icon">◌</span><strong>Tamanhos e cores</strong><small>Consulte antes de comprar</small></div><div><span className="trust-icon">⌁</span><strong>Fardamentos</strong><small>Peça seu orçamento</small></div></section>

      <section id="categorias" className="shop-section categories-section"><div className="section-top"><div><p className="eyebrow">Encontre o que procura</p><h2>Comprar por<br /><em>categoria</em></h2></div><a className="see-all" href="#novidades">Ver tudo <ArrowRight size={15} /></a></div><div className="category-scroll">{categories.map((category) => <a className="category-card" href={whatsappUrl} target="_blank" rel="noreferrer" key={category.name}><img src={category.image} alt={category.alt} /><span>{category.name}</span><ArrowUpRight size={15} /></a>)}</div></section>

      <section id="novidades" className="shop-section products-section"><div className="section-top"><div><p className="eyebrow">Para você ver primeiro</p><h2>Peças da<br /><em>semana</em></h2></div><p className="section-note">Gostou? Clique na peça e fale com a loja para saber valor, tamanho e cor.</p></div><div className="products-grid">{products.map((product) => <ProductCard product={product} key={product.name} />)}</div></section>

      <section id="fardamentos" className="uniform-banner"><div className="uniform-photo"><img src={uniformsImage} alt="Fardamentos organizados em um ateliê" /></div><div className="uniform-copy"><p className="eyebrow">Para igrejas e departamentos</p><h2>O seu grupo<br /><em>com a mesma identidade.</em></h2><p>Conte para nós o que você precisa. Fazemos fardamentos para jovens, senhoras, crianças, obreiros e corais.</p><a className="shop-button light" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento <ArrowRight size={17} /></a></div></section>

      <section id="sobre" className="about-strip"><img src={markImage} alt="" /><div><p className="eyebrow">Jeová Jireh Moda Modesta</p><h2>Você escolhe.<br /><em>A gente cuida.</em></h2></div><a className="shop-button outline" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a loja <MessageCircle size={16} /></a></section>

      <footer className="shop-footer"><div className="footer-brand"><img src={markImage} alt="" /><div><strong>Jeová Jireh</strong><span>Moda Modesta</span></div></div><div className="footer-address"><p><MapPin size={15} /> Av. Argentina, 689 · Vista da Serra 1 · Serra/ES</p><p><MessageCircle size={15} /> (27) 98880-7140</p></div><div className="footer-social"><a href="https://www.instagram.com/jeovajireh_modamodesta/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>Vista-se com propósito.</span><span>© 2026 Jeová Jireh Moda Modesta</span></div></footer>
      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar no WhatsApp</a>
    </main>
  );
}
