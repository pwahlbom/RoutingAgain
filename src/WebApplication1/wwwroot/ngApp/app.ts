namespace RoutingAgain {
    angular.module("RoutingAgain", ["ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            $stateProvider
                .state("Home", {
                    url: "/",
                    templateUrl: "ngApp/views/home.html",
                    controller: RoutingAgain.Controllers.HomeController,
                    controllerAs: "controller"
                })

                .state("Register", {
                    url: "/Register",
                    templateUrl: "ngApp/views/register.html",
                    controller: RoutingAgain.Controllers.RegisterController,
                    controllerAs: "controller"
                })

                .state("Details", {
                    url: "/details/:id",
                    templateUrl: "ngApp/views/details.html",
                    controller: RoutingAgain.Controllers.DetailsController,
                    controllerAs: "controller"
                })

                .state("About", {
                    url: "/About",
                    templateUrl: "ngApp/views/about.html",
                    controller: RoutingAgain.Controllers.HomeController,
                    controllerAs: "controller"
                })

            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
        });

    angular.module("RoutingAgain").controller("HomeController", RoutingAgain.Controllers.HomeController);
    }