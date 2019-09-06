appRoot.controller("BookingController", [
  "$scope",
  "bookingService",
  "$localStorage",
  "$location",
  "$mdToast",
  "EMAIL_CONTACT",
  "APP_CODE",
  function(
    $scope,
    bookingService,
    $localStorage,
    $location,
    $mdToast,
    EMAIL_CONTACT,
    APP_CODE
  ) {
    //Iniciamos el filtro
    $scope.bookings = [];
    getBookings();
    $scope.f = {};
    
    /**
     * Funcion encargada obtener los booking
     */
    function getBookings() {
      console.log("Token:" + $localStorage.token);
      if ($localStorage.token === undefined) {
        $location.path("/");
      }
      //Iniciamos los parametros a enviar al api
      var parameters = {
        adminemail: "testapis@tuten.cl",
        email: EMAIL_CONTACT,
        current: true,
        token: $localStorage.token,
        app: APP_CODE
      };
      //Obtenemos los bookings del api
      bookingService.getBookings(parameters).then(
        function(response) {
          //Rellenamos los datos para mostrarlos en la tabla
          $scope.bookings = response.data;
        },
        function(error) {
          //En caso de error generamos una alerta
          alertError("Error ingresando a la plataforma");
        }
      );
    }

    //Funcion encargada de si el precio es mayor a
    $scope.priceGt = function(field) {
      if (
        $scope.f.pricegt != null &&
        $scope.f.pricegt != undefined &&
        $scope.f.pricegt != ""
      ) {
        return $scope.f.pricegt < field.bookingPrice;
      }
      return true;
    };
    //Funcion encargada de si el precio es mayor a
    $scope.priceLt = function(field) {
      if (
        $scope.f.pricelt != null &&
        $scope.f.pricelt != undefined &&
        $scope.f.pricelt != ""
      ) {
        return $scope.f.pricelt > field.bookingPrice;
      }
      return true;
    };


    function alertError(msg) {
      $mdToast.show(
        $mdToast
          .simple()
          .textContent(msg)
          .position("top")
          .hideDelay(3000)
      );
    }
  }
]);
