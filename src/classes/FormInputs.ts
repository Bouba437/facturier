import { Datas } from '../classes/Datas.js'
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class FormInput {
    form: HTMLFormElement;
    type: HTMLSelectElement;
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    address: HTMLInputElement;
    country: HTMLInputElement;
    town: HTMLInputElement;
    zip: HTMLInputElement;
    product: HTMLInputElement;
    price: HTMLInputElement;
    quantity: HTMLInputElement;
    tva: HTMLInputElement;

    constructor() {
        this.form = document.querySelector("#form") as HTMLFormElement;
        this.type = document.querySelector("#type") as HTMLSelectElement;
        this.firstName = document.querySelector("#firstName") as HTMLInputElement;
        this.lastName = document.querySelector("#lastName") as HTMLInputElement;
        this.address = document.querySelector("#address") as HTMLInputElement;
        this.country = document.querySelector("#country") as HTMLInputElement;
        this.town = document.querySelector("#town") as HTMLInputElement;
        this.zip = document.querySelector("#zip") as HTMLInputElement;
        this.product = document.querySelector("#product") as HTMLInputElement;
        this.price = document.querySelector("#price") as HTMLInputElement;
        this.quantity = document.querySelector("#quantity") as HTMLInputElement;
        this.tva = document.querySelector("#tva") as HTMLInputElement;

        // Listener 
        this.submitFormListener();
    }

    // listners
    private submitFormListener(): void {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    private handleFormSubmit(e: Event) {
        e.preventDefault();

        const inputs = this.inputData();

        if(Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;

            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);

            let docData: HasHtmlFormat;
            let date: Date = new Date();
            
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.htmlFormat());
            
        }
    }

    private inputData(): [string, string, string, string, string, string, number, string, number, number, number] | void {
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

        if(zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva]
        } else {
            alert("Les valeurs numériques doivent être supérieures à 0 !");
            return
        }
        
    }
}