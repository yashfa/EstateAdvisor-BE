import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './db/service/product.service';
import { Product, ProductSchema } from './db/schemas/product.schema';
import { ProductController } from './db/controllers/product.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/estateadvisor'),
    MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
