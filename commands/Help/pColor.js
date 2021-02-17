const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای خرید رنگ پروفایل <:help:778600706729967647>   ")
    .addField("دستور خرید رنگ ها <:buy:778138002139381770>", "<:cmd:811330358389243906>  `!!buy-color red`")
    .addField("دستور فروش رنگ ها <:sell:778188790228320266>", "<:cmd:811330358389243906>  `!!sell-color <red>`")
    .addField("لیست رنگ های موجود <:list:778695104696418356> ", "<:cmd:811330358389243906>  `!!lcolor`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"color",
  aliases: [""]
}