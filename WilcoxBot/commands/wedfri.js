module.exports = {
    name: 'wednesday',
    aliases: ['wednesday', 'friday', 'wed', 'fri'],
    description: "sends bell schedule for Wednesday/Friday",
    execute(message, args) {
        message.channel.send('2nd: 8:30-9:40\n4th: 9:50-11:00\n6th: 11:10-12:20\nLUNCH: 12:20-1:05\nStudent Support: 1:15-2:25');
    }
}