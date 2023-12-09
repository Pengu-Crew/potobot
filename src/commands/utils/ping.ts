import { Command, CommandContext, Declare } from '@potoland/core';

@Declare({
  name: 'ping',
  description: 'Gets the bot latency between discord and the.',
})
export default class PingCommand extends Command {
  override async run(ctx: CommandContext<{}, []>) {
    await ctx.interaction.deferReply();
    return ctx.editResponse({
      content: `Pong! \`${await this.getLatency()}ms\`.`,
    });
  }

  private async getLatency(): Promise<number> {
    const start = Date.now();
    await this.client.rest.get('/users/@me');
    const end = Date.now();

    return end - start;
  }
}
