const {Client,RichEmbed} = require('discord.js');
const client = new Client();

client.on('ready',()=>{
    console.log(`Mi Bot esta despierto:${client.user.tag}`);
    if(client.user.presence.status === 'dnd'){
        console.log('el bot esta invernando',client.user.presence.status);
    }else{
        console.log('el bot esta despierto');
    }
    const testChannel = client.channels.find(channel => channel.name === 'canal de Gamers UAEM');
        console.log('el bot cherry esta activo');
});

client.on('message',async message =>{
    console.log(message);
    if(message.content === 'ping'){
        message.reply('pong')
    }
    if(message.content === 'hola'){
        message.channel.send(`hola ${message.author} saludos chavos`);
    }
    if(message.content.includes('gay')){
        message.channel.send(`No se permite decir grocerias, guarda silencio ${message.author}`);
    }
    if(message.content === 'cherrybit'){
        message.channel.send('http://cherrybit.com.mx');
        message.channel.send('https://www.juegos.com/');
    }
    if(message.content === 'juegos gratis'){
        message.channel.send('https://www.juegos.com/');
    }
    if(message.content === '!pretty'){
        const embed = new RichEmbed()//los mensajes concatenados esten bnitos
             .setTitle('Pretty Message')
             .setColor('#33C1FF')
             .setAuthor('Cherryman','https://images.app.goo.gl/j1R7dDZwGFBaw2dJ8')
             message.channel.send(embed);
    }
    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('messsage deleted')
    };

});

client.login('NjUwMDA1NzAyNjQ2OTU2MDMy.XeFDCA.hu-St-pgtJMOj1atB5eB02PJX3Q');

