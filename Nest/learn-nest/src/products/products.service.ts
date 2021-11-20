import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    // Products type initial with empty array
    products: Product[] = [];

    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) { }

    private async findProduct(id: string): Promise<Product> {

        let product;
        try {
            product = await this.productModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Could not find product .");
        }
        if (!product) throw new NotFoundException("Could not find product .");
        //  return { id: product.id, title: product.title, desc: product.desc, price: product.price };
        return product;

    }

    async insertProduct(title: string, desc: string, price: number) {

        const newProduct = new this.productModel({
            title: title,
            desc: desc,
            price: price
        });
        const result = await newProduct.save();
        // console.log(result)
        return result.id as string;
    }

    async getProducts() {
        // new product array is created
        const products = await this.productModel.find().exec();
        // console.log(products);
        return products as Product[];
    }
    async getSingleProduct(productId: string) {
        const product = await this.findProduct(productId);
        return { id: product.id, title: product.title, desc: product.desc, price: product.price };
    }
    async updateProduct(proId: string, title: string, desc: string, price: number) {
        const updatedProduct = await this.findProduct(proId);
        if (title) updatedProduct.title = title;
        if (desc) updatedProduct.desc = desc;
        if (price) updatedProduct.price = price;
        updatedProduct.save();
    }

    async deleteProduct(productId: string) {
        // await this.productModel.deleteOne({ _id: productId }).exec();
        const result = await this.productModel.deleteOne({ id: productId }).exec();
        console.log(result)
        if (result.deletedCount === 0) throw new NotFoundException("Could not find product .");
        // const product = await this.findProduct(productId);

    }
}