module.exports = {
    name: 'ceramics',
    description: "sends link for Ceramics meet based on period number input by user (i.e. \'-ceramics <number>\')",
    execute(message, args) {
        if(args.length == 0 || args[0] == 4 || args[0] == 6) {
            message.channel.send('4th or 6th period Ceramics (same link):\nhttp://meet.google.com/qoy-tnwh-ejy');
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}