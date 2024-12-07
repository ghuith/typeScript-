"use strict";
// Créer une classe Voiture qui implémente l'interface Véhicule
class Voiture {
    // Initialiser les propriétés avec un constructeur
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémenter la méthode start
    start() {
        console.log("Car engine started");
    }
}
// Créer une instance de la classe Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2022);
// Appeler la méthode start pour vérifier le fonctionnement
maVoiture.start();
