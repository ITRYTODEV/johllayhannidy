const Discord = require('discord.js')
const bot = new Discord.Client()
var prefixe = "-/"
const fs = require('fs')
//const talk = require('./commands/talk')

//instance
bot.on('ready', function () {
	bot.user.setActivity('*help', { type: 'WATCHING' }).catch(console.error)
	console.log("////////////////////////////////////////////")
	console.log("[!] Johllay Hannidy est connecté [!]")
	console.log("////////////////////////////////////////////")
})
//les commandes cachées
bot.on('message', function (message) {

	//if (message.content === ''){
	//	message.channel.send('')
	//	console.log('')
	//}

	if (message.content === 'parle CONNARD'){
		message.channel.send('ls JAMAIS!')
	}

	if (message.content === 'OHUI'){
		message.channel.send('LUSSYIE')
	}

	if (message.content === 'EHWI'){
		message.channel.send('JAMI')
		console.log('EHWI JAMI')
	}

	if (message.content === 'ehwi'){
		message.channel.send('jami')
		console.log('ehwi jami')
	}

	if (message.content === 'Owi'){
		message.channel.send('Lucie')
		console.log('Owi Lucie')
	}

	if (message.content === 'Ewi'){
		message.channel.send('Jamy')
		console.log('Ewi Jamy')
	}

	if (message.content === 'EWI'){
		message.channel.send('JAMY')
		console.log('EWI JAMY')
	}

	if (message.content === 'haiwi'){
		message.channel.send('jamie')
		console.log('haiwi jamie')
	}

	if (message.content === 'HAIWI'){
		message.channel.send('JAMIE')
		console.log('HAIWI JAMIE')
	}


	if (message.content === 'wesh'){
		message.channel.send('sava poto?')
		console.log('sivouplé je veux dé amis')
	}

	if (message.content === 'éwi'){
		message.channel.send('jamy')
		console.log('éwi jamie')
	}

	if (message.content === 'OWI'){
		message.channel.send('LUCIE')
		console.log('OWI LUCIE')
	}

	if (message.content === 'ping'){
		message.channel.send('pong')
		console.log("Quelqu'un dit ping")
	}

	if (message.content === 'owi'){
		message.channel.send('lucie')
		console.log('owi lucie')
	}

	if (message.content === 'ewi'){
		message.channel.send('jamy')
		console.log('ewi jamy')
	}

	if (message.content === 'ewi='){
		message.channel.send('enon' + ' HEIN VATRAX ?????')
		console.log('Vatrax est passé par là')
	}

	if (message.content === 'allumez le'){
		message.channel.send('FEU, COMME A NOOOOTRE DAME!')
		console.log("Quelqu'un a fait une blague limite limite")
	}

	//if (talk.match(message)) {
	//	return talk.action(message)
	//}

	
})
//commandes normales
bot.on('message', function (message) {

	if (message.content === '*combien') {
		let server_size = message.guild.members.size 
		message.channel.send('Il y a ' + server_size + ' personnes !')
		console.log("Quelqu'un a fait *combien")
	}

	if (message.content === '*meilleure chaîne tv?'){
		message.channel.send('Franceinfo, canal 27'+ ' https://www.francetvinfo.fr/')
		console.log('1ere chaine tv')
	}

	if (message.content === '*meilleure chaîne yt?'){
		let ytEmbed = new Discord.RichEmbed()
			.setDescription("Voici un top des meilleures chaînes YouTube")
			.setColor("#CC0000")
			.addField("1er : Willy27", "2e Lodulac (déso l'autre il m'aurait ban si il était deuxième)")
			.addField("3e : Lama Faché", "4e Baggins (il est beaucoup trop irrégulier mon créateur)")
			.setFooter("Voilà, c'était un top 4 des meilleures chaînes YouTube")
		message.channel.send(ytEmbed)
		console.log('Top YouTube')
	}

	//le *help
	if (message.content === '*help') {
		let testEmbed = new Discord.RichEmbed()
			.setDescription("Tu veux les commandes ? Les voilà.")
			.setColor("#00BFFF")
			.addField("*help = Bah les commandes ducon", "*combien = Pour savoir on est combien. DUCON")
			.addField("*meilleure chaîne tv? = La meilleure chaîne de la télévision de la France", "*meilleure chaîne yt? = Le top 4 des meilleures chaînes de YouToube ")
			.setFooter("T'as la commande que tu voulais ? Si tu l'as pas, pose ta question à un admin.")
		message.channel.send(testEmbed)
		console.log("Quelqu'un a fait *help")
	}

})

bot.on('message', function (message) {
	if(!message.guild) return
	let args = message.content.trim().split(/ +/g)
	if (args[0].toLowerCase() === prefixe + "t") {
	let say = args[1]
	message.channel.send(say)
	}
})


bot.on('guildMemberAdd', member => {

	koukou.send('Ah que koukou '+ member + ' sur le serveur des Fotes de Ortografe ! Fais *help pour avoir mes commandes !')
})

bot.on('guildMemberRemove', member => {
	koukou.send('Au revoir ' + member + "   https://www.youtube.com/watch?v=xLHN9pz5Dms")
})

bot.login(process.env.TOKEN)