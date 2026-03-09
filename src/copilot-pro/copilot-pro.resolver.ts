import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CopilotProResolver {

    @Query( () => Boolean, { name: 'isCopilotPro', description: 'Returns whether Copilot Pro is enabled (yes/no)' } )
    isCopilotPro(): boolean {
        return process.env.COPILOT_PRO_ENABLED !== 'false';
    }

}
