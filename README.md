# EcoRide — API de covoiturage écoresponsable

## Présentation du projet

**EcoRide** est une application de covoiturage orientée **écomobilité** et **développement durable**.
Le projet vise à proposer une alternative responsable aux solutions de transport existantes, en mettant l’accent sur la réduction de l’empreinte carbone, la confiance entre utilisateurs et une architecture technique moderne, sécurisée et maintenable.

Ce repository contient la **partie backend (API REST)** du projet.

---

## Objectifs

### Business

* Proposer une plateforme de covoiturage sensible aux enjeux environnementaux
* Encourager les comportements responsables via un système de reconnaissance (tokens de remerciement)

### Design

* Direction artistique orientée :

  * nature
  * écologie
  * mobilité douce
* Interfaces claires, accessibles et inclusives

### Technique

* Développer une API REST :

  * Authentification sécurisée
  * CMS (gestion des trajets)
  * CRM (administration)
* Respect :

  * RGPD (données personnelles)
  * RGAA (accessibilité)
* Architecture scalable et maintenable

---

## Stack technique

### Backend

* **Framework** : NestJS
* **Base de données** : PostgreSQL
* **ORM** : Prisma
* **Authentification** : JWT
* **Sécurité** : Guards, hashing des mots de passe, gestion des rôles

### Frontend

* **Framework** : Next.js (App Router)

### Infrastructure

* **Conteneurisation** : Docker
* **Versionning** : GitHub
* **Déploiement** :

  * Frontend : Vercel
  * Backend : Render

---

## Spécifications fonctionnelles

### Authentification

* Inscription utilisateur
* Connexion / Déconnexion
* Accès à un espace personnel
* Modification du profil :

  * nom
  * prénom
  * nom d’utilisateur
  * email
  * mot de passe
  * photo de profil (optionnelle)
* Suppression de compte (RGPD)
* Demande de passage au rôle **conducteur**

---

### CMS — Gestion des trajets

* Proposition de trajet par un utilisateur
* Acceptation d’un trajet par un conducteur
* Modification d’un trajet
* Suppression d’un trajet
* Attribution d’un token de remerciement au conducteur
* Notation du conducteur après réalisation du trajet

---

### CRM — Administration

* Consultation de tous les profils utilisateurs
* Suppression de profils
* Réception de retours utilisateurs
* Réception de signalements

---

## Gestion des rôles

| Rôle           | Droits principaux                           |
| -------------- | ------------------------------------------- |
| Utilisateur    | Proposer un trajet, gérer son profil        |
| Conducteur     | Accepter des trajets, recevoir des tokens   |
| Administrateur | Gérer utilisateurs, signalements et retours |

---

## Tests

Le projet intègre une **stratégie de tests progressive** :

### Tests unitaires

* Validation de la logique métier (Services)
* Outils :

  * `@nestjs/testing`
  * `jest`

### Tests d’intégration

* Validation des routes REST
* Vérification des Guards (JWT, rôles)
* Tests Controllers + Services

### Tests End-to-End (E2E)

* Validation de parcours complets :

  * inscription → connexion → action métier
* Outil :

  * `supertest`

Objectif : garantir la fiabilité sans surcomplexité.

---

## Structure du projet

```
src/
 ├── auth/
 ├── users/
 ├── trips/
 ├── admin/
 ├── prisma/
 └── app.module.ts

test/
 └── app.e2e-spec.ts
```

---

## Conformité & bonnes pratiques

* Hash sécurisé des mots de passe
* Séparation claire des responsabilités (Controller / Service)
* Validation des données via DTO
* Gestion centralisée des erreurs
* Suppression ou anonymisation des données utilisateur (RGPD)
* Prise en compte de l’accessibilité (RGAA)

---

## Lancement du projet

### Prérequis

* Node.js
* Docker
* PostgreSQL

### Installation

```
npm install
```

### Lancement en local

```
docker-compose up
npm run start:dev
```

### Tests

```
npm run test
npm run test:e2e
```

---

## État du projet

* Projet conçu dans un cadre de **TP / validation de compétences**
* Architecture pensée pour être :

  * évolutive
  * professionnelle
  * orientée bonnes pratiques

---

## Auteur

Projet réalisé dans un objectif pédagogique et professionnel, avec une approche **fullstack orientée qualité, sécurité et maintenabilité**.
