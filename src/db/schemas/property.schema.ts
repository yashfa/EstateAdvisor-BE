import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema()
export class Property {

    @Prop()
    title: string;

    @Prop()
    type: string;

    @Prop()
    area: string;

    @Prop()
    price: number;

    @Prop()
    status: string;

    @Prop()
    block: string;

    @Prop()
    phase: string;

    @Prop()
    houseNo: string;

    @Prop()
    streetNo: string;

    @Prop()
    styleOfHouse: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);