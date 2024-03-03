import { Colors } from '#lib/utils/colors';
import {
  CommandContext,
  Declare,
  InteractionGuildMember,
  Embed,
  OKFunction,
  Options,
  SubCommand,
  User,
  createUserOption,
} from 'seyfert';

const options = {
  user: createUserOption({
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
  override async run(ctx: CommandContext<typeof options>) {
    const user = ctx.options.user ?? ctx.author;

    return ctx.write({
      embeds: [
        new Embed()
          .setTitle(ctx.t.utils.avatar(user.name).get())
          .setImage(user.avatarURL({ size: 2048 }))
          .setColor(Colors.flamingo)
          .setTimestamp(),
      ],
    });
  }
}
