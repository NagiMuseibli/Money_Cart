class MigrosBase {
    discount_rate = 20;
    constructor(firstName, lastName, hasTheCart, products) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasTheCart = hasTheCart;
        this.products = products;
    }

    calculate() {
        let amountPaid = 0;
        if (this.controlTheProducts(this.products)) {

            if (this.hasTheCart) {
                this.products.forEach(product => {
                    amountPaid += (product.amount * (100 - this.discount_rate) / 100);
                });
            } else {
                this.products.forEach(product => {
                    amountPaid += product.amount;
                });
            }

        } else {
            alert("You must buy at least one product");
        }
        return amountPaid;
    }

    controlTheProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }

    getName() {
        return this.firstName;
    }

    getSurName() {
        return this.lastName;
    }

}