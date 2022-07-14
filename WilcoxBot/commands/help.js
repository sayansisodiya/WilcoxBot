module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: "information on all commands and how to use them (\'-help\' or \'-help <command name>\'",
    execute(message, args) {
        const { commands } = message.client;
        
        var commandList = [];
        commandList.push(commands.map(command => command.name).join(', '));

        if(args.length == 0) {
            message.channel.send("List of commands: \n\n" + commandList.join(", ") + "\n\nYou can also type \'-help <command name>\' to get info on a specific command");
        } else {
            const firstInput = args[0].toLowerCase();
            const command = commands.get(firstInput) || commands.find(c => c.aliases && c.aliases.includes(firstInput));

            //console.log("1");

            if(!command) {
                message.channel.send("That command doesn't exist")
                //console.log("2fail");
            } else {
                //console.log("3");
                if(command.aliases) {
                message.channel.send(`Aliases: ${command.aliases.join(', ')}`);
                }
                if(command.description) {
                message.channel.send(`Description: ${command.description}`);
                }
            }
        }
    }
}