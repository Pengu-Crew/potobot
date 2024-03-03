import { Client } from 'seyfert';
import { ActivityType, PresenceUpdateStatus } from 'discord-api-types/v10';

export class PotoBot extends Client {
  public constructor() {
    super({
      presence: () => {
        return {
          activities: [
            {
              name: 'Github repositories',
              state: 'Looking for changes in potocuit',
              type: ActivityType.Watching,
            },
          ],
          status: PresenceUpdateStatus.Idle,
          afk: true,
          since: Date.now(),
        };
      },
    });
  }

  public async run(): Promise<'OK'> {
    this.setServices({
      langs: {
        default: 'en-US',
      },
    });

    await this.start();
    await this.uploadCommands();

    return 'OK';
  }
}

const potoBot = new PotoBot();
export default potoBot;
