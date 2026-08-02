# Portfolio — Dountio Tchiofo David Duclair

Portfolio/CV en une page, construit avec **React**, **Vite** et **Tailwind CSS**.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` généré peut être déployé sur Vercel, Netlify, GitHub Pages, etc.

## Fonctionnalités

- **Bilingue FR/EN** (français par défaut) — bouton de bascule dans la barre de navigation.
- **Mode sombre/clair** (sombre par défaut) — bascule via variables CSS, préférence mémorisée.
- **Logo D³T** — monogramme (Dountio · David · Duclair · Tchiofo) dans la barre de navigation et le pied de page.
- **Fond dynamique** — dégradés animés en arrière-plan (désactivés automatiquement si l'utilisateur préfère moins d'animations).
- **Animations au défilement** (Framer Motion) sur chaque section.
- **Bouton "remonter en haut"** flottant, apparaît après défilement.
- **Section Soutenance** avec galerie photo (cliquable, plein écran) et jury.

## Structure

```
src/
  components/
    Navbar.jsx        → barre de navigation (logo, langue, thème)
    Logo.jsx           → monogramme D³T + nom
    Hero.jsx           → en-tête avec photo et animation de réseau de capteurs
    SensorMesh.jsx     → animation SVG signature (détection / réponse d'anomalie)
    BackgroundField.jsx→ fond animé (dégradés + grille)
    Reveal.jsx         → wrapper d'animation au scroll (Framer Motion)
    ScrollToTop.jsx    → bouton flottant "remonter en haut"
    About.jsx          → présentation
    Skills.jsx         → compétences techniques groupées
    Experience.jsx     → frise chronologique des expériences
    Projects.jsx       → projets + travail de recherche mis en avant
    Defense.jsx        → soutenance de mémoire (jury + galerie photo)
    Formation.jsx      → diplômes, certifications, langues
    Contact.jsx        → coordonnées
    Footer.jsx
  context/
    LanguageContext.jsx → gestion FR/EN
    ThemeContext.jsx    → gestion sombre/clair
  i18n/
    translations.js     → tout le contenu texte, FR et EN
  assets/
    portrait.jpg
    soutenance/          → photos de la soutenance
  App.jsx
  index.css
  main.jsx
```

## Déploiement sur Vercel

**Option A — via l'interface Vercel (le plus simple)**
1. Poussez ce dossier vers un dépôt GitHub (ou GitLab/Bitbucket).
2. Sur [vercel.com](https://vercel.com) → **Add New → Project** → importez le dépôt.
3. Vercel détecte Vite automatiquement (`npm run build`, dossier de sortie `dist`) — laissez les valeurs par défaut et cliquez sur **Deploy**.

**Option B — via la CLI**
```bash
npm install -g vercel
cd david-portfolio
vercel        # déploiement de test
vercel --prod # mise en production
```

Le fichier `vercel.json` inclus assure que les routes fonctionnent correctement (redirection vers `index.html`).

## Personnalisation

- **Couleurs** : `src/index.css` (variables CSS `--ink-*`, `--signal-*`, `--paper-*` pour chaque thème).
- **Contenu & traductions** : tout le texte (FR/EN) est centralisé dans `src/i18n/translations.js` — facile à modifier sans toucher au JSX.
- **Photos** : remplacer les fichiers dans `src/assets/` par d'autres images du même nom.
