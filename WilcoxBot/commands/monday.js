module.exports = {
    name: 'monday',
    aliases: ['mon'],
    description: "sends bell schedule for Monday",
    execute(message, args) {
        message.channel.send('1st: 8:30-9:10\n2nd: 9:15-9:55\n3rd: 10:00-10:40\n4th: 10:45-11:25\nLUNCH: 11:25-11:55\n5th: 11:55-12:35\n6th: 12:40-1:20\n7th: 1:25-2:05');
    }
}