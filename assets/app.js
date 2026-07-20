// Portfólio — Khalil Ravikson. React (UMD) + htm, sem build/servidor.
const { useState, useEffect } = React;
const html = htm.bind(React.createElement);

/* ---------------- DADOS (edite aqui) ---------------- */
const LINKS = {
  github: "https://github.com/Khalil-Ravikson",
  linkedin: "https://www.linkedin.com/in/khalil-ravikson-837683153/",
  email: "khalilrvk2017@gmail.com",
  phone: "(98) 98740-0509",
  cv: "assets/Khalil-Ravikson-Curriculo.pdf",
};

const HERO_TECH = [
  { n: "Python", c: "#3776AB" }, { n: "Pandas", c: "#150458" },
  { n: "Django", c: "#0C4B33" }, { n: "FastAPI", c: "#009688" },
  { n: "React", c: "#61DAFB" }, { n: "Docker", c: "#2496ED" },
  { n: "LangChain", c: "#1C3C3C" }, { n: "Power BI", c: "#F2C811" },
];

const STATS = [
  { n: "35+", l: "Repositórios", ico: html`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path d="M4 6a2 2 0 0 1 2-2h9l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 4v5h5"/></svg>` },
  { n: "10+", l: "Projetos", ico: html`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"/></svg>` },
  { n: "2", l: "Estágios", ico: html`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>` },
  { n: "6", l: "Áreas de atuação", ico: html`<svg fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18"/></svg>` },
];

const SKILLS = [
  { n: "Python", p: 92, c: "#3776AB" },
  { n: "Django", p: 85, c: "#0C4B33" },
  { n: "React / TS", p: 72, c: "#61DAFB" },
  { n: "Pandas & NumPy", p: 85, c: "#150458" },
  { n: "FastAPI", p: 80, c: "#009688" },
  { n: "Docker", p: 70, c: "#2496ED" },
  { n: "scikit-learn / ML", p: 80, c: "#F7931E" },
  { n: "LangChain", p: 75, c: "#1C3C3C" },
  { n: "C / C++", p: 68, c: "#00599C" },
  { n: "Power BI", p: 82, c: "#F2C811" },
  { n: "SQL", p: 78, c: "#dd4b78" },
  { n: "Git & GitHub", p: 85, c: "#F05032" },
];

const PROJECTS = [
  {
    name: "Oráculo — Assistente de IA", tag: "IA · RAG", glyph: "🔮",
    desc: "Chatbot que responde perguntas com base em documentos, usando LangChain e LLMs com embeddings e busca semântica (RAG).",
    stack: ["Python", "LangChain", "LLM"],
    // TODO: troque pela URL real do repositório do Oráculo
    url: "https://github.com/Khalil-Ravikson",
  },
  {
    name: "Gerador de Texto com IA", tag: "Redes Neurais", glyph: "🧠",
    desc: "Rede neural recorrente (LSTM) treinada sobre a obra de Shakespeare para gerar e prever sequências de texto.",
    stack: ["Python", "TensorFlow/Keras", "Jupyter"],
    url: "https://github.com/Khalil-Ravikson/LSTM_For_Shak",
  },
  {
    name: "Processamento de Imagens", tag: "Visão Computacional", glyph: "🖼️",
    desc: "Experimentos de processamento e análise de imagens, com técnicas de pré-processamento e extração de características.",
    stack: ["Python", "OpenCV", "NumPy"],
    url: "https://github.com/Khalil-Ravikson/processamento-de-imagens-em-py",
  },
  {
    name: "Aplicações Web em React", tag: "Front-end", glyph: "⚛️",
    desc: "Projetos de front-end para praticar componentes, hooks e Context API com React e TypeScript.",
    stack: ["React", "TypeScript"],
    url: "https://github.com/Khalil-Ravikson?tab=repositories",
  },
];

