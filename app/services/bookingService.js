appRoot.factory("bookingService",  function ($http,REST_END_POINT) {
    return {
        //Obtenemos los booking por medio del api
        getBookings: function (parameters) {
            //Iniciamos los parametros y cabeceras a enviar
            var config={
                method:"GET",
                url:REST_END_POINT+parameters.email+"/bookings?current="+parameters.current,
                headers:{
                    adminemail:parameters.adminemail,
                    token:parameters.token,
                    app:parameters.app
                }
              }
              return $http(config);
        }
        
    }
});

