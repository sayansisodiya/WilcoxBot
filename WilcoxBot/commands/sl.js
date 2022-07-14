module.exports = {
    name: 'sl',
    aliases: ['schoolloop'],
    description: "sends link to School Loop portal login",
    execute(message, args) {
        message.channel.send('Wilcox School Loop login:\nhttps://wilcox.schoolloop.com/portal/login');
    }
}