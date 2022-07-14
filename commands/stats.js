module.exports = {
    name: 'stats',
    description: "sends link for AP Stats meet based on period number input by user (i.e. \'-stats <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'stats\'`);
        } else if(args[0] == 1) {
            message.channel.send("1st period AP Stats:\nhttps://meet.google.com/zjh-icwp-uph?authuser=1");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}