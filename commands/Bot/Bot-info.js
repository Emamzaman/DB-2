const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

    message.delete();

    
    let premuimserver = db.fetch(`${message.guild.id}premium`)
   
    let DiscordBoxprefix = db.fetch(`${message.guild.id}prefix`) || "!!";

    const Loading = new Discord.MessageEmbed().setColor('').setTitle('Loading...')
    message.channel.send(Loading)
    .then((message1) => {
      setInterval(function() {
        message1.edit(new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()) .setAuthor('DiscordBox ™',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`).setColor("#f2ecec")
            .addFields(
                {
                    name: 'تعداد سرور های فعال 🔍  ',
                    value: `فعال در **${client.guilds.cache.size}** سرور`,
                    inline: true
                },
            
                {
                    name: 'پینگ ربات 📡 ',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                },
                
                {
                    name: '‼  پریفیکس در سرور',
                    value: `**!!**`,
                    inline: true
                },
                {
                    name: 'وضعیت بات در سرور 🎈  ',
                    value: `**${premuimserver}**`,
                    inline: true
                },               
                {
                    name: 'دستور اینوایت من <a:reg2:804366325761572864>  ',
                    value: '**!!invite**',
                    inline: true
                }
            ))
            message1.edit(new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()) .setAuthor('DiscordBox ™',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`).setColor("#f2ecec")
            .addFields(
                {
                    name: 'تعداد سرور های فعال <:server:778950784787546112>  ',
                    value: `فعال در **${client.guilds.cache.size}** سرور`,
                    inline: true
                },
            
                {
                    name: 'پینگ ربات 📡 ',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                },
                {
                    name: 'پریفیکس در سرور ⁉  ',
                    value: `**${DiscordBoxprefix}**`,
                    inline: true
                },
                {
                    name: 'وضعیت بات در سرور 🎈 ',
                    value: `**${premuimserver}**`,
                    inline: true
                },
                               
                {
                    name: 'دستور اینوایت من <a:reg2:804366325761572864>  ',
                    value: '**!!invite**',
                    inline: true
                }
            ))
        }, 50000)})
    
    }
 
    module.exports.help = {
        name:"botinfo",
        aliases: [""]
      }