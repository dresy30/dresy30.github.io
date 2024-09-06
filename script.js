// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Créer une balise <link> pour le CSS
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';  // Remplacez par le chemin de votre fichier CSS

    // Ajouter la balise <link> dans le <head> du document
    document.head.appendChild(link);

    console.log('Portfolio de Mpandresy Tafaholiniaina prêt avec CSS injecté par JavaScript!');
}); 