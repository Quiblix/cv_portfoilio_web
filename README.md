# 🎮 Valorant Style Portfolio / Interactive CV

Un CV interactif immersif inspiré de l'interface utilisateur de Valorant, conçu pour présenter mon parcours de développeur.

## 🚀 Objectifs
- **Immersion** : Interface de type jeu vidéo AAA avec animations fluides.
- **Performance** : Optimisé avec Next.js et React.
- **Identité** : Thème futuriste (Cyber-tech) utilisant des effets de HUD et de glitch.

## 🛠 Tech Stack
- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React

## 🎨 Palette de Couleurs
- **Valorant Red** : `#FF4655`
- **Deep Black** : `#0F1923`
- **Slate Gray** : `#1F2326`
- **White** : `#ECE8E1`

## 📂 Structure du projet
- `/src/components` : Composants UI réutilisables (Boutons HUD, Cartes Agent).
- `/src/sections` : Sections principales (Profil, Compétences, Projets).
- `/src/styles` : Configurations Tailwind et polices personnalisées.

---

## 🛠 Guide de démarrage (pour débutants)

Suivez ces étapes pour lancer le projet sur votre ordinateur.

### 1. Prérequis
Vous devez avoir **Node.js** installé sur votre machine (version 18 ou plus récente). Vous pouvez le télécharger sur nodejs.org.

### 2. Cloner le projet
Ouvrez un terminal et tapez la commande suivante pour copier le projet sur votre ordinateur :
```bash
git clone https://github.com/votre-username/cv_portfoilio_web.git
cd cv_portfoilio_web
```

### 3. Installer les dépendances
Cette étape installe toutes les bibliothèques nécessaires (React, Tailwind, Framer Motion, etc.) :
```bash
npm install
```

### 4. Configuration (Optionnel)
Le formulaire de contact utilise des variables d'environnement pour l'envoi d'emails. Pour utiliser votre propre compte Gmail, créez un fichier nommé `.env.local` à la racine du projet et ajoutez :
```env
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-d-application
```
*Note : Si vous ne configurez rien, le système utilisera un compte de test (Ethereal) par défaut.*

### 5. Lancer le site
Lancez le serveur de développement avec cette commande :
```bash
npm run dev
```

### 6. Visualiser le résultat
Une fois que le terminal affiche "Ready", ouvrez votre navigateur et allez à l'adresse suivante :
👉 http://localhost:3000

Vous pouvez maintenant modifier le code et voir les changements s'appliquer en temps réel !

---
*Projet en cours de développement.*
