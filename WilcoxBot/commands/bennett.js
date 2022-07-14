module.exports = {
    name: 'bennett',
    aliases: ['referral'],
    description: "sends link to Mr. Bennett's music video, \'Heatwave\'",
    execute(message, args) {
        message.channel.send('https://www.youtube.com/watch?v=-gOAmgJA7m0');
    }
}