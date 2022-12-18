const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();
 
//fungsi yang dijalankan ketika event packet-order terjadi
const readyToSend = ({ name }) => {
    console.log(`paket ${name} siap dikirim!`);
};

const shippingCost = ({ price }) => {
    console.log(`ongkir sebesar ${price} `);
}

//mendaftarkan fungsi readyToSend dan shippingCost sebagai listener event packert-order
myEventEmitter.on('packet-order', readyToSend);
myEventEmitter.on('packet-order', shippingCost);
 
myEventEmitter.emit('packet-order', { name: 'Tas', price: 20000 });