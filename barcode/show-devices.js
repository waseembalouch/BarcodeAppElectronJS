var HID = require('node-hid');

// Linux: choose driverType
// default is 'hidraw', can also be 'libusb'
if (process.argv[2]) {
    var type = process.argv[2];
    console.log("driverType:", type);
    HID.setDriverType(type);
}

// console.log('devices:', HID.devices());

var device = new HID.HID('USB\VID_FFFF&PID_0100\5&250A55AA&0&2');
console.log(device);

device.on("data", function (data) {
    console.log(data);

});