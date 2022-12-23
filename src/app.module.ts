import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './db/service/product.service';
import { Product, ProductSchema } from './db/schemas/product.schema';
import { ProductController } from './db/controllers/product.controller';
import { Property, PropertySchema } from './db/schemas/property.schema';
import { PropertyController } from './db/controllers/property.controller';
import { PropertyService } from './db/service/property.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/estateadvisor'),
    MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
    MongooseModule.forFeature([{name: Property.name, schema: PropertySchema}]),
],
  controllers: [AppController, ProductController, PropertyController ],
  providers: [AppService, ProductService, PropertyService ],
})
export class AppModule {}
