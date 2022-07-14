module.exports = {
    name: 'econ',
    description: "sends link for AP Macroecon meet based on period number input by user (i.e. \'-econ <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'econ\'`);
        } else if(args[0] == 2) {
            message.channel.send("2nd period AP Macroecon:\nhttps://meet.google.com/lookup/h7ggyotsdb?authuser=1&hs=179");
        } else if(args[0] == 6) {
            message.channel.send("6th period AP Macroecon:\nhttps://meet.google.com/fvx-aiik-piz");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}