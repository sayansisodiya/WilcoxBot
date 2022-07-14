module.exports = {
    name: 'csa',
    description: "sends link for AP CSA meet based on period number input by user (i.e. \'-csa <number>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type the period number after \'csa\'`);
        } else if(args[0] == 1) {
            message.channel.send("1st period AP CSA:\nhttps://meet.google.com/lookup/cwb6a7jql5?authuser=1&hs=179");
        } else if(args[0] == 2) {
            message.channel.send("2nd period AP CSA:\nhttps://meet.google.com/lookup/bvmvxzi4i6?authuser=1&hs=179");
        } else {
            message.channel.send(`${message.author.username}, either that period does not exist or I don't have the link for it. If you have the link, please message KarmaTheChicken or email sayans@gmail.com`);
        }
    }
}