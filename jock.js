const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
    return
}

if (receivedMessage.content.startsWith("KG")) {
    var input = parseFloat(String(receivedMessage.content).slice(3, receivedMessage.length));
    var output = Math.round(input/2.2046);
    receivedMessage.channel.send(String(input) + " pounds is approximately " + String(output) + " kilograms" );

}

if (receivedMessage.content.startsWith("LB")) {
    var input = parseFloat(String(receivedMessage.content).slice(3, receivedMessage.length));
    var output = Math.round(input * 2.205);
    receivedMessage.channel.send(String(input) + " kilograms is approximately " + String(output) + " pounds" );

}

if (receivedMessage.content.startsWith("CM")) {
    var feet = parseFloat(String(receivedMessage.content).slice(3, 5));
    var inches = parseFloat(String(receivedMessage.content).slice(5, receivedMessage.length));
    var total = ((feet * 12) + inches);
    var output = Math.round(total * 2.54);
    receivedMessage.channel.send(String(feet + "'" + inches) + " is " + total + " inches, or approximately " + output + " centimeters" );

}

if (receivedMessage.content.startsWith("IN")) {
    var input = parseFloat(String(receivedMessage.content).slice(3, receivedMessage.length));
    var output = Math.round(input/2.54);
    var feet = Math.floor(output/12);
    var inches = (output - (feet * 12));
    receivedMessage.channel.send(String(input) + " centimeters is approximately " + feet + "'" + inches + ", or " + String(output) + " inches" );

}

})


client.login(CLIENT-TOKEN");
