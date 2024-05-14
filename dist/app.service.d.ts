import { Queue } from 'bullmq';
export declare class AppService {
    private readonly testQueue;
    constructor(testQueue: Queue);
    addJobToQueue(): string;
}
