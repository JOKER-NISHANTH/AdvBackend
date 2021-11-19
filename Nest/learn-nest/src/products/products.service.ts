import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
    // Products type initial with empty array
    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number): { id: string } {
        const prodID = Math.random().toString();
        const newProduct = new Product(prodID, title, desc, price);
        this.products.push(newProduct);
        return { id: prodID };
    }

    getProducts(): Product[] {
        // Copy
        return this.products;
    }

    getSingleProduct(productID: string) {
        const product = this.products.find((prod) => prod.id === productID);
        if (!product) return new NotFoundException("Could not find product .");

        return { ...product };
    }
}
