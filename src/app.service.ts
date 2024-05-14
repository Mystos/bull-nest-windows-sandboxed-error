import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class AppService {
  constructor( @InjectQueue('test') private readonly testQueue: Queue){
  }

  addJobToQueue(): string {
    this.testQueue.add("testJob", "");
    return 'Job added to queue';
  }
}
