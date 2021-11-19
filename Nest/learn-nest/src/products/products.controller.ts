import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const generateId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice);

        return { id: generateId };
    }

    @Get("/all")
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get("/one/:id")
    getOneProducts(@Param('id') proId: string) {
        return this.productsService.getSingleProduct(proId);
    }

    @Patch('/update/:id')
    updateProduct(
        @Param('id') proId: string,
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number
    ) {

    }
}
