import { logger } from '@common/Logger';
import { EnvType, load } from 'ts-dotenv';

type Env = EnvType<typeof schema>;

const schema = {
  S3_BUCKET: String,
  SECRET_KEY: String,
  MONGODB_URL: String,
  JWT_ACCESS_SECRET: String,
  JWT_REFRESH_SECRET: String,
};

class ConfigService {
  private config: Env;

  constructor() {
    try {
      this.config = load(schema);
      logger.info('[ConfigService] Конфигурация .env загружена');
    } catch (error) {
      logger.error('[ConfigService] Не удалось прочитать файл .env или он отсутствует');
    }
  }

  get env() {
    return this.config;
  }
}

export const configService = new ConfigService();
