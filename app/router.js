appRoot.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "pages/login.html",
      controller : "LoginController"
    })
    .when("/booking", {
      templateUrl : "pages/booking.html",
      controller : "BookingController"
    });
  });