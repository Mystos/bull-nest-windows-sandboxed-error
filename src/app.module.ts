import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { join } from 'node:path';


const processorString = join(__dirname + '/workers/worker.js');
@Module({
  imports: [BullModule.forRoot({
    connection: {
      host: 'localhost',
      port: 6379,
    },
    defaultJobOptions: {
      removeOnComplete: true,
      removeOnFail: true,
    },
  }),
  BullModule.registerQueue({ name: 'test', processors: [ processorString ] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
