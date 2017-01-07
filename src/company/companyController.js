(function () {

    angular
        .module('company')
        .controller('companyController', [
            'companyService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log','$rootScope', '$scope', '$http', '$location',
            companyController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @constructor
     */
    function companyController(companyService, $mdSidenav, $mdBottomSheet, $timeout, $log,$rootScope, $scope, $http, $location) {
        var self = this;
        self.companyObj = {};
        self.addNewCompany = function(){
            var url = "company/new";
            console.log(self.companyObj);
            companyService.addCompany(url,self.companyObj).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log(response);
            })
        }

        self.addCompanyReset = function(){
            self.companyObj = {};
        }
    }

})();
