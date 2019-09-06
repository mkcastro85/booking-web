appRoot.factory("loginService", function ($http,REST_END_POINT) {
    return {
        login: function (credentials) {
            var config={
                method:"PUT",
                url:REST_END_POINT+credentials.email,
                headers:{
                    password:credentials.password,
                    app:credentials.app
                }
              }
              return $http(config);
        }
        
    }
});

