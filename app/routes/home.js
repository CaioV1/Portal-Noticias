function getRoutes(application) {
    
    application.get("/", (req, res) => {
        const controller = new application.app.controllers.NoticiaController();
        controller.getUltimasNoticias(application, req, res);
    })

}

module.exports = getRoutes;