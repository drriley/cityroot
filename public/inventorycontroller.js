myapp.controller("inventoryController", inventoryController);





function inventoryController($scope, $http, $location, userfactory, localStorageService, $uibModal) {

    $scope.rowCollection = [
         {product: 'Apples', category: 'Fruit', orderLife: 8},
         {product: 'Kale', category: 'Vegatable', orderLife: 20},
         {product: 'Chicken', category: 'Poultry', orderLife: 20}

     ];

    $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'inventoryController',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {


      }
    });


  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


  $scope.addItem = function addItem() {
          var item = {product: 'Cheese', category: 'Dairy', orderLife: 13}
          $scope.rowCollection.push(item);

      };

  $scope.removeItem = function removeItem(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
      }
  }



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
