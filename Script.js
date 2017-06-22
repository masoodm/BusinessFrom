(function() { //This is called a closure, a good habit to get into.
    var app = angular.module('form', ['ngMaterial', 'ngMessages']);

    app.controller('StoreController', function(){
        this.info = store;
    });

    var store = {
        name: "Stereo Base",
        address: "26135 Mission Blvd. Hayward, CA 94544",
        description: "Car Audio & Window Tinting store in the bay area"
    }

    app.controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  });



  //   .controller('DemoCtrl', function($scope) {
  //   $scope.user = {
  //     title: 'Developer',
  //     email: 'ipsum@lorem.com',
  //     firstName: '',
  //     lastName: '',
  //     company: 'Stereo Base',
  //     address: '1600 Amphitheatre Pkwy',
  //     city: 'Mountain View',
  //     state: 'CA',
  //     biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
  //     postalCode: '94043'
  //   };

  //   $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  //   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  //   'WY').split(' ').map(function(state) {
  //       return {abbrev: state};
  //     });
  // })
  // .config(function($mdThemingProvider) {

  //   // Configure a dark theme with primary foreground yellow

  //   $mdThemingProvider.theme('docs-dark', 'default')
  //     .primaryPalette('yellow')
  //     .dark();

  // });


})();

