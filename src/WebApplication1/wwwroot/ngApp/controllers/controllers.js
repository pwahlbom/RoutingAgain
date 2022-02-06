var RoutingAgain;
(function (RoutingAgain) {
    var Controllers;
    (function (Controllers) {
        var products = [
            { id: 1, name: "Apples", details: "An apple a day keeps the doctor away!" },
            { id: 2, name: "Oranges", details: "Great source of vitamin C." },
            { id: 3, name: "Grapes", details: "May present a choking hazard." },
            { id: 4, name: "Pineapples", details: "Can be worn as a headdress, but don't sit on one." },
            { id: 5, name: "Watermelon", details: "Best when eaten on a hot summer afternoon." }
        ];
        var HomeController = (function () {
            function HomeController() {
                this.products = products;
            }
            HomeController.prototype.search = function (value) {
                this.products = products.filter(function (current) {
                    return current.name.toLocaleLowerCase().indexOf(value.toLowerCase()) > -1;
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var RegisterController = (function () {
            function RegisterController($state) {
                this.$state = $state;
            }
            RegisterController.prototype.register = function () {
                this.$state.go("Home");
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var DetailsController = (function () {
            function DetailsController($stateParams) {
                this.$stateParams = $stateParams;
                this.product = products.filter(function (p) { return p.id == $stateParams["id"]; })[0];
            }
            return DetailsController;
        }());
        Controllers.DetailsController = DetailsController;
    })(Controllers = RoutingAgain.Controllers || (RoutingAgain.Controllers = {}));
})(RoutingAgain || (RoutingAgain = {}));
//# sourceMappingURL=controllers.js.map