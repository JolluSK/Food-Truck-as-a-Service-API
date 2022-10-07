import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, Schema as MongooseSchema } from 'mongoose';

export type TruckDocument = Truck & Document;

@Schema({ collection: `truck_table`, timestamps: true })
export class Truck {
  @Prop()
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  date: Date;

  @Prop()
  location: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TruckSchema = SchemaFactory.createForClass(Truck);
