import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTruckDto, UpdateTruckDto } from '../dto/truck.dto';
import { Truck, TruckDocument } from '../schemas/truck.schema';

@Injectable()
export class TruckService {
  constructor(
    @InjectModel(Truck.name) private readonly truckModel: Model<TruckDocument>,
  ) {}

  async create(createTruckDto: CreateTruckDto): Promise<Truck> {
    try {
      const createdTruck = await this.truckModel.create(createTruckDto);
      return createdTruck;
    } catch (error) {
      console.log('77777', error);
    }
  }

  async findAll(query?: any): Promise<Truck[]> {
    return this.truckModel.find(query).exec();
  }

  async updateOne(id: string, updateTruckDto: UpdateTruckDto): Promise<any> {
    const updatedTruck = this.truckModel
      .updateOne({ _id: id }, updateTruckDto)
      .exec();
    return updatedTruck;
  }
}
