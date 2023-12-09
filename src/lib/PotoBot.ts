import { PotoClient } from '@potoland/core';

export class PotoBot extends PotoClient {
  public async run(): Promise<'OK'> {
    await this.start();
    await this.uploadCommands();

    return 'OK';
  }
}

const potoBot = new PotoBot();
export default potoBot;
