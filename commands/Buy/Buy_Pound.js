const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
  
    
const resp = math.evaluate(args[0]*293);

let user = message.mentions.members.first()
let targetuser = await db.fetch(`pcoin_${message.guild.id}_${message.author.id}`)
let author = await db.fetch(`dollartb_${message.guild.id}_${message.author.id}`)

let timeout = 86400;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما همین الان ارز خریداری کردید و صرافی برای شما تا ${time.hours}h ${time.minutes}m ${time.seconds}s ساعت دیگر بسته است   **|** ❌    `);
    
    message.channel.send(timeEmbed)
  } else {
let moneyEmbed2 = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما حداقل نیاز به **.${resp}.** پیکوین برای خرید **.${args[0]}.**ارز دارید  **|** ❌    `)
.addField("اگر پیکوین لازم را ندارید از این دستور استفاده کنید", "`!!makepcoin`");

if (targetuser < resp) {
    return message.channel.send(moneyEmbed2)
}


let embed = new Discord.MessageEmbed()
.setDescription(`**شما پوند خریدید** **.${resp}.** پیکوین دادید و. **.${args[0]}.** پوند گرفتید. `)
 .setColor("#f2ecec")
message.channel.send(embed)
db.subtract(`pcoin_${message.guild.id}_${message.author.id}`, resp)
db.add(`pound_${message.author.id}`, args[0])

db.set(`dollartb_${message.guild.id}_${message.author.id}`, Date.now())
  
};
}

module.exports.help = {
  name: "buy-pound",
  aliases: [""]
}