(function () {
    "use strict";
    var companyApp = angular.module('companyApp', ['ngAnimate',
        'ngMaterial', 'ngMdIcons', 'ui.router','sidenav', 'company']);
    companyApp.config(function ($mdThemingProvider,$mdIconProvider) {
        /*$mdThemingProvider.theme('grey')
            .primaryPalette('purple')
            .accentPalette('orange')
            .backgroundPalette('red');*/

        var customBlueMap = $mdThemingProvider.extendPalette('amber', {
            'contrastDefaultColor': 'dark',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
                'default': '500',
                'hue-1': '100'
            })
            .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey')

        $mdIconProvider.defaultIconSet('assets/icons/sprite.svg', 24)
         .iconSet('avatars', 'assets/svg/avatars.svg', 24);
    }).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/company');
    })
})();