import { Module } from '@nestjs/common';

// Connect DATABASE
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(
    'MONGO_URI=mongodb+srv://JOKER-NISHANTH:NiShAnTh&007@cluster0.whmue.mongodb.net/NestProducts-demo?retryWrites=true&w=majority'
  ),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
