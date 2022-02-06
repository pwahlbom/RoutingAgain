namespace RoutingAgain.Controllers {

    let products = [
        {id: 1, name: "Apples", details: "An apple a day keeps the doctor away!"},
        { id: 2, name: "Oranges", details: "Great source of vitamin C."},
        { id: 3, name: "Grapes", details: "May present a choking hazard."},
        { id: 4, name: "Pineapples", details: "Can be worn as a headdress, but don't sit on one."},
        { id: 5, name: "Watermelon", details: "Best when eaten on a hot summer afternoon."}
    ];

    export class HomeController {
            public products;
            constructor() {
                this.products = products;
            }

            public search(value) {
                this.products = products.filter((current) => {
                    return current.name.toLocaleLowerCase().indexOf(value.toLowerCase()) > -1;
                });
            }
    }

    export class AboutController {
        constructor() { }
    }

    export class RegisterController {
        constructor(public $state: ng.ui.IStateService) { }

        public register() {
            this.$state.go("Home");
        }
    }

    export class DetailsController {
        public product;

        constructor(public $stateParams: ng.ui.IStateParamsService)
        {
            this.product = products.filter
                ((p) => p.id == $stateParams["id"])[0];
        }
    }
}