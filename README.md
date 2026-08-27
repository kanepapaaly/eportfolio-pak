# E-Portfolio · Papa Aly Kane

Portfolio personnel bilingue (FR/EN) pour une recherche d'alternance 2026/2027 en IA, Data et développement Full-Stack.

**Stack :** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
npm run lint
```

## Structure

Le contenu est **piloté par les données** : pour mettre à jour le site, on touche surtout `src/data/` :

| Fichier | Contenu |
|---|---|
| `src/data/projects.ts` | Projets (problème, rôle, résultat, stack, images, liens), FR + EN |
| `src/data/skills.ts` | Compétences par catégorie |
| `src/data/experience.ts` | Formation + expérience |
| `src/data/profile.ts` | Coordonnées, liens, chemin du CV |
| `src/i18n/dictionary.ts` | Libellés d'interface FR/EN |

Sections dans `src/components/sections/`, assets publics dans `public/` (CV, captures, `og.png`).

### Ajouter un projet / des captures
1. Ajouter une entrée dans `src/data/projects.ts`.
2. Déposer les captures dans `public/projects/<id>/` et remplir le tableau `images` (la galerie s'affiche automatiquement dès qu'il y a au moins une image).

### Régénérer l'image Open Graph
Le gabarit est dans `assets/og-template.html` (1200×630). L'ouvrir dans un navigateur et exporter en PNG vers `public/og.png`.

## Déploiement sur Vercel

### Option A : via GitHub (recommandé, déploiement continu)
1. Créer un repo GitHub et y pousser ce projet :
   ```bash
   git remote add origin git@github.com:<user>/eportfolio-pak.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com) → **Add New… → Project** → importer le repo.
3. Vercel détecte Next.js automatiquement (aucune config à changer). **Deploy**.
4. Chaque `git push` sur `main` redéploie.

### Option B : via la CLI Vercel
```bash
npm i -g vercel
vercel          # prévisualisation
vercel --prod   # production
```

### Variables d'environnement
- `NEXT_PUBLIC_SITE_URL` : **à définir uniquement si tu attaches un domaine custom** (ex. `https://papaalykane.dev`). Sans ça, l'URL de production Vercel est détectée automatiquement (`VERCEL_PROJECT_PRODUCTION_URL`), avec repli sur `papaalykane.vercel.app`. Cette URL alimente les balises Open Graph, `sitemap.xml` et `robots.txt`.

## À finaliser
- [x] Captures d'écran de `:flex` (`public/projects/flex/`).
- [x] Liens App Store de `:flex` et `Campus` dans `links` (`src/data/projects.ts`), en secondaire derrière le site du projet.
- [ ] Lien Play Store des apps quand elles y seront (le site du projet le porte déjà, donc rien d'urgent ici).
- [ ] Domaine personnalisé (ex. `papaalykane.dev`) + `NEXT_PUBLIC_SITE_URL`.

Les projets web (`AC Barber`) n'ont pas de galerie : le lien vers le site suffit, les captures sont réservées aux apps mobiles.

Le contact se fait par email, téléphone et LinkedIn : il n'y a volontairement pas de formulaire, donc aucun service d'envoi (Formspree, Resend) à brancher.
