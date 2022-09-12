angular.module('thumbnail', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
               template: '<index></index>'
            })
 }
])
