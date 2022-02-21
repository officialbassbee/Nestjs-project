import { Module } from '@nestjs/common';
import { AutomobilesSchema } from './autoSchema/auto.schema';
import { AutomobilesController } from './automobiles.controller';
import { AutomobilesService } from '../automobiles/automobiles.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Automobiles', schema: AutomobilesSchema },
    ]),
  ],
  controllers: [AutomobilesController],
  providers: [AutomobilesService],
})
export class AutoModule {}
