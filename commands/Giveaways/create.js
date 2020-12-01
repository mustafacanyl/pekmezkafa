const Discord = require('discord.js');
const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');

module.exports.run = async (bot, message, args) => {
      let role = client.db.fetch(`role_${message.guild.id}`);
    if (!role) role = client.config.giveaway.grole;
    
    if (!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.some((r) => r.name === role))
     message.channel.send(lang.create.perms + "** **" + "`" + role + "`" + "!.");
      return;
    }
    message.channel.send('<a:Blob:740349851266580531> Please select the channel you want to host the giveaway\nYou can cancel the giveaway at any time by saying \`cancel\`.');
    await startMessageCollectors(bot, message, args);
}

module.exports.config = {
    name: "create",
    description: "Creates a giveaway step by step.",
    usage: "p!create",
    accessableby: "manageServer, manageMessages",
    aliases: []
}

function startMessageCollectors(bot, message, args) {
    let channelFilter = m => m.author.id === message.author.id;
    let channelCollector = new Discord.MessageCollector(message.channel, channelFilter, { max: 999 });

    channelCollector.on('collect', async msg => {
      let channel = await msg.mentions.channels.first();
      if (msg.content.toLowerCase() === 'cancel') {
        msg.channel.send('The giveaway has been <:Verified:740350406051496067> successfully canceled.')
        channelCollector.stop();
        return;
      }
      if (!channel) {
        await msg.channel.send('That is not a valid channel!');
        await channelCollector.stop();
        return;
      } else {
        msg.channel.send(`<:Blob:740349910905258074> The giveaway will be hosted in ${channel.toString()}. How long do you want the giveaway to last?\nExample: 20m, 1h`)
        channelCollector.stop();
      }
      let durationFilter = m => m.author.id === message.author.id;
      let durationCollector = new Discord.MessageCollector(message.channel, durationFilter, { max: 999 });
    durationCollector.on('collect', async msg => {
        let duration = msg.content;
        if (msg.content.toLowerCase() === 'cancel') {
          msg.channel.send('The giveaway has been canceled.')
          durationCollector.stop();
          return;
        }
        if (!duration || isNaN(ms(duration))) {
          await msg.channel.send('You did use a valid time format!')
          durationCollector.stop();
          return;
        } else {
          msg.channel.send(`<a:Blob:740349851266580531> The giveaway will last **${prettyMilliseconds(ms(duration), {verbose: true})}**. How many winners do you want to have?\nThe max amount of winners you can have is 20.`);
          durationCollector.stop();
        }
        let winnersFilter = m => m.author.id === message.author.id;
        let winnersCollector = new Discord.MessageCollector(message.channel, winnersFilter, { max: 999 });
    winnersCollector.on('collect', async msg => {
        let winners = msg.content;
        let trueWinners = Math.round(winners);
        if (msg.content.toLowerCase() === 'cancel') {
          msg.channel.send('The giveaway has been canceled.')
          winnersCollector.stop();
          return;
        }
        if (isNaN(trueWinners) || (parseInt(trueWinners) <= 0 || trueWinners > 20)) {
          await msg.channel.send(`You didn't provide a valid amount of winners!`);
          winnersCollector.stop();
          return;
        } else {
          msg.channel.send(`<a:Blob:740349851266580531> There will be ${trueWinners} winner(s). Now, what do you want the prize to be?`)
          winnersCollector.stop();
        }
        let prizeFilter = m => m.author.id === message.author.id;
        let prizeCollector = new Discord.MessageCollector(message.channel, prizeFilter, { max: 999 });
    prizeCollector.on('collect', async msg => {
        let prize = msg.content;
        if (msg.content.toLowerCase() === 'cancel') {
          msg.channel.send('The giveaway has been canceled.')
          prizeCollector.stop();
          return;
        }
        if (!prize) {
          await msg.channel.send(`You didn't specify a prize!`)
          prizeCollector.stop();
          return;
        } else {
          msg.channel.send(`<a:Blob:740349851266580531> The giveaway has been created in ${channel.toString()}.`);
          prizeCollector.stop();
          bot.giveawaysManager.start(channel, {
            time: ms(duration),
            prize: prize,
            winnerCount: trueWinners,
            hostedBy: bot.config.hostedBy ? message.author : null,
            messages: {
              giveaway: (bot.config.everybodyMention ? "@everyone\n\n" : "")+"<a:Blob:740349851266580531> **GIVEAWAY** <a:Blob:740349851266580531>",
              giveawayEnded: (bot.config.everyoneMention ? "@everyone\n\n" : "")+"<a:Blob:740349851266580531> **GIVEAWAY ENDED** <a:Blob:740349851266580531>",
              timeRemaining: "Time remaining: **{duration}**",
              inviteToParticipate: "React with 🎉",
              winMessage: "Congratulations, {winners}. You won the **{prize}**!",
              embedFooter: "Giveaways",
              noWinner: "Nobody reacted.",
              hostedBy: "Hosted by: {user}",
              winners: "winner(s)",
              endedAt: "Ended at",
              units: {
                  seconds: "seconds",
                  minutes: "minutes",
                  hours: "hours",
                  days: "days",
                  pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                  }
              }
            });
    }
  });
  });
  });
  });
}
