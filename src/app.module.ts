import { Module } from '@nestjs/common';

import { AutoModule } from './automobiles/automobiles.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AutoModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
