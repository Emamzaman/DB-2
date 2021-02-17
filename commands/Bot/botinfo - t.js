const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (client, message, args) => {


    let premuimserver = await db.fetch(`premium_${message.guild.id}`)
    let developer = await db.fetch(`developer_${message.guild.id}`)

      if(premuimserver === null) premuim = 'DiscordBox Server'
      if(premuimserver === true) premuim = '<:premium:778593199798747146> Premium Server'
      if(developer === true) premuim = '<:theDiscordBoxlogo:778851015445315614> Developers Server'
      
    let DiscordBoxprefix = db.fetch(`${message.guild.id}prefix`) || "!!";

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor('DiscordBox ™',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`)
            .setColor("#f2ecec")
            .addFields(
                {
                    name: 'تعداد سرور های فعال <:server:778950784787546112>  ',
                    value: `فعال در **.${client.guilds.cache.size}** سرور`,
                    inline: true
                },
            
                {
                    name: 'پینگ ربات 📡 ',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                },
                {
                    name: 'پریفیکس در سرور ⁉ ',
                    value: `**${DiscordBoxprefix}**`,
                    inline: true
                },
                {
                    name: 'وضعیت بات در سرور <:premium:778593199798747146>  ',
                    value: `**${premuim}**`,
                    inline: true
                },
                
                {
                    name: 'دستور اینوایت من <:link:811331711199477761> ',
                    value: '**!!invite**',
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"#botinfo",
        aliases: ["ieinfo"]
      }