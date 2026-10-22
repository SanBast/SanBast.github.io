# Vincenzo Marcianò portfolio

Static personal research website. Design adapted, with permission, from
[Marco Mistretta's website](https://marcomistretta.github.io/).

Everything served lives in `site/`:

- `site/index.html`: all page content (news, publications, experience, contacts)
- `site/assets/js/main.js`: interactions, plus the BibTeX entries in `bibtexData`
- `site/assets/css/main.css`: styles (accent colours are the `--accent*` tokens at the top)

## Preview locally

```sh
python3 -m http.server 8000 --directory site
```

Pushes to the `source` branch are deployed automatically with GitHub Pages.
The previous React version is kept on the `react-site` branch.
