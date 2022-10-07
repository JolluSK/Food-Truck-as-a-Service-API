import { NestFactory } from '@nestjs/core';

import { SharedModule } from './shared/shared.module';
import { AppModule } from './app.module';
import { ApiConfigService } from './shared/services';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.select(SharedModule).get(ApiConfigService);

  const port = configService.appConfig.port;
  await app.listen(port);

  console.info(`server running on :  ${await app.getUrl()}`);
}
bootstrap();
