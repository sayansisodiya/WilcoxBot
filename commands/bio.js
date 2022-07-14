module.exports = {
    name: 'bio',
    description: "sends link for AP Biology meet based on period number input by user (i.e. \'-bio <number>\')",
    execute(message, args) {
        if(args.length == 0 || args[0] == 3 || args[0] == 6) {
            message.channel.send('3rd or 6th period AP Biology (same link):\nhttps://meet.google.com/zne-qtph-jkn');
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}