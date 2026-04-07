# 🏢 Workspace Staff Manager - Gestion Interactive des Employés

Workspace Staff Manager est une application web interactive permettant de gérer et organiser les employés dans un espace de travail via une interface visuelle basée sur un plan d’étage.

🎯 Objectif : faciliter la répartition des employés en respectant des règles métier spécifiques tout en offrant une expérience utilisateur fluide et intuitive.

---

## 🚀 Aperçu

L’application permet de :

- Ajouter, modifier et supprimer des employés
- Assigner des employés à des zones spécifiques
- Respecter des règles métier selon les rôles
- Visualiser en temps réel l’occupation des espaces

---

## 🌐 Démo en ligne

👉 *(Ajoute ton lien GitHub Pages ici)*  

---

## 🎨 Design & UX

- Interface moderne (UI)
- Design responsive (Desktop / Tablet / Mobile)
- Utilisation de Flexbox & Grid
- Palette de couleurs intuitive (vert, orange, rouge)
- Animations fluides

---

## 🛠️ Technologies utilisées

- HTML5  
- CSS3  
- Bootstrap  
- JavaScript (Vanilla JS)  
- Git & GitHub  
- UX/UI Design  
- SEO  

---

## ⚡ Fonctionnalités

### 👥 Gestion des employés

- Ajout d’un employé via une modale
- Champs :
  - Nom
  - Rôle
  - Photo (URL + preview)
  - Email
  - Téléphone
  - Expériences (formulaire dynamique)
- Validation avec Regex
- Vérification des dates (début < fin)

---

### 🏢 Gestion des zones

Zones disponibles :
- Salle de conférence
- Réception
- Salle des serveurs
- Salle de sécurité
- Salle du personnel
- Salle d’archives

---

### 🔒 Règles métier

- Réception → uniquement Réceptionnistes  
- Salle des serveurs → uniquement Techniciens IT  
- Salle de sécurité → uniquement Agents de sécurité  
- Manager → accès partout  
- Nettoyage → accès partout sauf archives  
- Autres rôles → accès limité selon zones  

---

### 🔄 Interaction dynamique

- Affectation d’un employé à une zone
- Suppression via bouton ❌
- Retour automatique dans “Unassigned Staff”
- Ouverture d’un profil détaillé :
  - Photo
  - Informations complètes
  - Expériences
  - Localisation actuelle

---

### ➕ Gestion visuelle

- Bouton “+” pour ajouter un employé dans une zone
- Zones obligatoires vides affichées en rouge pâle
- Limitation du nombre d’employés par zone

---

## ✨ Bonus implémentés (si applicable)

- Drag & Drop des employés
- Recherche et filtrage
- Modification des employés
- Sauvegarde via localStorage
- Réorganisation automatique
- Image par défaut

---

## 🧠 Concepts JavaScript utilisés

- Manipulation avancée du DOM
- Gestion des événements
- Validation des formulaires (Regex)
- Logique métier complexe
- Tableaux et objets
- localStorage (persistance des données)
- Dynamisation des formulaires

---

## 📂 Structure du projet
