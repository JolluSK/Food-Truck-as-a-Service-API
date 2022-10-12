import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv == 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv == 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv == 'test';
  }

  public getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch (error) {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  public getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch (error) {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  public getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, '\n');
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get mongooseOrmConfig() {
    return {
      MONGODB_URL: this.getString('MONGODB_URL'),
    };
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (value == null) {
      throw new Error(key + ' environment variable does not set');
    }

    return value;
  }
}
