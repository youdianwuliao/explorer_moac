angular.module('BlocksApp').controller('TokenListController', function($stateParams, $rootScope, $scope, $http) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
    });

//    $http.get('/tokens.json')
//      .then(function(res){
//        $scope.tokens = res.data;
//      })
    $rootScope.isHome = true;
    $scope.reloadTokens = function() {
        $http({
          method: 'POST',
          url: '/token'
        }).success(function(data) {
          $scope.tokenList = data.tokens;
        });
      }
    $scope.reloadTokens();
    
})