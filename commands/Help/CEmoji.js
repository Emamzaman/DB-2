const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای بخش ایموجی <:help:778600706729967647>   ")
    .addField('خرید پک های ایموجی <:emoji:778595734765174825> ', '<:cmd:811330358389243906>  `!!buy-emoji <#01>`')
    .addField('مشاهده پک های موجود ایموجی <:emoji:778595734765174825> ', '<:cmd:811330358389243906>  `!!lemoji`')
   
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"emoji-store",
  aliases: [""]
}