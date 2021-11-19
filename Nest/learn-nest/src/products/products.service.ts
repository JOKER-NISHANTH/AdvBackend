import { Injectable } from '@nestjs/common';

import { Products } from './products.model';

@Injectable()
export class ProductsService {
    // Products type initial with empty array
    products: Products[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodID = new Date().toString();
        const newProduct = new Products(prodID, title, desc, price);
        this.products.push(newProduct);
        return prodID
    }

}
