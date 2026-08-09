# srivatsan6923.github.io

Personal site. Jekyll, built and served by GitHub Pages from `main`.

## Local preview

```bash
docker compose up          # http://localhost:4000, live-reloads on save
```

First run installs gems into a Docker volume (a few minutes); later runs start in seconds.
No Ruby needed on the host.

## Where the content lives

Content is data, not markup — edit YAML, not HTML.

| What | File |
|---|---|
| Homepage hero, about, focus chips, news | `_data/home.yml` |
| Education entries | `_data/education.yml` |
| Experience entries | `_data/experience.yml` |
| Project cards | `_data/projects.yml` |
| Nav bar links | `_data/navigation.yml` |
| Name, bio, social links | `author:` in `_config.yml` |

Longer pages are collections of markdown files, one per item:

- `_projects/` — project detail pages (linked from a card via its `url:`)
- `_publications/` — one file per paper; `/publications/` builds itself from them
- `_teaching/` — one file per course

## Layout

`_layouts/default.html` (shell) → `archive.html` (list pages) or `single.html` (detail pages).
Styles: `_sass/_portfolio-custom.scss` holds the design tokens and components; everything
before it in `assets/css/main.scss` is inherited Minimal Mistakes base.
