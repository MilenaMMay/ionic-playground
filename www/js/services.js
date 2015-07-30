angular.module('servicesModule', [])

// Hier deklarierst Du den Image Service
.factory('ImageService', function() {

  // Ein Array ist eine Liste von Werten. Hier listen wir alle Bilder auf, die dieser Service benutzt.
  var imagesArrayVariable = [
    'img/image_service/football.jpeg',
    'img/image_service/hardware.jpeg',
    'img/image_service/lights.jpeg',
    'img/image_service/linux.jpeg',
    'img/image_service/orchid.jpeg',
    'img/image_service/tree.jpeg',
    'img/image_service/tv.jpeg',
    'img/image_service/viola.jpeg',
    'img/image_service/water.jpeg'
  ];

  return {
    // Die Funktion des ImageService
    randomImageFunction: function() {
      // Mit der Funktion length (Länge) kannst Du die Anzahl Werte in einem Array bestimmen.
      var numberOfImagesVariable = imagesArrayVariable.length;
      // Die Aufrufe der Funktionen Math.floor und Math.random sind Libary (Biblitheks-) Aufrufe.
      // Math (Mathematik) ist eine Bibliothek, die mathematische Funktionen beinhaltet.
      // random (zufällig) erzeugt eine Zufallszahl zwischen 0 und 1. Indem Du diese mit der Anzahl
      // der verfügbaren Bilder multiplizierst, erhältst Du eine Zahl zwischen 0 und der Anzahl der
      // Bilder.
      // Diese Zahl ist eine Dezimalzahl, also eine Kommazahl (z.B. 3,567). Mit floor (Boden) schneidest
      // Du den Teil nach dem Komma ab und erhältst so eine ganze Zahl (z.B. 3).
      var randomIndexVariable = Math.floor(Math.random() * numberOfImagesVariable)
      // Mit diesem Befehl greifst Du auf das X. Element in dem Array zu. Ist randomIndexVariable z.B. eine 3,
      // nimmst Du das Element Nummer Drei aus der Liste, wobei das erste Element die Nummer Null ist.
      // Das Element Nummer Drei ist somit 'img/image_service/linux.jpeg'.
      return imagesArrayVariable[randomIndexVariable];
    }
  };
});
