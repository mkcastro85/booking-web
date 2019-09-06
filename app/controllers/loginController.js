appRoot.controller("LoginController", [
  "$scope",
  "loginService",
  "$location",
  "$mdToast",
  "$localStorage",
  "APP_CODE",
  function($scope, loginService, $location, $mdToast, $localStorage, APP_CODE) {
    $scope.functions = {
      login: login
    };

    /**
     * Funcion encargada de realizar login de la aplicacion
     */
    function login() {
      var credentials = {
        email: $scope.email,
        password: $scope.password,
        app: APP_CODE
      };
      //Realizamos login por medio del servicio especial para login
      loginService.login(credentials).then(
        function(response) {
          //Guardamos token en navegador para pasarlo en la web
          $localStorage.token = response.data.sessionTokenBck;
          //En caso de exito enviamos ruta a listado de booking
          $location.path("/booking");
        },
        function(error) {
          //En caso de error generamos una alerta
          alertError("Error ingresando a la plataforma");
        }
      );
    }

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