/* ---------------- ÍCONES ---------------- */
const Ic = {
  gh: html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.09 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.13-.29-.52-1.46.1-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`,
  li: html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z"/></svg>`,
  mail: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>`,
  phone: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 5 5L16 17l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>`,
  doc: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/></svg>`,
  arrow: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  spark: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
};

/* ---------------- reveal ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const bars = document.querySelectorAll(".bar > i");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      bars.forEach(b => b.style.width = b.dataset.w);
      return;
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          en.target.querySelectorAll?.(".bar > i").forEach(b => b.style.width = b.dataset.w);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* ---------------- COMPONENTES ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const link = (h, l) => html`<a href=${h} onClick=${() => setOpen(false)}>${l}</a>`;
  return html`
    <nav class="nav">
      <div class="nav-in">
        <a class="brand" href="#top"><span class="tag">&lt;/&gt;</span> Khalil Ravikson</a>
        <button class="nav-toggle" aria-label="Menu" onClick=${() => setOpen(o => !o)}><span></span><span></span><span></span></button>
        <div class=${"nav-links" + (open ? " open" : "")}>
          ${link("#sobre", "Sobre")} ${link("#skills", "Skills")} ${link("#projetos", "Projetos")} ${link("#contato", "Contato")}
        </div>
        <a class="nav-cta" href=${LINKS.cv} target="_blank" rel="noopener">${Ic.doc} Currículo</a>
      </div>
    </nav>`;
}

function Hero() {
  return html`
    <header class="hero" id="top">
      <div class="wrap hero-in">
        <div class="reveal">
          <span class="eyebrow">${Ic.spark} Desenvolvedor · IA & Dados</span>
          <h1>Olá, eu sou o <span class="grad">Khalil</span></h1>
          <h2>Transformo dados em soluções inteligentes.</h2>
          <p class="lead">Estudante de Engenharia da Computação (UEMA) com foco em Inteligência Artificial e Análise de Dados. Construo desde modelos de machine learning a aplicações web em Python.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#projetos">Ver projetos</a>
            <a class="btn btn-ghost" href=${LINKS.cv} target="_blank" rel="noopener">${Ic.doc} Baixar currículo</a>
          </div>
          <div class="tech-row">
            <div class="tlabel">Tecnologias que uso</div>
            <div class="tech-chips">
              ${HERO_TECH.map((t, i) => html`<span class="tchip" key=${i}><span class="d" style=${{ background: t.c }}></span>${t.n}</span>`)}
            </div>
          </div>
        </div>
        <div class="hero-visual reveal">
          <div class="photo-orb">
            <img src="assets/profile.jpg" alt="Foto de Khalil Ravikson"/>
          </div>
          <div class="floaty f1"><span class="ico" style=${{ background: "linear-gradient(135deg,#8b5cf6,#7c3aed)" }}>🤖</span> IA & ML</div>
          <div class="floaty f2"><span class="ico" style=${{ background: "linear-gradient(135deg,#0ea5a0,#0c8f88)" }}>📊</span> Análise de Dados</div>
          <div class="code-card">
            <div class="code-bar"><i style=${{ background: "#ff5f56" }}></i><i style=${{ background: "#ffbd2e" }}></i><i style=${{ background: "#27c93f" }}></i><span class="t">dev.py</span></div>
            <div class="code-body">
              <span class="k">dev</span> = {<br/>
              &nbsp;&nbsp;<span class="p">"nome"</span>: <span class="s">"Khalil"</span>,<br/>
              &nbsp;&nbsp;<span class="p">"foco"</span>: [<span class="s">"IA"</span>, <span class="s">"Dados"</span>],<br/>
              &nbsp;&nbsp;<span class="p">"stack"</span>: [<span class="s">"Python"</span>, <span class="s">"ML"</span>],<br/>
              &nbsp;&nbsp;<span class="c"># sempre aprendendo</span><br/>
              }
            </div>
          </div>
        </div>
      </div>
    </header>`;
}

function About() {
  return html`
    <section id="sobre" class="about-sec">
      <div class="wrap about-grid">
        <div class="about-text reveal">
          <span class="eyebrow">Sobre mim</span>
          <h2>Apaixonado por transformar dados em soluções reais</h2>
          <p>Sou <b>Técnico em Eletromecânica</b> cursando <b>Engenharia da Computação na UEMA</b>. Trabalho o ciclo completo de dados — tratamento, treinamento e visualização — e aplico <b>redes neurais e machine learning</b> para predição.</p>
          <p>No back-end construo APIs e aplicações com Django, FastAPI e LangChain. Minha formação técnica soma uma base incomum de <b>eletrônica, IoT e redes</b>, do sensor ao dashboard. Busco <b>estágio ou posição júnior</b> em Dados ou I.A.</p>
        </div>
        <div class="stats reveal">
          ${STATS.map((s, i) => html`
            <div class="stat" key=${i}>
              <div class="ico">${s.ico}</div>
              <div class="n">${s.n}</div>
              <div class="l">${s.l}</div>
            </div>`)}
        </div>
      </div>
    </section>`;
}

function Skills() {
  return html`
    <section id="skills">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Minhas skills</span>
          <h2>Tecnologias que domino</h2>
          <p>Ferramentas que uso no dia a dia — da coleta de dados ao modelo em produção.</p>
        </div>
        <div class="skills-grid reveal">
          ${SKILLS.map((s, i) => html`
            <div class="skill" key=${i}>
              <div class="top">
                <span class="name"><span class="d" style=${{ background: s.c }}></span>${s.n}</span>
                <span class="pct">${s.p}%</span>
              </div>
              <div class="bar"><i data-w=${s.p + "%"}></i></div>
            </div>`)}
        </div>
      </div>
    </section>`;
}

function Projects() {
  return html`
    <section id="projetos" class="projects-sec">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Portfólio</span>
          <h2>Alguns dos meus projetos</h2>
          <p>Uma seleção do que venho construindo. O código completo está no meu GitHub.</p>
        </div>
        <div class="proj-grid">
          ${PROJECTS.map((p, i) => html`
            <a class="proj-card reveal" key=${i} href=${p.url} target="_blank" rel="noopener">
              <div class="proj-thumb">
                <span class="num">0${i + 1}</span>
                <span class="glyph">${p.glyph}</span>
                <span class="ptag">${p.tag}</span>
              </div>
              <div class="proj-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="proj-stack">${p.stack.map((t, j) => html`<span key=${j}>${t}</span>`)}</div>
                <span class="proj-link">Ver projeto ${Ic.arrow}</span>
              </div>
            </a>`)}
        </div>
      </div>
    </section>`;
}

function Contact() {
  return html`
    <section id="contato">
      <div class="wrap">
        <div class="contact-in reveal">
          <div class="contact-l">
            <span class="eyebrow">Vamos conversar</span>
            <h2>Tem uma vaga ou projeto em mente?</h2>
            <p>Estou aberto a oportunidades de estágio e posições júnior em Dados e Inteligência Artificial. Vamos construir algo juntos!</p>
            <a class="btn btn-primary" href=${"mailto:" + LINKS.email}>${Ic.mail} Entrar em contato</a>
          </div>
          <div class="contact-r">
            <a class="cline" href=${"mailto:" + LINKS.email}><span class="ci">${Ic.mail}</span><span><span class="ck">E-mail</span><br/><span class="cv">${LINKS.email}</span></span></a>
            <a class="cline" href=${LINKS.linkedin} target="_blank" rel="noopener"><span class="ci">${Ic.li}</span><span><span class="ck">LinkedIn</span><br/><span class="cv">/khalil-ravikson</span></span></a>
            <a class="cline" href=${LINKS.github} target="_blank" rel="noopener"><span class="ci">${Ic.gh}</span><span><span class="ck">GitHub</span><br/><span class="cv">/Khalil-Ravikson</span></span></a>
          </div>
        </div>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Khalil Ravikson Alcântara do Carmo · São Luís — MA · Feito com <span class="heart">♥</span> em React
      </div>
    </section>`;
}

function App() {
  useReveal();
  return html`<${React.Fragment}>
    <${Nav}/><${Hero}/><${About}/><${Skills}/><${Projects}/><${Contact}/>
  </>`;
}

ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);