myapp.controller("mainController", mainController);


function mainController($scope, $http, $location, userfactory) {
    $scope.formData = {};


    // when submitting the add form, send the text to the node API
    $scope.uppage= function() {
    $location.path( "/signup" );
    };

    $scope.inpage= function() {
      $location.path( "/login" );
    };

    $scope.login= function() {
      console.log("creating");
      console.log($scope.formData.email);

        $http.post('/api/login', $scope.formData )
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another


                userfactory.set(data);

                $location.path( "/userportal" );

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };




    $scope.signup= function() {
      console.log("creating");
      console.log($scope.formData.name);

        $http.post('/api/newUser', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another

                userfactory.set(data);

                $location.path( "/userportal" );

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


}
