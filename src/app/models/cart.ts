import { Product } from "./product";

export class cart extends Product{
    quantity: number;

    constructor() {
        super();
        this.quantity = 1;
    }
}