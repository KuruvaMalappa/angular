(function () {
    'use strict';
    angular.module('sidenav')
        .service('SidenavService', ['$q','$http', SidenavService]);
    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{getAllCompaniesDetails: Function}}
    * @constructor
    */
    function SidenavService($q,$http) {
        // Promise-based API
        return {
            getAllCompaniesDetails: function (url) {
                return $http({
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    url: url
                });

            },
             addCompany: function(url,CompanyObj){
                return $http({
                    method:"POST",
                    dataType:"json",
                    contentType:"application/json; charset=utf-8",
                    data:CompanyObj,
                    url:url,
                });
            
            },
            removeCompany: function(url,companyId,tagName){
                return $http({
                    method:"DELETE",
                    dataType:"json",
                    contentType:"application/json; charset=utf-8",
                    params:{'companyId':companyId},
                    url:url,
                });
            }
        }
    }

})();
