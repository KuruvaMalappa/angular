(function () {
    angular
        .module('sidenav')
        .controller('SidenavController', [
            'SidenavService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
            '$filter','$q', '$http','$rootScope','$state',
            SidenavController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @constructor
     */
    function SidenavController(SidenavService, $mdSidenav, $mdBottomSheet, 
      $timeout, $log,$filter,$q, $http, $rootScope,$state) {
        var self = this;
        self.routePath = $state.current.name;
    }
})();
