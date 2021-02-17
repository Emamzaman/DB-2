const Discord = require('discord.js')

    
    module.exports.run = async (bot, message, args) => {
        
    
    
        let embed = new Discord.MessageEmbed()
        .setThumbnail(bot.user.displayAvatarURL())
        .setTitle("راهنمای دستورات اطلاعات شخصی بات <:help:778600706729967647>   ")
        .addField('انتخاب نام 💠', '<:cmd:811330358389243906>   `!!set first-name <نام>`')
        .addField('انتخاب نام خانوادگی 💫', '<:cmd:811330358389243906>  `!!set last-name <فامیلی>`')
        .addField('انتخاب سن 🔞', '<:cmd:811330358389243906>   `!!set age <سن>`')
        .addField('انتخاب شهر 🌆', '<:cmd:811330358389243906>   `!!set city <شهر>`')
        .addField('انتخاب خواننده مورد علاقه 🎶', '<:cmd:811330358389243906>   `!!set singer <خواننده>`')
        .addField('انتخاب فوتبالیست مورد علاقه ⚽', '<:cmd:811330358389243906>   `!!set football <فوتبالیست>`')
        .addField('انتخاب بیو 🌐', '<:cmd:811330358389243906>   `!!set bio <بیو>`')
        .addField('انتخاب شماره تلفن 📱', '<:cmd:811330358389243906>   `!!set phonenumber <شماره>`')
        .addField('انتخاب اکانت جیمیل <:gmail:773945082326810665>', '<:cmd:811330358389243906>   `!!set gmail <نام اکانت>`')
        .addField('انتخاب اکانت اینستاگرام <:ig:773944358156238849>', '<:cmd:811330358389243906>   `!!set instagram <نام اکانت>`')
        .addField('انتخاب اکانت اسپاتیفای <:spotify:747084576534560769>', '<:cmd:811330358389243906>   `!!set spotify <نام اکانت>`')
        .addField('انتخاب اکانت یوتیوب <:Youtube:766036743534542850>', '<:cmd:811330358389243906>   `!!set youtube <نام اکانت>`')
        .setColor('f2ecec')
        message.channel.send(embed)
       
    
    
    
    }
    
    module.exports.help = {
      name:"help-info",
      aliases: [""]
    }