angular.module('DashTest', [])
.controller('dashMainController', ['$scope', 'dashPicService', function($scope, dashPicService) {
  dashPicService.get().then((pics) => {
    $scope.pics = pics;
  });
}])
.directive('dashPic', function() {
  return {
    templateUrl: 'templates/dashPic.html',
    scope: {
      pics: '='
    },
    controller: function($scope) {
      $scope.deletePic = ($event) => {
        angular.element($event.currentTarget).remove();
      };
    }
  };
})
.service('dashPicService', function($http, $q) {
  return {
    get: function() {
      const deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'http://api.myjson.com/bins/29ja6'
      }).then(function successCallback(response) {
        deferred.resolve(response.data.images);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }
  };
});
