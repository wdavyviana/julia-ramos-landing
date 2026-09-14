# Landing Page — Júlia Ramos (Psicóloga)

Site estático de página única. Sem build, sem dependências — só HTML, CSS e JS puros.

## Estrutura

```
.
├── index.html      # marcação e conteúdo
├── style.css       # estilos (paleta, tipografia, layout, responsivo)
├── script.js       # animação dos ícones ao rolar a página (IntersectionObserver)
└── assets/
    └── foto-hero.jpg
```

## Rodar localmente

Não precisa de servidor — é só abrir o `index.html` no navegador.
Se preferir um servidor local (recomendado pra testar como vai ficar publicado):

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Publicar

**Netlify:** arraste a pasta inteira (com o `assets/`) pro Netlify Drop, ou conecte o repositório do GitHub direto — não precisa de build command, o diretório de publicação é a raiz (`/`).

**GitHub Pages:** em Settings → Pages, selecione a branch e a raiz (`/`) como source.

## Editar

- **Contato/WhatsApp:** o número aparece em 4 lugares no `index.html` (botão do menu, botão do hero, seção final e botão flutuante) — todos usando `https://wa.me/558592596336`. Buscar por esse número pra trocar.
- **Cores:** tudo fica nas variáveis CSS no topo do `style.css` (`:root { --sage: ...; --charcoal: ...; }`).
- **Textos:** direto no `index.html`.
