import { Assets } from "./assets";
import { Signal } from "./signal";

export class Product {
    id: number;
    name: string;
    description: string;
    productImage: string;
    assests: Array<Assets>;
    signals: Array<Signal>;
}