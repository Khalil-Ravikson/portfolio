// Portfólio — Khalil Ravikson. React (UMD) + htm, sem build/servidor.
const { useState, useEffect, useRef } = React;
const html = htm.bind(React.createElement);

/* ---------------- DADOS (edite aqui) ---------------- */
const LINKS = {
  github: "https://github.com/Khalil-Ravikson",
  linkedin: "https://www.linkedin.com/in/khalil-ravikson-837683153/",
  email: "mailto:khalilrvk2017@gmail.com",
  cv: "assets/Khalil-Ravikson-Curriculo.pdf",
};

const SKILLS = [
  { t: "IA & Machine Learning", items: ["scikit-learn", "Redes Neurais (LSTM)", "pandas", "LangChain", "Visão Computacional"] },
  { t: "Dados & BI", items: ["Power BI", "Excel avançado", "Jupyter", "NumPy"] },
  { t: "Linguagens", items: ["Python", "C/C++", "JavaScript", "TypeScript", "MATLAB", "SQL"] },
  { t: "Back-end & Web", items: ["Django", "FastAPI", "Jinja2", "React"] },
  { t: "IoT & Embarcados", items: ["ESP32", "Arduino", "Raspberry Pi"] },
  { t: "Redes & Infra", items: ["Topologias", "Cisco Packet Tracer", "Draw.io"] },
  { t: "Eletrônica", items: ["Circuitos", "Redes de distribuição de energia"] },
  { t: "CAD & Simulação", items: ["AutoCAD", "CoppeliaSim"] },
  { t: "Metodologias Ágeis", items: ["Scrum", "XP", "Sprints"] },
];

const PROJECTS = [
  {
    name: "LSTM_For_Shak", tag: "Redes Neurais",
    desc: "Rede neural recorrente (LSTM) para geração e predição de sequências de texto — tratamento e treinamento de dados de ponta a ponta em Python.",
    stack: ["Python", "TensorFlow/Keras", "Jupyter"],
    url: "https://github.com/Khalil-Ravikson/LSTM_For_Shak",
  },
  {
    name: "Processamento de Imagens", tag: "Visão Computacional",
    desc: "Experimentos de processamento e análise de imagens, com técnicas de pré-processamento e extração de características.",
    stack: ["Python", "OpenCV", "NumPy"],
    url: "https://github.com/Khalil-Ravikson/processamento-de-imagens-em-py",
  },
  {
    name: "Currículo Web", tag: "Django",
    desc: "Aplicação web pessoal em Django (back-end Python + templates Jinja2). Esta página é a versão estática, hospedada no GitHub Pages.",
    stack: ["Django", "Python", "Jinja2"],
    url: "https://github.com/Khalil-Ravikson",
  },
  {
    name: "Estudos em React / TypeScript", tag: "Front-end",
    desc: "Coleção de projetos de front-end para praticar componentes, hooks e Context API com React e TypeScript.",
    stack: ["React", "TypeScript"],
    url: "https://github.com/Khalil-Ravikson?tab=repositories",
  },
];

const EXPERIENCE = [
  {
    when: "A definir", role: "Estágio em Tecnologia da Informação", org: "CTIC",
    points: [
      "Vivência prática com metodologias ágeis (Scrum, XP e sprints) e trabalho em equipe em ambiente de tecnologia.",
      "Apoio a rotinas de desenvolvimento e suporte de TI, com contato direto com versionamento e organização de tarefas.",
    ],
  },
  {
    when: "Jun – Jul 2019", role: "Estágio — Laboratório de Mecânica (DMM)", org: "IFMA · Campus Monte Castelo",
    points: [
      "Pesquisa aplicada sobre peças e montagem de motores, apoiando a organização e a manutenção do laboratório.",
      "Conclusão das 120h exigidas em 1 mês, encerrando a etapa final do curso Técnico em Eletromecânica.",
    ],
  },
];

