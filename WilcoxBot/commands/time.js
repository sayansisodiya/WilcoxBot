module.exports = {
    name: 'time',
    aliases: ['timeleft'],
    description: 'returns time left in class/lunch if school is in session, lets you know if school is not in session',
    execute(message, args) {
        var d = new Date();
        var day = d.getDay();
        var hour = getCorrectHours(d);
        var minute = d.getMinutes();

        var currentTime = (hour * 100) + minute;
        var startHour;
        var timeLeft;
        
        //to check output's validity
        //console.log(d);
        //console.log(day + " " + hour + " " + minute);
        //console.log(currentTime);
        //console.log(d.getTimezoneOffset());

        if(day < 1 || day > 5) {//WEEKEND ----------------------------------------
            

            message.channel.send("It's not a schoolday!");



        } else if(day == 1) {//MONDAY ----------------------------------------
            

            if(currentTime >= 830 && currentTime <= 910) {//1st period
                message.channel.send("1st period:");
                spansTwoHours(830, 910, 40);

            } else if(currentTime >= 915 && currentTime <= 955) {//2nd period
                message.channel.send("2nd period:");
                timeLeft = 955 - currentTime;

            } else if(currentTime >= 1000 && currentTime <= 1040) {//3rd period
                message.channel.send("3rd period:");
                timeLeft = 1040 - currentTime;

            } else if(currentTime >= 1045 && currentTime <= 1125) {//4th period
                message.channel.send("4th period:");
                spansTwoHours(1045, 1125, 40);

            } else if(currentTime > 1125 && currentTime < 1155) {//lunch
                message.channel.send("Lunch:");
                timeLeft = 1155 - currentTime;

            } else if(currentTime >= 1155 && currentTime <= 1235) {//5th period
                message.channel.send("5th period:");
                spansTwoHours(1155, 1235, 40);

            } else if(currentTime >= 1240 && currentTime <= 1320) {//6th period
                message.channel.send("6th period:");
                spansTwoHours(1240, 1320, 40);

            } else if(currentTime >= 1320 && currentTime <= 1405) {//7th period
                message.channel.send("7th period:");
                spansTwoHours(1320, 1405, 40);
            }



        } else if(day >= 2 && day <= 5) {//TUESDAY, WENESDAY, THURSDAY, OR FRIDAY ----------------------------------------


            if(currentTime >= 830 && currentTime <= 940) {//1st period or 2nd period
                message.channel.send("1st/2nd period:");
                spansTwoHours(830, 940, 70);

            } else if(currentTime >= 950 && currentTime <= 1100) {//3rd period or 4th period
                message.channel.send("3rd/4th period:");
                spansThreeHours(950, 1100, 70);

            } else if(currentTime > 1110 && currentTime < 1220) {//5th period or 6th period
                message.channel.send("5th/6th period:");
                spansTwoHours(1110, 1220, 70);

            } else if(currentTime >= 1220 && currentTime <= 1305) {//lunch
                message.channel.send("Lunch:");
                spansTwoHours(1220, 1305, 45);

            } else if(currentTime >= 1315 && currentTime <= 1435) {//7th period
                message.channel.send("7th period/Student Support:");
                spansTwoHours(1315, 1425, 70);
            }
        }

        //checks if timeLeft was assigned a value above; if it wasn't, there is no class currently, if it was, it prints out the time left in that class
        if(isNaN(timeLeft)) {
            if(day >= 1 && day <= 5) {
                message.channel.send("There is no class right now!");
            }
        } else {
            message.channel.send("There are " + timeLeft + " minutes left in class/lunch");
        }


        //function below calculates time left for classes that start in one hour and finish in the next (i.e. 8:30 to 9:50)
        function spansTwoHours(classStart, classEnd, classLength) {
            startHour = ((classStart - (classStart%100)) / 100);
          
            if(hour == startHour) {
              timeLeft = classLength - (currentTime - classStart);
            } else {
              timeLeft = classEnd - currentTime;
            }
        }

        //function below calculates time left for classes that start in one hour and finish in the hour after the next (i.e. 11:50 to 13:10)
        function spansThreeHours(classStart, classEnd, classLength) {
            startHour = ((classStart - (classStart%100)) / 100);
            secondHour = startHour + 1;
            //console.log(startHour + " " + secondHour + " " + currentTime + " " + (currentTime - (secondHour*100)) + " " + ((secondHour*100) - 40 - classStart));

            if(hour == startHour) {
                timeLeft = classLength - (currentTime - classStart);
            } else if(hour == secondHour) {
                timeLeft = classLength - ((currentTime - (secondHour*100)) + ((secondHour*100) - 40 - classStart));
            } else {
                timeLeft = classEnd - currentTime;
            }
        }

        function getCorrectHours(date) {
            //CHANGE FOR DAYLIGHT SAVINGS
            var offsetInHours = 7;
            //console.log(offsetInHours);
            if(date.getHours() - offsetInHours >= 0) {
                //console.log(date.getHours() - offsetInHours);
                return date.getHours() - offsetInHours;
            } else {
                day--;
                //console.log(24 - (offsetInHours - date.getHours()));
                return 24 - (offsetInHours - date.getHours());
            }
        }
    }
}