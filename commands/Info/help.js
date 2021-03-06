const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, lang) => {
    let version = require("../../package.json").version;
    let discord_giveaways = require("../../package.json").dependencies["discord-giveaways"];
    let supportURL = client.config.auth.support;
    let web = "http://managegift.ga";
    let donate = "https://paypal.me/Hadikob";
    let invite = "https://discordapp.com/oauth2/authorize?client_id=598564396691750933&scope=bot&permissions=8";
    message.channel.send(new MessageEmbed()
        .setTitle(lang.help.title)
        .setAuthor(`ManageGift's | Version ${version}`)
        .setThumbnail('https://i.top4top.io/p_1603lgj9t1.gif')
        .setDescription(lang.help.disc)
        .addField(lang.help.giveawaycmd,'`create`, `start`, `end`, `edit`, `reroll`, `delete`')
        .addField(lang.help.featuredcmd,'`setlang`, `set logs`, `set mention on`, `set mention off`, `setprefix`, `set role`')
        .addField(lang.help.infocmd,'`stats`, `ping`, `invite`, `help`')
        .addField(lang.help.ownerbot, '`eval`, `blacklist`')
        .addField(lang.help.link, `[Support server](${supportURL}) ● [Donate](${donate}) ● [Website](${web}) ● [Invite](${invite})`)
        .setColor(client.config.embeds.color)
        .setFooter(client.config.embeds.footers));
}
