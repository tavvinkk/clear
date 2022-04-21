const Discord = require("selfbot.js.v11")
const client = new Discord.Client()
const settings = require("./config.json")
const token = settings.token;
const myID = settings.ID;
const amountDel = settings.bulk;
const colors = require("colors")
const title = require("console-title")

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear()
var title1 = String.raw`


██▓███   █    ██  ██▀███    ▄████ ▓█████  ██▀███  
▓██░  ██▒ ██  ▓██▒▓██ ▒ ██▒ ██▒ ▀█▒▓█   ▀ ▓██ ▒ ██▒
▓██░ ██▓▒▓██  ▒██░▓██ ░▄█ ▒▒██░▄▄▄░▒███   ▓██ ░▄█ ▒
▒██▄█▓▒ ▒▓▓█  ░██░▒██▀▀█▄  ░▓█  ██▓▒▓█  ▄ ▒██▀▀█▄  
▒██▒ ░  ░▒▒█████▓ ░██▓ ▒██▒░▒▓███▀▒░▒████▒░██▓ ▒██▒
▒▓▒░ ░  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░ ░▒   ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░
░▒ ░     ░░▒░ ░ ░   ░▒ ░ ▒░  ░   ░  ░ ░  ░  ░▒ ░ ▒░
░░        ░░░ ░ ░   ░░   ░ ░ ░   ░    ░     ░░   ░ 
            ░        ░           ░    ░  ░   ░     
                                                   






        by: gomex#3000

`
process.title = `Purger Discord V1`

client.on("ready", () => {
    console.log(colors.brightCyan(title1))
    rl.question(colors.brightCyan('Enter the prefix: '), function(command) {
        console.clear()
        console.log(colors.brightCyan(title1))
        console.log(colors.brightCyan(`                         Connected:`.gray + ` ${client.user.tag}`.brightCyan + ` | Command:`.gray + ` ${command}`.brightCyan + ` | limit:`.gray + ` ${amountDel}`.brightCyan));
        client.on('message', message => {
            if (message.author.id !== myID) {
                return;
            } 
                else if (message.content.startsWith(command) && message.author.id === myID) {
                console.log(`  [!] Started Command:`.gray + ` ${message.content}`.brightCyan);
            }
            if (message.content.startsWith(command)) {
                message.channel.fetchMessages({ limit: amountDel }).then(msgs => msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
            }
                
        });
    })
})








client.login(settings.token).catch((err) => {
    console.clear()
    var invalid = String.raw `
    
    
    ▄▄▄█████▓ ▒█████   ██ ▄█▀▓█████  ███▄    █     ██▓ ███▄    █ ██▒   █▓ ▄▄▄       ██▓     ██▓▓█████▄ 
    ▓  ██▒ ▓▒▒██▒  ██▒ ██▄█▒ ▓█   ▀  ██ ▀█   █    ▓██▒ ██ ▀█   █▓██░   █▒▒████▄    ▓██▒    ▓██▒▒██▀ ██▌
    ▒ ▓██░ ▒░▒██░  ██▒▓███▄░ ▒███   ▓██  ▀█ ██▒   ▒██▒▓██  ▀█ ██▒▓██  █▒░▒██  ▀█▄  ▒██░    ▒██▒░██   █▌
    ░ ▓██▓ ░ ▒██   ██░▓██ █▄ ▒▓█  ▄ ▓██▒  ▐▌██▒   ░██░▓██▒  ▐▌██▒ ▒██ █░░░██▄▄▄▄██ ▒██░    ░██░░▓█▄   ▌
      ▒██▒ ░ ░ ████▓▒░▒██▒ █▄░▒████▒▒██░   ▓██░   ░██░▒██░   ▓██░  ▒▀█░   ▓█   ▓██▒░██████▒░██░░▒████▓ 
      ▒ ░░   ░ ▒░▒░▒░ ▒ ▒▒ ▓▒░░ ▒░ ░░ ▒░   ▒ ▒    ░▓  ░ ▒░   ▒ ▒   ░ ▐░   ▒▒   ▓▒█░░ ▒░▓  ░░▓   ▒▒▓  ▒ 
        ░      ░ ▒ ▒░ ░ ░▒ ▒░ ░ ░  ░░ ░░   ░ ▒░    ▒ ░░ ░░   ░ ▒░  ░ ░░    ▒   ▒▒ ░░ ░ ▒  ░ ▒ ░ ░ ▒  ▒ 
      ░      ░ ░ ░ ▒  ░ ░░ ░    ░      ░   ░ ░     ▒ ░   ░   ░ ░     ░░    ░   ▒     ░ ░    ▒ ░ ░ ░  ░ 
                 ░ ░  ░  ░      ░  ░         ░     ░           ░      ░        ░  ░    ░  ░ ░     ░    
                                                                     ░                          ░      
    
    
    
    
    `
    console.log(colors.red(invalid))
    console.log(colors.red("Token Invalid"))
})