class Formet {
    constructor(data, message, error = undefined) {
        this.data = data;
        if (message) {
            this.message = message;
        }
        if (error != undefined) {
            this.error = error;
        } else {
            this.error = false;
        }
    }
}

module.exports = Formet