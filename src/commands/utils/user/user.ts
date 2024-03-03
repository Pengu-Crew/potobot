import { Command, Declare, Options } from 'seyfert';
import AvatarCommand from './avatar';

@Declare({
  name: 'user',
  description: 'Command group',
})
@Options([AvatarCommand])
export default class UserParent extends Command {}
