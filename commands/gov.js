module.exports = {
    name: 'gov',
    description: "sends link for AP Gov meet based on period number input by user (i.e. \'-gov <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'gov\'`);
        } else if(args[0] == 2) {
            message.channel.send("2nd period AP Gov:\nhttps://meet.google.com/lookup/akopiseqgo?authuser=1&hs=179");
        } else if(args[0] == 6) {
            message.channel.send("6th period AP Gov:\nhttps://meet.google.com/lookup/apbtuubgnx?authuser=1&hs=179");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}