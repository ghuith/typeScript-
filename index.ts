// Définir une interface nommée Véhicule
interface Véhicule {
    make: string; // Marque du véhicule
    model: string; // Modèle du véhicule
    year: number; // Année de fabrication
    start(): void; // Méthode qui affiche un message
  }
  
  // Créer une classe Voiture qui implémente l'interface Véhicule
  class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    // Initialiser les propriétés avec un constructeur
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémenter la méthode start
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Créer une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2022);
  
  // Appeler la méthode start pour vérifier le fonctionnement
  maVoiture.start();
  