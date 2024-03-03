import { Command, CommandContext, Declare } from 'seyfert';

@Declare({
  name: 'ping',
  description: 'Gets the bot latency between discord and the.',
})
export default class PingCommand extends Command {
  override async run(ctx: CommandContext) {
    const { client } = ctx;

    await ctx.deferReply();
    return ctx.editResponse({
      content: `Pong! \`${client.gateway.get(0)?.latency ?? 0}ms\`.`,
    });
  }
}
