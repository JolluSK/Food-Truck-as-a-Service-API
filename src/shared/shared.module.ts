import { Global, Module } from '@nestjs/common';

import { ApiConfigService } from './services';

const providers = [ApiConfigService];

@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers],
})
export class SharedModule {}
