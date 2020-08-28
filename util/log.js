const { formatedDate } = require("./date");

function logOnConsole(value) {

    console.log(formatedDate + " - " + value);
    
}

exports.logOnConsole = logOnConsole;