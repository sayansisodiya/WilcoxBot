module.exports = {
    name: 'lit',
    description: "sends link for AP Lit meet based on period number input by user (i.e. \'-lit <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'lit\'`);
        } else if(args[0] == 2 || args[0] == 5) {
            message.channel.send("2nd or 5th period AP Lit (same link):\nhttps://meet.google.com/xbk-uvtz-pin");
        } else if(args[0] == 3) {
            message.channel.send("3rd period AP Lit:\nhttps://meet.google.com/lookup/ayabuxyv4u?authuser=1&hs=179");
        } else if(args[0] == 4) {
            message.channel.send("4th period AP Lit:\nhttps://meet.google.com/lookup/ht55v7dnhl?authuser=1&hs=179");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}