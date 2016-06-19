myapp.controller("userController", userController);





function userController($scope, $http, $location, userfactory, localStorageService) {



      if (Object.keys(userfactory.get()).length > 0) {
        localStorageService.set('localStorageKey', userfactory.get());
      }



      var barb = localStorageService.get('localStorageKey');

      $scope.userdata = barb || [];

      $scope.$watch('userdata', function () {
       localStorageService.set('userdata', $scope.userdata);
     }, true);


     $scope.logout= function() {
     localStorageService.clearAll();

     $location.path( "/" );
     };

     $scope.test= function(){
         console.log("test");

     };

     $scope.inventorypage= function(){
        $location.path( "/inventory" );

     };
     $scope.marketPlacepage= function(){
        $location.path( "/marketPlace" );

     };
     $scope.contractspage= function(){
        $location.path( "/contracts" );

     };
     $scope.orderLogisticspage= function(){
        $location.path( "/orderLogistics" );

     };
     $scope.marketDatapage= function(){
        $location.path( "/marketData" );

     };




}
