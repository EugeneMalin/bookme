import { Module } from '@nestjs/common';
import { ConfigModule as CfgModule } from '@nestjs/config';
import { number, object, string } from 'joi';

@Module({
  imports: [
    CfgModule.forRoot({
        validationSchema: object({
          DB_HOST: string().required(),
          DB_PORT: number().required(),
          DB_USER: string().required(),
          DB_PASS: string().required(),
          DB_NAME: string().required()
        })
    })
  ],
})
export class ConfigModule {}