# Projet RPG

## Description
Un jeu RPG textuel où les joueurs explorent un donjon aléatoire, combattent des monstres et collectent des trésors.

## Fonctionnalités principales

### 1. Création du personnage
- ✅ Choix du nom et de la classe (guerrier, mage, voleur)
- ✅ Statistiques de base selon la classe choisie
- Inventaire initial vide

**Tests**:
- ✅ Validation de la création de personnage
- ✅ Vérification des contraintes sur le nom

### 2. Exploration du donjon
- Déplacement entre salles interconnectées (nord, sud, est, ouest)
- Rencontres aléatoires (monstres, trésors, salles vides)
- Combat obligatoire avant de quitter une salle contenant un monstre

**Tests**:
- Génération correcte du donjon
- Validation des déplacements
- Gestion des rencontres avec des monstres

### 3. Système de combat
- Combats au tour par tour
- Actions possibles: attaquer, défendre, utiliser un objet
- Combat jusqu'à victoire ou défaite

**Tests**:
- Calcul des dégâts d'attaque
- Fonctionnement de la défense
- Conditions de fin de combat

### 4. Gestion d'inventaire
- Collecte d'objets (potions, armes, armures)
- Utilisation d'objets consommables
- Équipement modifiant les statistiques

**Tests**:
- Ajout d'objets à l'inventaire
- Utilisation des consommables
- Application des bonus d'équipement

## Persistance des données
- Sauvegarde de l'état de la partie
- Chargement possible après redémarrage
- ✅ Méthode de stockage au choix (hors mémoire)
