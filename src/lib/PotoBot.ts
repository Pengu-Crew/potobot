import { ActivityType, PotoClient, PresenceUpdateStatus } from '@potoland/core';

export class PotoBot extends PotoClient {
  public constructor() {
    super({
      presence: () => {
        return {
          activities: [
            {
              name: 'Github repositories',
              type: ActivityType.Watching,
              state: 'Looking for changes in potocuit',
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
    await this.start();
    await this.execute();
    await this.uploadCommands();

    return 'OK';
  }
}

const potoBot = new PotoBot();
export default potoBot;
