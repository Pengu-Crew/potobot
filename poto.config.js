require('dotenv/config');

const { config } = require('@potoland/core');
const { GatewayIntentBits } = require('discord-api-types/v10');

const botIntents = GatewayIntentBits.Guilds
    | GatewayIntentBits.GuildMembers
    | GatewayIntentBits.GuildPresences;

module.exports = config.bot({
    token: process.env.token,
    applicationId: process.env.applicationId,
    debug: false,
    intents: botIntents,
    locations: {
        base: 'src',
        commands: 'commands',
        output: 'dist',
        events: 'events',
        langs: 'langs',
        components: '',
        templates: '',
    },
});