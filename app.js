const { app } = require("./config/server");
const log = require("./util/log");

app.listen(3000, () => {
    log.logOnConsole("Servidor rodando na porta 3000");
});