import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TruckController } from './controller/truck.controller';
import { TruckService } from './service/truck.service';
import { Truck, TruckSchema } from './schemas/truck.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Truck.name, schema: TruckSchema }]),
  ],
  controllers: [TruckController],
  providers: [TruckService],
})
export class TruckModule {}
