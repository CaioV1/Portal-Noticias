function getRoutes(application){

    application.get("/noticias", (req, res)=>{
        const controller = new application.app.controllers.NoticiaController();
        controller.getNoticias(application, req, res);

    })

    application.get("/detalhe_noticia/", (req, res)=>{
        const controller = new application.app.controllers.NoticiaController();
        controller.getDetalheNoticia(application, req, res);

    });

}

module.exports = getRoutes;