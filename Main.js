let message = `
    Welcome to the Migros.
    Have you Money Cart?
    1-Yes
    2-No
`;

const products = [
    {
        productName: "Bread",
        amount: 10
    },
    {
        productName: "Tea",
        amount: 25
    },
    {
        productName: "Sugar",
        amount: 18
    }
]

let result = confirm(message);
let amountPaid;
if (result) {

    let name = prompt("Please enter your name");
    let surname = prompt("Please enter your surname");
    const customer = new Customer(name, surname, result, products);
    amountPaid = customer.calculate();

    alert(
        `Customer informations: ${name} ${surname}
        Amount paid: ${amountPaid}
        `
    )
} else {
    const customer = new Customer(null, null, result, products);
    amountPaid = customer.calculate();
    alert(
        `Amount paid: ${amountPaid}`
    )
}
// console.log(result);