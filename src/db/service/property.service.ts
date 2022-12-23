import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Property, PropertyDocument } from "../schemas/property.schema";

@Injectable()
export class PropertyService {

    constructor(@InjectModel(Property.name) private propertyModel: Model<PropertyDocument>) {}
    
    async create(property: Property): Promise<Property> {
        const newProperty = new this.propertyModel(property);
        return newProperty.save();
    }

    async readAll(): Promise<Property[]> {
        return await this.propertyModel.find().exec();
    }

    async readById(id): Promise<Property> {
        return await this.propertyModel.findById(id).exec();
    }

    async update(id, property: Property): Promise<Property> {
        return await this.propertyModel.findByIdAndUpdate(id, property, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.propertyModel.findByIdAndRemove(id);
    }
}