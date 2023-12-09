import { EventContext, PotocuitDataEvent, PotocuitEvent } from '@potoland/core';

class Ready implements PotocuitEvent {
  data = {
    name: 'ready',
    once: true,
  } satisfies PotocuitDataEvent;

  run(...[user]: EventContext<this>) {
    // user.username returns undefined
    console.log(`${user.username} is ready!`);
  }
}

export default new Ready();
