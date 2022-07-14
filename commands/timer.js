module.exports = {
    name: 'timer',
    aliases: ['studytimer'],
    description: "sets a study timer based on number of minutes input by user (i.e. \'-timer <minutes>\')",
    execute(message, args) {
        if(args.length == 0 || args[0] <= 0) {
            message.channel.send(`${message.author.username}, you need to specify how long you want the timer to be. Type a positive number of minutes after \'timer\'`);
        } else {
            setTimeout(timerDone, args[0]*60000, args[0]);
            message.channel.send("Your " + args[0] + " minute study timer has been set");
        }

        function timerDone(timerLength) {
            message.channel.send(`<@` + message.author.id + `>, your ` + timerLength + " minute study timer is over! Take a break!");
        }
    }
}