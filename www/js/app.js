// Den Namen, den Du Deinem Modul hier im Hauptprogramm vergibst ('appModule'), musst Du auch in der index.html nutzen, um die ng-app zu benennen.
// So verknüpfst Du das HTML (die Komponenten Deiner App) mit dem Javascript (dem Verhalten Deiner App).
// Die Liste, die danach übergeben wird, sind weitere Javascript-Module, die Deine App benötigt ("required dependencies", benötigte Abhängigkeiten).
// * 'ionic' benötigst Du, weil wir dieses Framework (Rahmen) verwenden.
// * Mit 'controllersModule' lädst Du das Modul mit dem gleichen Namen, das in controllers.js erzeugt wird.
angular.module('appModule', ['ionic', 'controllersModule', 'servicesModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('formState', {
      url: '/form',
      templateUrl: 'templates/form.html'
    })

    .state('listState', {
      url: '/list',
      templateUrl: 'templates/list.html'
    })

    .state('searchState', {
      url: '/search',
      templateUrl: 'templates/search.html',
      // Indem Du hier den Namen 'SearchCtrl' verwendest, verweist (references) Du auf
      // den Controller (Steuerung) mit dem gleichen Namen. Diesen findest Du in
      // controllers.js
      controller: 'SearchCtrl'
    })

    .state('helloState', {
      url: '/hello',
      templateUrl: 'templates/hello.html',
      controller: 'HelloCtrl'
    })

    .state('textState', {
      url: '/text',
      templateUrl: 'templates/text.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/form');


});
