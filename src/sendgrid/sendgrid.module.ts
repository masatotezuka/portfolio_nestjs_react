import { DynamicModule, Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { SendgridEmitter } from './sendgrid.emitter';

@Module({})
export class SendgridModule {
  static register(apiKey: string): DynamicModule {
    return {
      module: SendgridModule,
      providers: [
        {
          provide: 'SENDGRID_API_KEY',
          useValue: apiKey,
        },
        SendgridService,
        SendgridEmitter,
      ],
      exports: [SendgridEmitter],
    };
  }
}
