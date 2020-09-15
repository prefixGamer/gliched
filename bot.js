//
//
//
// Requires
//
//
//

const {
    Client,
    Attachment,
    MessageAttachment,
    MessageEmbed,
    DiscordAPIError,
    GuildMember,
    Message,
    version,
    Guild,
    DMChannel,
    VoiceState
} = require('discord.js'); //Require Discord.js


const config = require('./data/server/config.json')


//
//
//
// variables
//
//
//

const client = new Client().setMaxListeners(50)

const prefix = '+';

const d = new Date();




//
//
//
// ON START
//
//
//
client.login('NzU1NDU2OTI2NDI2MzMzMjU3.X2DkFg.JULTMHel0NikyBnwQJFIII43ZHw')

console.clear()

client.on('ready', () => {
    console.log('Bot started')
    client.user.setActivity('prefix: '+prefix, {
        type: 'WATCHING'
    });
})

client.on('message', message => {
    if(message.content === prefix+'ping'){
        message.reply('The bot\'s current ping is: ' + Math.round(client.ws.ping).toString())
    }
})