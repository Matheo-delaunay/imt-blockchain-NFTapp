# imt-blockchain-NFTapp
Billetterie sur la blockchain.

## Main feature
- Proposer une connexion sans obliger la possession wallet.
- Créer un concert (collection) et ajouter des places (mint).
- Afficher les concerts et les billets disponibles à la vente.
- Acheter un billet pour un concert.

## Other features
### Types de billets
Proposer des types de billets (VIP, normal, etc).
### Rechercher un concert
Rechercher un concert par nom d'artiste ou par date.
### QR code
Générer un QR code à usage unique (lié aux metadatas) pour chaque billet.
Objectif : simplifier l'entrée au concert.
### Gestion des rôles
Créer un système de rôle pour gérer les concerts.
### Revente de ticket
Revendre les places maximum au prix d'achat (législation française).
Proposer les prix les moins chers en premier.
### Liste des billets achetés
Afficher les billets achetés par l'utilisateur.
Rendre partageable cette liste (pour montrer sa belle bibliothèque de concerts).
### Liste des concerts à venir
Afficher les collections vides pour créer un calendrier des concerts à venir
### SFT
Creuser la piste des SFT pour réduire les frais de gas.

## Stack technique
- Frontend : NextJS
  - Connexion sans wallet : Reown (permet de le récupérer plus tard)
  - Web3 Hook : Wagmi
- Contrat : Solidity
  - Test, compile et déploiement : Hardhat
  - Stockage (metadata) : IPFS
- Blockchain : Ethereum
