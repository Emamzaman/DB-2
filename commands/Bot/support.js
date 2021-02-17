const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports.run = async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('DB Team')
            .setURL('https://discord.gg/Q4WB3J3Ahk')
            .setColor("#f2ecec")
            .addField("مشکل بات رو بنویسید <:support:811333096866709544> ", "`!!bug <مشکل شما با بات>`")
    .addField("پیشنهادات خودتون رو بنویسید <:support:811333096866709544> ", "`!!proposal <ایده و یا پیشنهاد خودتون رو بنویسید>`")
    .setAuthor('DiscordBox ™',  `https://cdn.discordapp.com/emojis/778192441424740362.png?v=1`)

        await message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"support",
        aliases: ["s"]
      }