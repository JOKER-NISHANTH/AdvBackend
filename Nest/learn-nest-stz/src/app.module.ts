import { Module } from '@nestjs/common';

// Connect DATABASE
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(
    //! DataBase URI
    'mongodb+srv://JOKER-NISHANTH:NiShAnTh&007@cluster0.whmue.mongodb.net/NestProducts-demo?retryWrites=true&w=majority'
  ), UsersModule,
    // ! GraphQL
    // GraphQLModule.forRoot({ autoSchemaFile: true,}),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
