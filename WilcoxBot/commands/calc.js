module.exports = {
    name: 'calc',
    description: "sends link for AP Calculus AB or BC meet based on period number input by user (i.e. \'-calc <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'calc\'`);
        } else if(args[0] == 1) {
            message.channel.send("1st period AP Calc BC:\nhttps://meet.google.com/lookup/g3mi6a5cjg?authuser=1&hs=179");
        } else if(args[0] == 3) {
            message.channel.send("3rd period AP Calc BC:\nhttps://meet.google.com/lookup/hyeowluhcb?authuser=1&hs=179");
        } else if(args[0] == 4) {
            message.channel.send("4th period AP Calc AB:\nhttps://meet.google.com/lookup/aqkqbckulr?authuser=1&hs=179");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}