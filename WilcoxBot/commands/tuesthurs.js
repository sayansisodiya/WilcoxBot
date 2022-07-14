module.exports = {
    name: 'tuesday',
    aliases: ['tuesday', 'thursday', 'tues', 'thurs'],
    description: "sends bell schedule for Tuesday/Thursday",
    execute(message, args) {
        message.channel.send('1st: 8:30-9:40\n3rd: 9:50-11:00\n5th: 11:10-12:20\nLUNCH: 12:20-1:05\n7th: 1:15-2:25');
    }
}