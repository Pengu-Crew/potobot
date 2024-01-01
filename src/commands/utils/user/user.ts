import { Command, Declare, Options } from '@potoland/core';
import AvatarCommand from './avatar';

@Declare({
  name: 'user',
  description: 'Command group',
})
@Options([AvatarCommand])
export default class UserParent extends Command {}
