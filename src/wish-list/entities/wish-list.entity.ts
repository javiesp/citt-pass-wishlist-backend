import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<WishList>;

@Schema()
export class WishList {

    @Prop()
    wishlist_id: number;

    @Prop()
    whishlit_name: string;

    @Prop()
    budget:number;

    @Prop()
    product_id:number[];
}

export const WishListSchema = SchemaFactory.createForClass(WishList);