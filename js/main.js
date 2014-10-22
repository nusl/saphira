var modSaphira = angular.module('modSaphira', ['firebase']);

modSaphira.controller('ControllerSaphira', ['$scope', '$firebase',
        function($scope, $firebase) {
            var fb = new Firebase('https://saphira.firebaseio.com/');

            $scope.fb = $firebase(fb);

            $scope.user = $firebase(fb.child('user'));

            $scope.user.$asObject().$bindTo($scope, 'user');
        }
]);
