import { Datas } from '../classes/Datas.js';
export class FormInput {
    constructor() {
        this.form = document.querySelector("#form");
        this.type = document.querySelector("#type");
        this.firstName = document.querySelector("#firstName");
        this.lastName = document.querySelector("#lastName");
        this.address = document.querySelector("#address");
        this.country = document.querySelector("#country");
        this.town = document.querySelector("#town");
        this.zip = document.querySelector("#zip");
        this.product = document.querySelector("#product");
        this.price = document.querySelector("#price");
        this.quantity = document.querySelector("#quantity");
        this.tva = document.querySelector("#tva");
        // Listener 
        this.submitFormListener();
    }
    // listners
    submitFormListener() {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputData();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
            let docData;
            let date = new Date();
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.htmlFormat());
        }
    }
    inputData() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("Les valeurs numériques doivent être supérieures à 0 !");
            return;
        }
    }
}
