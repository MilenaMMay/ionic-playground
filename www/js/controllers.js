// Dieses Modul nennst Du 'controllersModule', damit Du es in der app.js mit dem gleichen Namen referenzieren kannst.
angular.module('controllersModule', [])

// Den Namen 'SearchCtrl' benötigst Du, wenn Du auf diesen Controller (Steuerung) verweisen möchtest.
.controller('SearchCtrl', function($scope, $state) {
  // Hier deklarierst (beschreibst) du die Methode "searchMethod", um sie im templates/search.html zu nutzen.
  $scope.searchMethod = function() {
    // Mit diesem Befehl führst Du einen Redirect (Weiterleitung) zum State (Zustand) 'listState' aus.
    $state.go('listState');
  };
});
