class MigrosBase {
    discount_rate = 20;
    constructor(firstName, lastName, hasTheCart, products) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasTheCart = hasTheCart;
        this.products = products;
    }

    calculate() {
        if (this.controlTheProducts(this.products)) {

        } else {
            alert("You must buy at least one product");
        }
    }

    controlTheProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }
}