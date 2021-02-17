const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
  
    
const resp = math.evaluate(args[0]*165);

let author = await db.fetch(`silverst_${message.guild.id}_${message.author.id}`)

let timeout = 86400;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما همین الان نقره فروختید و طلا فروشی برای شما تا ${time.hours}h ${time.minutes}m ${time.seconds}s ساعت دیگر بسته است   **|** ❌    `);
    
    message.channel.send(timeEmbed)
  } else {

let embed = new Discord.MessageEmbed()
.setDescription(`**شما نقره فروختید** **.${resp}.** پیکوین گرفتید و. **.${args[0]}.** گرم نقره دادید. `)
 .setColor("#f2ecec")
message.channel.send(embed)
db.all(`pcoin_${message.guild.id}_${message.author.id}`, resp)
db.subtract(`silver_${message.author.id}`, args[0])

db.set(`silverst_${message.guild.id}_${message.author.id}`, Date.now())
  
};
}

module.exports.help = {
  name: "sell-silver",
  aliases: [""]
}