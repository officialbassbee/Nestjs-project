import { Injectable } from '@nestjs/common';
import { Automobiles } from './interfaces/automobile.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AutomobilesService {
  constructor(
    @InjectModel('Automobiles')
    private readonly automobileModel: Model<Automobiles>,
  ) {}

  async findall(): Promise<Automobiles[]> {
    return await this.automobileModel.find();
  }

  async findOne(id: string): Promise<Automobiles> {
    return await this.automobileModel.findOne({ _id: id });
  }
  async create(automobile: Automobiles): Promise<Automobiles> {
    const newAutomobile = new this.automobileModel(automobile);
    return await newAutomobile.save();
  }
  async delete(id: string): Promise<Automobiles> {
    return await this.automobileModel.findByIdAndRemove(id);
  }
  async update(id: string, automobile: Automobiles): Promise<Automobiles> {
    return await this.automobileModel.findByIdAndUpdate(id, automobile, {
      new: true,
    });
  }
}
