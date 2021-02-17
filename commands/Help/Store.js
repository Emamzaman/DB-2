const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**به فروشگاه بزرگ DB خوش آمدید** <:help:778600706729967647>   ")

    .addField("راهنمای خرید کارکتر <:character:778109077670461491>  ", "<:cmd:811330358389243906>  `!!character-store`")
    .addField("راهنمای شخصی سازی پروفایل <:dev:811331114198368296> ", "<:cmd:811330358389243906>  `!!help-profile`")
    .addField("اگر قصد خریدایموجی دارید این دستورد را بزنید <:emoji:778595734765174825> ", "<:cmd:811330358389243906>  `!!emoji-store`")
    .addField("راهنمای خرید اسلحه <:gun:778594827108483072>  ", "<:cmd:811330358389243906>  `!!gun-store`")
    .addField("راهنمای خرید ارز <:money:778590631307771936>", "<:cmd:811330358389243906>  `!!arz-store`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: [""]
}
