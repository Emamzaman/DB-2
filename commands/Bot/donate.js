const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
   
    .setThumbnail(bot.user.displayAvatarURL())
    .addField("DB Team", "**[Donate](https://idpay.ir/DiscordBox-development)\n[Supporter Server](https://discord.gg/Q4WB3J3Ahk)**")
    .addField('درخواست شده توسط : ', `${message.author}`)
    .setColor("#f2ecec")
    
    message.channel.send(embed)





}
    module.exports.help = {
        name:"donate",
        aliases: [""]
    }