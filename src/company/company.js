(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    var company = angular.module('company', ['ngMaterial', 'ngAnimate',
        'ngMaterial', 'ngMdIcons', 'ui.router']);
    company.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('company', {
            url: '/company',
            views: {
                'topmenu': {
                    templateUrl: 'src/common/topmenu/views/menu.html'
                },
                'sidenav@company': {
                    templateUrl: 'src/common/sidemenu/views/Sidenav.html',
                    controller: 'SidenavController',
                    controllerAs: 'sidenav'
                },
                '': {
                    templateUrl: 'src/company/views/company.html',
                    controller: 'companyController',
                    controllerAs: 'company'

                }
            }
        }).state('settings', {
            url: '/settings',
            views: {
                'topmenu': {
                    templateUrl: 'src/common/topmenu/views/menu.html'
                },
                'sidenav@settings': {
                    templateUrl: 'src/common/sidemenu/views/Sidenav.html',
                    controller: 'SidenavController',
                    controllerAs: 'sidenav'
                },
                '': {
                    templateUrl: 'src/company/views/settings.html',
                    controller: 'companyController',
                    controllerAs: 'company'

                }
            }
        }).state('users', {
                url: '/users',
                views: {
                    'topmenu': {
                        templateUrl: 'src/common/topmenu/views/menu.html'
                    },
                    'sidenav@users': {
                        templateUrl: 'src/common/sidemenu/views/Sidenav.html',
                        controller: 'SidenavController',
                        controllerAs: 'sidenav'
                    },
                    '': {
                        templateUrl: 'src/company/views/users.html',
                        controller: 'companyController',
                        controllerAs: 'company'

                    }
                }
            });
    });
})();
