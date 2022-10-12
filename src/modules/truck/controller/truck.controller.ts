import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TruckService } from '../service/truck.service';

@Controller(`truck`)
export class TruckController {
  constructor(private readonly truckService: TruckService) {}

  @Post()
  async create(@Body() body: any) {
    await this.truckService.create(body);
  }

  @Get()
  async findAll(): Promise<any[]> {
    const query = {
      date: new Date(),
    };
    return this.truckService.findAll();
  }

  @Put(':id')
  async update(@Body() body: any, @Param(':id') id: string): Promise<any> {
    return this.truckService.updateOne(id, body);
  }
}
