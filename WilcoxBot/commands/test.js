module.exports = {
    name: 'test',
    description: "a test command",
    execute(message, args) {
        message.channel.send('working!');
    }
}