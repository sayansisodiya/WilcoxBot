const { Channel } = require("discord.js")

module.exports = {
    name: 'physics',
    description: "sends link to AP Physics 2 meet based on period number input by user (i.e. \'-physics <number>\')",
    execute(message, args) {
        if(args.length == 0 || args[0] == 5) {
            message.channel.send('5th period AP Physics 2: \nhttps://meet.google.com/ijf-ugqf-sav');
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}