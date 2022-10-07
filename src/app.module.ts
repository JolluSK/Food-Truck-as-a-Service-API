import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? `.${process.env.NODE_ENV}.env`
        : `.env`,
    }),
    MongooseModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => ({
        uri: configService.mongooseOrmConfig.MONGODB_URI,
      }),
      inject: [ApiConfigService],
    }),
  ],
})
export class AppModule {}
