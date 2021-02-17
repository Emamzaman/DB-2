const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات اکونومی بات DB <:cmd:811330358389243906>  ")
    .addField("اگر نمیدونید چگونه پیکوین به دست بیاورید این دستور را بزنید <:Pvoin:778188788522418176>  ", "<:cmd:811330358389243906>  `!!makepcoin`")
    .addField("راهنمای استفاده از پی بانک <:pbank:811331113028288512>  ", "<:cmd:811330358389243906>  `!!bank`")
    .addField("راهنمای شخصی سازی پروفایل <:dev:811331114198368296> ", "<:cmd:811330358389243906>  `!!help-profile`")
    .addField("راهنمای اطلاعات شخصی <:profile:811331113557557268> ", "<:cmd:811330358389243906>  `!!help-info`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"cmd",
  aliases: [""]
}