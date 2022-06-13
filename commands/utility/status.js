const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const admins = ['908563963392958464', '630070645874622494']

module.exports = {
	name: "ping",
	description: 'Ping!',
	usage: '',
	permissions: 'SEND_MESSAGES',
	guildOnly: true,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	async execute(client, message, args) {
         if(!admins.includes(message.author.id)) return message.reply({ content: 'You don't have permission to use this.' })
          
// Set the client user's presence
client.user.setPresence({ activities: [{ name: `${args[0]` }], status: args[1] ? args[1] : client.user.presence.status });
        },
}
