var nrf24Service = require('./nrf24-services');

module.exports = {
    start: () => {
        nrf24Service.init();
        nrf24Service.broadcast();
    }
}