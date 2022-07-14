module.exports = {
    name: 'dice',
    aliases: ['die'],
    description: "rolls a die (1-6)",
    execute(message, args) {
        message.channel.send(Math.ceil(Math.random()*6));
    }
}