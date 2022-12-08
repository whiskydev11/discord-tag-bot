const { Client, Collection, MessageEmbed } = require("discord.js");
const { createDatabase } = require("whisky.db");
const db = new createDatabase()
const moment = require("moment-timezone");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

const months = { "01": "Ocak", "02": "Şubat", "03": "Mart", "04": "Nisan", "05": "Mayıs", "06": "Haziran", "07": "Temmuz", "08": "Ağustos", "09": "Eylül", "10": "Ekim", "11": "Kasım", "12": "Aralık" }

client.login(client.config.token);

client.on('debug', (limit) => {
   if (limit.startsWith("Hit a 429")) {
   console.log("Bot Rate Limite Takıldı, Terminal Kapatılıyor.")
  process.kill(1)
   }});


/*

* @description Genel Sistemi Yazıyoruz.
* @developer Whisky#0001

*/

client.on("userUpdate", async (oldUser, newUser) => {

  if (db.get("sistem") != "acik") return

if (oldUser.discriminator != newUser.discriminator) {

  if (client.config.etiketTag != "Yok") {

if (newUser.discriminator == client.config.etiketTag) {

client.guilds.cache.get(client.config.sunucuId).members.cache.get(newUser.id).roles.add(client.config.verilecekRolId)

let datee = moment(new Date()).tz("Europe/Istanbul")

db.push("log", `${newUser.username}#${newUser.discriminator} (${newUser.id}) Etiket tagı aldı. **[${datee.format("DD")} ${months[datee.format("MM")]} ${datee.format("YYYY")}]**`)
  
const embedTag1 = new MessageEmbed()
.setAuthor({ name: "Ailemize Hoşgeldin!", iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`})
.setDescription(`<@${newUser.id}>, Etiket tagımız olan **#${client.config.etiketTag}** tagını aldı ve ailemize katıldı. <@&${client.config.verilecekRolId}> rolün verildi!`)
.setFooter({ text: client.guilds.cache.get(client.config.sunucuId).name, iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`}) 
.setTimestamp()
.setColor("GREEN")

client.channels.cache.get(client.config.tagKanal).send({ embeds: [embedTag1], content: `<@${newUser.id}>`})
  return
} 
return
} 

if (oldUser.discriminator == client.config.etiketTag) {

if (newUser.discriminator != client.config.etiketTag) {

client.guilds.cache.get(client.config.sunucuId).members.cache.get(newUser.id).roles.remove(client.config.verilecekRolId)

let datee2 = moment(new Date()).tz("Europe/Istanbul")

db.push("log", `${newUser.username}#${newUser.discriminator} (${newUser.id}) Etiket tagını kaldırdı. **[${datee2.format("DD")} ${months[datee2.format("MM")]} ${datee2.format("YYYY")}]**`)

const embedCikti = new MessageEmbed()
.setAuthor({ name: "Ailemizden Ayrıldı!", iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`})
.setDescription(`<@${newUser.id}>, Etiket tagımız olan **#${client.config.etiketTag}** tagını değiştirdi ve ailemizden ayrıldı. <@&${client.config.verilecekRolId}> rolün alındı! Hoşçakal.. 😑`)
.setFooter({ text: client.guilds.cache.get(client.config.sunucuId).name, iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`}) 
.setTimestamp()
.setColor("GREEN")

client.channels.cache.get(client.config.tagKanal).send({ embeds: [embedCikti], content: `<@${newUser.id}>`})
  
return
}

return
}
  
return
}


if (oldUser.username != newUser.username) {
  
if (client.config.isimTag != "Yok") {


if (oldUser.username.includes(client.config.isimTag) && !newUser.username.includes(client.config.isimTag)) {

client.guilds.cache.get(client.config.sunucuId).members.cache.get(newUser.id).roles.remove(client.config.verilecekRolId)

let datee3 = moment(new Date()).tz("Europe/Istanbul")

db.push("log", `${newUser.username}#${newUser.discriminator} (${newUser.id}) Isim tagını kaldırdı. **[${datee3.format("DD")} ${months[datee3.format("MM")]} ${datee3.format("YYYY")}]**`)

  const embedCikti2 = new MessageEmbed()
.setAuthor({ name: "Ailemizden Ayrıldı!", iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`})
.setDescription(`<@${newUser.id}>, Isim tagımız olan **#${client.config.isimTag}** tagını isminden kaldırdı ve ailemizden ayrıldı. <@&${client.config.verilecekRolId}> rolün alındı! Hoşçakal.. 😑`)
.setFooter({ text: client.guilds.cache.get(client.config.sunucuId).name, iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`}) 
.setTimestamp()
.setColor("GREEN")

client.channels.cache.get(client.config.tagKanal).send({ embeds: [embedCikti2], content: `<@${newUser.id}>`})

return
}
  
if (newUser.username.includes(client.config.isimTag)) {

if (oldUser.username.includes(client.config.isimTag)) return

client.guilds.cache.get(client.config.sunucuId).members.cache.get(newUser.id).roles.add(client.config.verilecekRolId)

let datee4 = moment(new Date()).tz("Europe/Istanbul")

db.push("log", `${newUser.username}#${newUser.discriminator} (${newUser.id}) Isim tagı aldı. **[${datee4.format("DD")} ${months[datee4.format("MM")]} ${datee4.format("YYYY")}]**`)

const embedTag2 = new MessageEmbed()
.setAuthor({ name: "Ailemize Hoşgeldin!", iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`})
.setDescription(`<@${newUser.id}>, Isim tagımız olan **${client.config.isimTag}** tagını aldı ve ailemize katıldı. <@&${client.config.verilecekRolId}> rolün verildi!`)
.setFooter({ text: client.guilds.cache.get(client.config.sunucuId).name, iconURL: `${client.users.cache.get(newUser.id).displayAvatarURL({ dynamic: true })}`}) 
.setTimestamp()
.setColor("GREEN")
  
client.channels.cache.get(client.config.tagKanal).send({ embeds: [embedTag2], content: `<@${newUser.id}>`})

  return
}

return
}

return
}                           
});
