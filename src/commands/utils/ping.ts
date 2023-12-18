import { Command, CommandContext, Declare, PotoClient } from '@potoland/core';

@Declare({
  name: 'ping',
  description: 'Gets the bot latency between discord and the.',
})
export default class PingCommand extends Command {
  override async run(ctx: CommandContext<true, {}, []>) {
    const { interaction, client } = ctx;

    await interaction.deferReply();
    return ctx.editResponse({
      content: `Pong! \`${await this.getLatency(client)}ms\`.`,
    });
  }

  private async getLatency(client: PotoClient): Promise<number> {
    const start = Date.now();
    await client.rest.get('/users/@me');
    const end = Date.now();

    return end - start;
  }
}