const EDUCATION = [
  { deg: "Bacharelado em Engenharia da Computação", inst: "Universidade Estadual do Maranhão (UEMA)", status: "Em andamento" },
  { deg: "Técnico em Eletromecânica", inst: "Instituto Federal do Maranhão (IFMA)", status: null },
  { deg: "Ensino Médio", inst: "Concluído", status: null },
];

/* ---------------- ÍCONES ---------------- */
const Ic = {
  gh: html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.09 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.13-.29-.52-1.46.1-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`,
  li: html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z"/></svg>`,
  mail: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>`,
  doc: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
  arrow: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
};

/* ---------------- HOOK: reveal on scroll ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* ---------------- COMPONENTES ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const link = (href, label) => html`<a href=${href} onClick=${() => setOpen(false)}>${label}</a>`;
  return html`
    <nav class="nav">
      <div class="nav-in">
        <a class="brand" href="#top">Khalil Ravikson<span class="dot">.</span></a>
        <button class="nav-toggle" aria-label="Menu" onClick=${() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
        <div class=${"nav-links" + (open ? " open" : "")}>
          ${link("#sobre", "Sobre")}
          ${link("#skills", "Competências")}
          ${link("#projetos", "Projetos")}
          ${link("#experiencia", "Experiência")}
          ${link("#contato", "Contato")}
        </div>
      </div>
    </nav>`;
}

function Hero() {
  return html`
    <header class="hero" id="top">
      <div class="wrap hero-in">
        <div>
          <div class="eyebrow">Engenharia da Computação · UEMA</div>
          <h1>Khalil Ravikson<br/><span class="accent">Alcântara do Carmo</span></h1>
          <div class="subtitle">Inteligência Artificial & Análise de Dados</div>
          <p class="lead">Desenvolvo soluções em Python — de modelos de machine learning e redes neurais à análise e visualização de dados — unindo base técnica em eletrônica, IoT e redes.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href=${LINKS.cv} target="_blank" rel="noopener">${Ic.doc} Baixar currículo (PDF)</a>
            <a class="btn btn-ghost" href=${LINKS.github} target="_blank" rel="noopener">${Ic.gh} GitHub</a>
            <a class="btn btn-ghost" href=${LINKS.linkedin} target="_blank" rel="noopener">${Ic.li} LinkedIn</a>
          </div>
        </div>
        <div class="hero-photo"><img src="assets/profile.jpg" alt="Foto de Khalil Ravikson"/></div>
      </div>
    </header>`;
}

function SecHead({ kicker, title, sub }) {
  return html`
    <div class="sec-head reveal">
      <div class="sec-kicker">${kicker}</div>
      <h2>${title}</h2>
      ${sub && html`<p>${sub}</p>`}
    </div>`;
}

function About() {
  return html`
    <section id="sobre">
      <div class="wrap">
        ${html`<${SecHead} kicker="Perfil" title="Sobre mim" />`}
        <div class="about-grid reveal">
          <div class="about-text">
            <p>Sou estudante de <b>Engenharia da Computação (UEMA)</b> e Técnico em Eletromecânica, com foco em <b>Inteligência Artificial e Análise de Dados</b>.</p>
            <p>Trabalho o ciclo completo de dados: <b>tratamento, treinamento e visualização</b>, aplicando <b>redes neurais e machine learning</b> para predição. No back-end, construo APIs e aplicações web com Django, FastAPI e LangChain.</p>
            <p>Minha formação em eletromecânica soma uma base incomum: <b>eletrônica, circuitos, IoT e redes</b> — do sensor ao dashboard. Busco oportunidade de <b>estágio ou posição júnior</b> em Dados ou I.A.</p>
          </div>
          <div class="facts">
            <div class="fact"><span class="k">Localização</span><span class="v">São Luís / Paço do Lumiar — MA</span></div>
            <div class="fact"><span class="k">Foco</span><span class="v">I.A. & Análise de Dados</span></div>
            <div class="fact"><span class="k">Formação</span><span class="v">Eng. da Computação (cursando)</span></div>
            <div class="fact"><span class="k">Idiomas</span><span class="v">Português · Inglês (técnico)</span></div>
            <div class="fact"><span class="k">Disponibilidade</span><span class="v">Estágio / Júnior</span></div>
          </div>
        </div>
      </div>
    </section>`;
}

function Skills() {
  return html`
    <section id="skills" class="skills-sec">
      <div class="wrap">
        ${html`<${SecHead} kicker="Stack" title="Competências técnicas" sub="Ferramentas e tecnologias que uso no dia a dia, organizadas por área." />`}
        <div class="skills-grid">
          ${SKILLS.map((s, i) => html`
            <div class="skill-card reveal" key=${i}>
              <h3><span class="mk"></span>${s.t}</h3>
              <div class="chips">${s.items.map((it, j) => html`<span class="chip" key=${j}>${it}</span>`)}</div>
            </div>`)}
        </div>
      </div>
    </section>`;
}

function Projects() {
  return html`
    <section id="projetos">
      <div class="wrap">
        ${html`<${SecHead} kicker="Trabalhos" title="Projetos em destaque" sub="Seleção de projetos — o código completo está no meu GitHub." />`}
        <div class="proj-grid">
          ${PROJECTS.map((p, i) => html`
            <a class="proj-card reveal" key=${i} href=${p.url} target="_blank" rel="noopener">
              <div class="proj-top">
                <h3>${p.name}</h3>
                <span class="proj-tag">${p.tag}</span>
              </div>
              <p>${p.desc}</p>
              <div class="proj-stack">${p.stack.map((t, j) => html`<span key=${j}>${t}</span>`)}</div>
              <span class="proj-link">Ver no GitHub ${Ic.arrow}</span>
            </a>`)}
        </div>
      </div>
    </section>`;
}

function ExperienceEducation() {
  return html`
    <section id="experiencia" class="skills-sec">
      <div class="wrap">
        <div class="two-col">
          <div>
            ${html`<${SecHead} kicker="Trajetória" title="Experiência" />`}
            <div class="tl reveal">
              ${EXPERIENCE.map((e, i) => html`
                <div class="tl-item" key=${i}>
                  <div class="when">${e.when}</div>
                  <h3>${e.role}</h3>
                  <div class="org">${e.org}</div>
                  <ul>${e.points.map((pt, j) => html`<li key=${j}>${pt}</li>`)}</ul>
                </div>`)}
            </div>
          </div>
          <div>
            ${html`<${SecHead} kicker="Acadêmico" title="Formação" />`}
            <div class="tl reveal">
              ${EDUCATION.map((ed, i) => html`
                <div class="tl-item" key=${i}>
                  <h3>${ed.deg}</h3>
                  <div class="org">${ed.inst}</div>
                  ${ed.status && html`<span class="status">${ed.status}</span>`}
                </div>`)}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function Footer() {
  return html`
    <footer class="footer" id="contato">
      <div class="wrap">
        <h2 class="reveal">Vamos conversar?</h2>
        <p class="reveal">Estou aberto a oportunidades de estágio e posições júnior em Dados e Inteligência Artificial.</p>
        <div class="footer-links reveal">
          <a class="btn btn-primary" href=${LINKS.email}>${Ic.mail} E-mail</a>
          <a class="btn btn-ghost" href=${LINKS.linkedin} target="_blank" rel="noopener">${Ic.li} LinkedIn</a>
          <a class="btn btn-ghost" href=${LINKS.github} target="_blank" rel="noopener">${Ic.gh} GitHub</a>
        </div>
        <div class="foot-note">© ${new Date().getFullYear()} Khalil Ravikson Alcântara do Carmo · São Luís — MA · Feito com React, publicado no GitHub Pages</div>
      </div>
    </footer>`;
}

function App() {
  useReveal();
  return html`<${React.Fragment}>
    <${Nav}/>
    <${Hero}/>
    <${About}/>
    <${Skills}/>
    <${Projects}/>
    <${ExperienceEducation}/>
    <${Footer}/>
  </>`;
}

ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);
