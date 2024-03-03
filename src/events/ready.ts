import { createEvent } from 'seyfert';

export default createEvent({
  data: {
    name: 'ready',
    once: true,
  },
  run: (user, client) => client.logger.info(`${user.username} is ready!`),
});
