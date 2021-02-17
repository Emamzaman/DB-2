const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setTitle("راهنمای بدست آوردن پی کوین در بات DB <:Pvoin:778188788522418176> ")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField('پیکوین چیست؟:', 'پیکوین یک واحد پول در بات DB هست که باش میتونید کلی کار خفن کنید!')
    .addField("جایزه هفتگی <:Pvoin:778188788522418176> ", "<:cmd:811330358389243906>  `!!weekly`", true)
    .addField("جایزه روزانه <:Pvoin:778188788522418176> ", "<:cmd:811330358389243906>  `!!daily`", true)
    .addField("کار کردن <:work:778192442134364162> ", "<:cmd:811330358389243906>  `!!work`")
    .addField("گدایی <:cadge:778326650806992916> ", "<:cmd:811330358389243906>  `!!cadge`")
    .addField("هدیه دادن <:gift:778138012272951306> ", "<:cmd:811330358389243906>  `!!gift <منشن شخص مورد نظر>`")
    .addField("قمار <:slots:778109535683477524> ", "<:cmd:811330358389243906>  `!!slots <مبلغ مورد نظر>`")
    .addField(" دزدی کردن از دیگران <:rob:778188789100707840> ", "<:cmd:811330358389243906>  `!!rob <منشن شخص مورد نظر>`")
    .addField(" حمله به اکانت دیگران <:attack:778109062482100250> ", "<:cmd:811330358389243906>  `!!attack <منشن شخص مورد نظر>`")
    .addField("چت کردن <:msg:778138053193367562>", "<:cmd:811330358389243906>  `Chat چت کنید و پی کوین بگیرید`")
    .addField("لول آپ شدن <:level:778138052987715594>  ", "<:cmd:811330358389243906>   `Lvl Upبا چت کردن لول آپ  شوید`")
    .addField('دستور انتقال پیکوین <:sell:778188790228320266>', '<:cmd:811330358389243906>  `!!pay <مبلغ مورد نظر> <شخص مورد نظر>`')
    .addField('دستور فروشگاه بات <:buy:778138002139381770>', '<:cmd:811330358389243906>  `!!store`')
    .setColor("#f2ecec")

    message.channel.send(embed)





}
    module.exports.help = {
        name:"makepcoin",
        aliases: [""]
    }