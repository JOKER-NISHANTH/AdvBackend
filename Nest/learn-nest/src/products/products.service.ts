import { Injectable, NotFoundException } from '@nestjs/common';

import { Products } from './products.model';

@Injectable()
export class ProductsService {
    // Products type initial with empty array
    private products: Products[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodID = Math.random().toString();
        const newProduct = new Products(prodID, title, desc, price);
        this.products.push(newProduct);
        return prodID
    }

    getProducts() {
        // Copy
        return [...this.products];
    }

    getSingleProduct(productID: string) {
        const product = this.products.find((prod) => prod.id === productID);
        if (!product) return new NotFoundException("Could not find product .");

        return { ...product };
    }
}
