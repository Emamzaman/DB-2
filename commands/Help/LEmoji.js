const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**بخش لیست خرید پک ایموجی DB ** <:help:778600706729967647>   ")
    .addField('خرید پک های ایموجی <:buy:778138002139381770> ', '<:cmd:811330358389243906>  `!!buy-emoji <اسم پک مورد نظر>`')
    .addField('لیست پک های ایموجی <:list:778695104696418356> ', 'Pubg **|** AmongUS **|** Original-Style')

    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"lemoji",
  aliases: [""]
}