import { HasRender } from "../interfaces/hasRender.js";
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement,
    ) {
        this.formContainer = document.querySelector("#form-container") as HTMLDivElement;
    }

    render(docObj: HasHtmlFormat, docType: string): void {
        const htmlString: string = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}