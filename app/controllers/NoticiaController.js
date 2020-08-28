const { validationResult } = require("express-validator");

function NoticiaController(){

    NoticiaController.prototype.getNoticias = (application, req, res) => {

        const mysqlConnection = application.config.db_connection.getConnection();
        const noticiaModel = new application.app.models.NoticiaDAO(mysqlConnection);

        noticiaModel.getNoticias().then(result => {

            res.render("noticias/noticias", {listaNoticias: result});

        })

    }

    NoticiaController.prototype.getUltimasNoticias = (application, req, res) => {

        const mysqlConnection = application.config.db_connection.getConnection();
        const noticiaModel = new application.app.models.NoticiaDAO(mysqlConnection);

        noticiaModel.getUltimasNoticias().then((result) => {
            
            res.render("home/index", {listaNoticias: result});

        });

    }

    NoticiaController.prototype.getDetalheNoticia = (application, req, res) => {

        const mysqlConnection = application.config.db_connection.getConnection();
        const noticiaModel = new application.app.models.NoticiaDAO(mysqlConnection);

        noticiaModel.getDetalheNoticia(req.query.noticia_id).then(result => {
            console.log(result);

            res.render("noticias/detalhe_noticia", {noticia: result});

        });

    }

    NoticiaController.prototype.insertNoticia = (application, req, res) => {

        const noticia = req.body;

        const validErrors = validationResult(req);

        if(validErrors.isEmpty()){

            const mysqlConnection = application.config.db_connection.getConnection();
            const noticiaModel = new application.app.models.NoticiaDAO(mysqlConnection);

            noticiaModel.insertNoticia(noticia).then(() => {

                res.redirect("/noticias");

            })

        } else {

            res.render("admin/form_add_noticia", { validErrors: validErrors, noticia: noticia});

        }

    }

    NoticiaController.prototype.getInclusaoNoticia = (application, req, res) => {

        res.render("admin/form_add_noticia", { validErrors: null, noticia: {}});

    }

}

module.exports = () =>{

    return NoticiaController;

}