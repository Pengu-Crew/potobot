import { Colors } from '#lib/utils/colors';
import {
  ApplicationCommandOptionType,
  CommandContext,
  Declare,
  InteractionGuildMember,
  MessageEmbed,
  OKFunction,
  Options,
  SubCommand,
  User,
  createOption,
} from '@potoland/core';

const options = {
  user: createOption({
    type: ApplicationCommandOptionType.User,
    description: 'Select a user',
    value: ({ value }, ok: OKFunction<User>) => {
      if (value instanceof InteractionGuildMember) return ok(value.user);
      return ok(value as User);
    },
    required: false,
  }),
} as const;

@Declare({
  name: 'avatar',
  description: 'Avatar of a user',
})
@Options(options)
export default class AvatarCommand extends SubCommand {
  override async run(ctx: CommandContext<'client', typeof options>) {
    const user = ctx.options.user ?? ctx.author;

    return ctx.write({
      embeds: [
        new MessageEmbed()
          // Another day I will do the languages
          .setTitle(
            ctx.client.langs.get('en-US', 'utils.avatar', {
              name: user.globalName ?? user.username,
            }),
          )
          .setImage(user.avatarURL({ size: 2048 }))
          .setColor(Colors.flamingo)
          .setTimestamp(),
      ],
    });
  }
}
