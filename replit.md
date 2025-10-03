# Portfolio - Léa

## Overview
Portfolio personnel moderne et responsive pour Léa, créé avec HTML, CSS vanilla et JavaScript pur. Design inspiré des références fournies avec un thème bleu foncé et des accents cyan.

## Current State
- ✅ Site entièrement fonctionnel
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Toutes les sections implémentées
- ✅ Animations et interactions fonctionnelles

## Project Structure
```
├── index.html       # Structure HTML complète
├── styles.css       # Styles CSS vanilla (pas de framework)
├── script.js        # JavaScript vanilla pour interactions
└── replit.md        # Documentation du projet
```

## Features Implemented
1. **Navbar fixe** : Logo "LÉA", liens de navigation, bouton "LET'S TALK"
2. **Section Hero** : Photo circulaire avec effet glow, animation typing ("Web Developer", "UI/UX Designer", etc.), icônes réseaux sociaux
3. **Section About** : Card avec photo, texte descriptif, 3 statistiques (280+ Projects, 16+ Years, 49+ Projects)
4. **Section Projects** : Grille de 3 projets avec images, overlay au hover, indicateurs de pagination
5. **Section Services** : 4 cards de services (Website Design, Mobile Design, SEO/Digital, Graphic Design) avec photos et étoiles
6. **Section Contact** : Formulaire avec validation JavaScript, toast de succès après soumission, photo et coordonnées
7. **Footer** : Copyright et texte centré

## Technologies Used
- HTML5 pur
- CSS3 vanilla (pas de Tailwind ni autre framework)
- JavaScript vanilla (pas de bibliothèques)
- Google Fonts (Poppins)
- Images depuis Unsplash

## Color Palette
- Background principal : #0a192f (bleu foncé)
- Background secondaire : #112240
- Accent : #00d9ff (cyan)
- Texte principal : #ffffff
- Texte secondaire : #8892b0

## JavaScript Features
- ✅ Effet typing animé pour le sous-titre
- ✅ Animations fade-in au scroll (IntersectionObserver)
- ✅ Validation du formulaire de contact
- ✅ Toast de succès après soumission du formulaire
- ✅ Menu hamburger pour mobile
- ✅ Smooth scroll pour les liens d'ancrage
- ✅ Navbar qui se cache au scroll vers le bas
- ✅ Effets hover sur les cards

## How to Run
Le site utilise Python's http.server sur le port 5000. Ouvrez simplement l'URL fournie par Replit pour voir le portfolio.

## Replit Environment Setup
- ✅ Python 3.11 (already installed in Replit)
- ✅ Workflow configured: `python -m http.server 5000`
- ✅ Server binds to 0.0.0.0:5000 for Replit proxy compatibility
- ✅ Deployment configured for Autoscale (static website)
- ✅ .gitignore added for Python files

## Deployment
The project is configured for Replit Autoscale deployment, which is perfect for static websites. Click the "Publish" button in Replit to deploy to production.

## Recent Changes
**3 Octobre 2025 - Replit Setup**
- Configured Replit environment for imported GitHub project
- Added .gitignore for Python cache files
- Set up deployment configuration for Autoscale
- Verified all functionality works correctly

**2 Octobre 2025 - Initial Creation**
- Création initiale du portfolio complet
- Implémentation de toutes les sections selon les spécifications
- Design responsive pour toutes les tailles d'écran
- Animations et interactions JavaScript
