# Portfolio: Dountio Tchiofo David Duclair

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

- **Bilingue FR/EN** (français par défaut) : sélecteur à drapeaux (France / Royaume-Uni) dans la barre de navigation.
- **Mode clair/sombre** (clair par défaut) : bascule via variables CSS, préférence mémorisée.
- **Logo D³T officiel** : médaillon dans la barre de navigation, le pied de page et l'icône d'onglet (`src/assets/logo-mark.png`, `public/favicon.png`). Le logo complet est dans `public/logo-dt3.png`.
- **Contact** : e-mail, WhatsApp (message pré-rempli selon la langue), téléphone et LinkedIn, centralisés dans `src/contact.js`.
- **Direction visuelle** : palette tirée du portrait et du logo (papier gris froid, encre, bleu nuit du costume, or du logo), typographie Schibsted Grotesk, mise en page en deux colonnes (titre à gauche, contenu à droite).
- **Animation d'entrée** unique dans l'en-tête : bloc bleu nuit, portrait dévoilé, nom révélé ligne par ligne (Framer Motion).
- **Frise d'expérience** qui se remplit au défilement, barre de progression de lecture.
- **Section Soutenance** avec galerie photo (plein écran, clavier, glisser sur mobile) et jury.
- **Accessibilité** : lien d'évitement, navigation active (`aria-current`), focus visible, respect de `prefers-reduced-motion`.
- **Bouton "remonter en haut"** flottant.
- **Chargement rapide** : photos en WebP aux bonnes dimensions (le portrait est préchargé), miniatures légères pour la galerie et grande image chargée seulement à l'ouverture, police chargée sans bloquer l'affichage, bibliothèques séparées en fichiers mis en cache longue durée (`vite.config.js`, `vercel.json`).
- **Jamais de page blanche** :
  - un écran de démarrage (nom, rôle) s'affiche immédiatement dans `index.html`, avant même le JavaScript ;
  - si le JavaScript ne se charge pas, cet écran propose de recharger la page et affiche les contacts ;
  - chaque section est protégée (`src/components/ErrorBoundary.jsx`) : si l'une plante, elle est masquée et le reste du site fonctionne ;
  - si toute l'application plante, une page de secours s'affiche avec les contacts et un bouton « Recharger la page » ;
  - une langue ou un thème invalide enregistré dans le navigateur est ignoré.

## Structure

```
src/
  components/
    Navbar.jsx       → barre de navigation (logo, langue, thème, menu mobile)
    Logo.jsx         → monogramme D³T + nom
    Icons.jsx        → jeu d'icônes SVG maison
    Flags.jsx        → drapeaux FR / UK du sélecteur de langue
    Section.jsx      → mise en page commune des sections (titre à gauche)
    Hero.jsx         → en-tête avec portrait
    About.jsx        → présentation
    Skills.jsx       → compétences techniques
    Experience.jsx   → frise chronologique
    Projects.jsx     → recherche mise en avant + projets
    Defense.jsx      → soutenance (jury + galerie)
    Formation.jsx    → diplômes, certifications, langues
    Contact.jsx      → coordonnées
    Footer.jsx
    ScrollToTop.jsx
    ErrorBoundary.jsx → protection contre les erreurs (section et page entière)
  context/           → langue (FR/EN) et thème
  i18n/translations.js → tout le texte, FR et EN
  assets/            → logo, photos de soutenance (WebP)
  contact.js         → coordonnées (e-mail, WhatsApp, LinkedIn)
  index.css          → design tokens et styles
```

## Déploiement sur Vercel

**Option A: via l'interface Vercel (le plus simple)**
1. Poussez ce dossier vers un dépôt GitHub (ou GitLab/Bitbucket).
2. Sur [vercel.com](https://vercel.com) → **Add New → Project** → importez le dépôt.
3. Vercel détecte Vite automatiquement (`npm run build`, dossier de sortie `dist`): laissez les valeurs par défaut et cliquez sur **Deploy**.

**Option B: via la CLI**
```bash
npm install -g vercel
cd david-portfolio
vercel        # déploiement de test
vercel --prod # mise en production
```

Le fichier `vercel.json` inclus assure que les routes fonctionnent correctement (redirection vers `index.html`).

## Personnalisation

- **Couleurs** : `src/index.css` (variables `--paper`, `--ink`, `--accent`, `--field`… pour chaque thème).
- **Contenu & traductions** : tout le texte (FR/EN) est centralisé dans `src/i18n/translations.js`: facile à modifier sans toucher au JSX.
- **Photos** : le portrait est dans `public/img/` (portrait-480.webp, portrait-760.webp, portrait-760.jpg) ; les photos de soutenance dans `src/assets/soutenance/` (versions 600 et 1200 px). Remplacer par des images du même nom et des mêmes proportions.
