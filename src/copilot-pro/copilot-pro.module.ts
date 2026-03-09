import { Module } from '@nestjs/common';
import { CopilotProResolver } from './copilot-pro.resolver';

@Module({
    providers: [ CopilotProResolver ],
})
export class CopilotProModule {}
