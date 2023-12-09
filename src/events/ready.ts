import { createEvent } from '@potoland/core';

export default createEvent({
  data: {
    name: "ready",
    once: true,
  },
  run: async (user) => {
    console.log(`${user.username} is ready!`);
  },
});
