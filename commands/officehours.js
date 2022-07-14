//const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'officehours',
    aliases: ['studentsupport'],
    description: "sends schedule and link for a teacher's office hours based on teacher last name input by user (i.e. \'officehours <last name>\')",
    execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`${message.author.username}, you need to type a teacher's last name after \'officehours\'`);
            return;
        } 
        
        message.channel.send("Office hours are usually from 1:15 to 2:35 on Wed/Fri")

        if(args[0] == "hedlund") {
            message.channel.send('Mr. Hedlund: https://meet.google.com/kvz-mthh-nqn');
        } else if(args[0] == "guttadauro") {
            message.channel.send("Mrs. Guttadauro: https://meet.google.com/xao-pjgu-abr");
        } else if(args[0] == "dobos") {
            message.channel.send("Mr. Dobos: https://meet.google.com/ijf-ugqf-sav");
        } else if(args[0] == "muralt") {
            message.channel.send("Mr. Muralt: https://meet.google.com/vma-wwfn-cav?authuser=1&hs=179");
        } else if(args[0] == "chaid") {
            message.channel.send("As far as I know Mr. Chaid doesn't have an office hours link.");
        } else if(args[0] == "bennett") {
            message.channel.send("Mr. Bennett: https://meet.google.com/fvx-aiik-piz");
        } else if(args[0] == "hight") {
            message.channel.send("As far as I know Ms. Hight dosn't have an office hours link.");
        } else {
            message.channel.send("I don't have the office hours link for that teacher. If you have it, please message KarmaTheChicken or email sayans@gmail.com!")
        }

        
        //message.channel.send('gov: no idea tbh\ncalc: wed/fri, 1:15-2:30\n    https://meet.google.com/kvz-mthh-nqn\nlit: wed/fri, 1:15-2:30\n    https://meet.google.com/xao-pjgu-abr\nphysics: wed/fri, 1:15-2:30\n    https://meet.google.com/ijf-ugqf-sav');
    }
}