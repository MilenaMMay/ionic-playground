// Dieses Modul nennst Du 'controllersModule', damit Du es in der app.js mit dem gleichen Namen referenzieren kannst.
angular.module('controllersModule', [])

// Den Namen 'SearchCtrl' benötigst Du, wenn Du auf diesen Controller (Steuerung) verweisen möchtest.
.controller('SearchCtrl', function($scope, $state) {
  // Hier deklarierst (beschreibst) du die Funktion "searchFunction", um sie im templates/search.html zu nutzen.
  $scope.searchFunction = function() {
    // Mit diesem Befehl führst Du einen Redirect (Weiterleitung) zum State (Zustand) 'listState' aus.
    $state.go('listState');
  };
})

.controller('HelloCtrl', function($scope) {
  // Dieser Code ist nicht in einer Funktion, sondern wird immer ausgeführt, wenn der HelloCtrl
  // aufgerufen wird. Also immer, wenn man auf die Seite /hello kommt, siehe app.js.
  // Indem Du hier die greetingVariable initialisierst (ihr einen Start-Wert gibst),
  // gibt die Seite schon ohne Nutzereingabe "Willkommen!" aus.
  $scope.greetingVariable = "Willkommen!";

  $scope.changeGreetingFunction = function(nameVariable) {
    // if - else beschreibt eine Bedingung, nach der das Programm entscheiden muss, welchen Code es als nächstes
    // ausführen soll. If bedeutet "wenn" und else "sonst". Wenn die Bedingung, die nach dem if steht wahr (true) ist,
    // dann wird der Code in den darauf folgenden Zeilen ausgeführt, wenn nicht (ansonsten, else) wird der Code
    // ausgeführt, der nach dem else steht.
    // Mit == überprüft man, ob die Werte auf der linken und rechten Seite gleich sind. Wenn ja, ist die Bedingung wahr (true),
    // wenn nein, ist sie falsch (false).
    // undefined bedeutet nicht definiert, also wird überprüft, ob die nameVariable keinen Wert hat.
    // Mit length (Länge) ermittelst Du die Anzahl Buchstaben einer Eingabe.
    // Die Zeichen || bedeuten "oder", d.h. heißt also wenn die nameVariable keinen Wert hat oder keine Zeichen beinhaltet,
    // soll nur "Willkommen!" ausgegeben werden, ansonsten soll zu Willkommen noch der Name hinzugefügt werden.
    if (nameVariable == undefined || nameVariable.length == 0) {
      $scope.greetingVariable = "Willkommen!";
    } else {
      $scope.greetingVariable = "Willkommen, " + nameVariable + "!";
    }
  };
});
