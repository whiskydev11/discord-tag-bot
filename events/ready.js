const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} ile giriş yapıldı!`)
  client.user.setStatus("idle")
client.user.setActivity("❤️  Whisky", { type: "WATCHING" })
});
