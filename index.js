require('dotenv').config(); // loads in config from .env file

// Imports bolt
const { App } = require('@slack/bolt');

// Builds the bolt object
const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET
});

// Listens for /report-form command 
app.command('/report-form', async ({ ack, say }) => {
  // acknowledge the request with a 200 OK
  await ack();

  // Respond to the command with the link
  await say('Report anonymously at <https://airtable.com/shrMxipa4HA4DSMLq>', { // uses < > format for links
    response_type: 'ephemeral' // ephemeral = only visible to requester
  })
});

(async () => {
  // Listen on port 3000
  await app.start(3000);
  console.log('Listening on port 3000');
})