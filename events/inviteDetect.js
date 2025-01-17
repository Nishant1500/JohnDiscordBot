const discordInv = require('discord-inv');

module.exports = {
	name: "messageCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(message, client) {
      // The message to check for a Discord link
      const regex = /discord.gg\/\w*\d*/

// The message will be tested on "discord.gg/{any character or digit}"
var containsDiscordUrl = regex.test(message.content);

      if(containsDiscordUrl) {
  var link = regex.exec(message.content);
        


if(message.member.roles.highest.position > message.guild.roles.cache.get("949476126777049109").position) return;

if(link && !message.author.bot) {
discordInv.getInv(discordInv.getCodeFromUrl('https://' + link[0])).then((invite) => {

    if(invite.guild.id != '949475866201694258') {
      message.reply({
    content: 'Please do not send a discord invite.'
  }).then(m => message.delete());
    }

}).catch((err) => console.log('This is not a valid invite', err))
} 
      };
  }
}
