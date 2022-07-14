const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//require the discord.js module
const Discord = require('discord.js');

//create a new Discord client
const client = new Discord.Client();

const prefix = '-';

//node.js file system module
const fs = require('fs');

client.commands = new Discord.Collection();

//makes sure all command files called are in JavaScript
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//when the client is ready, this code runs (it only runs once after starting up)
client.once('ready', () => {
    console.log('School Bot is up and running.');
});

//when a message is sent, the bot checks if it starts with the correct prefix and if it is from a user other than itself
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to run that command');
    }
});
// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);