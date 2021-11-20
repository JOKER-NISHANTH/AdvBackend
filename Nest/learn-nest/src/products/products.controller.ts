import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { title } from 'process';
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        return await this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice);
    }

    @Get("/all")
    async getAllProducts() {
        const products = await this.productsService.getProducts();

        // transform the data (_id to id and remove __v)
        return products.map((prod) => ({ id: prod.id, title: prod.title, desc: prod.desc, price: prod.price }));
    }

    @Get("/one/:id")
    async getOneProducts(@Param('id') proId: string) {
        const product = this.productsService.getSingleProduct(proId);
        return product
    }



    @Patch('/update/:id')
    async updateProduct(
        @Param('id') proId: string,
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const updatedPro = await this.productsService.updateProduct(proId, prodTitle, prodDesc, prodPrice)
        return updatedPro;
    }


    @Delete("delete/:id")
    async removeProduct(@Param('id') proId: string) {
        await this.productsService.deleteProduct(proId);
        return null

    }

}
