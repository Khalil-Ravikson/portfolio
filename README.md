# Portfólio — Khalil Ravikson

Site pessoal de uma página (React), **sem servidor e sem build**. Todos os arquivos
(React, fontes, foto, PDF) já estão dentro de `assets/`, então é só publicar.

## Como publicar no GitHub Pages (grátis, ~3 min)

1. Crie um repositório novo no GitHub, por exemplo: **`portfolio`**.
2. Envie **todos** os arquivos desta pasta (o `index.html` precisa ficar na raiz do repositório).
   - Pelo site do GitHub: botão **Add file → Upload files**, arraste tudo, **Commit**.
   - Ou por linha de comando:
     ```bash
     git init
     git add .
     git commit -m "Portfólio"
     git branch -M main
     git remote add origin https://github.com/Khalil-Ravikson/portfolio.git
     git push -u origin main
     ```
3. No repositório: **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, selecione a branch **`main`** e a pasta **`/ (root)`**. Salve.
5. Aguarde ~1 minuto. O site fica em:
   **`https://khalil-ravikson.github.io/portfolio/`**

> Dica: se quiser o endereço curto `https://khalil-ravikson.github.io` (sem `/portfolio`),
> nomeie o repositório exatamente como **`Khalil-Ravikson.github.io`**.

## Como editar o conteúdo

Abra `assets/app.js`. No topo do arquivo estão os blocos de dados
(`LINKS`, `SKILLS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`) — é só trocar os textos.
Nenhum passo de compilação é necessário: salve e recarregue a página.

- **Trocar a foto:** substitua `assets/profile.jpg` (mantendo o nome).
- **Atualizar o currículo:** substitua `assets/Khalil-Ravikson-Curriculo.pdf`.
- **Cores/tipografia:** editáveis em `assets/styles.css` (variáveis no topo, `:root`).

## Estrutura

```
index.html
assets/
  app.js         → componentes React (edite os dados aqui)
  styles.css     → estilos e variáveis de cor
  react.min.js   → React 18 (local)
  react-dom.min.js
  htm.js         → JSX sem build
  *.woff2        → fontes Inter e Sora
  profile.jpg    → foto
  Khalil-Ravikson-Curriculo.pdf
```
