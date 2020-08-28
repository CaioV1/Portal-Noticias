const { body } = require("express-validator");
const { validationInclusao } = require("../controllers/NoticiaController");

function getRoutes(application) {
    
    application.get("/formulario_inclusao_noticia", (req, res)=>{
        const controller = new application.app.controllers.NoticiaController();
        controller.getInclusaoNoticia(application, req, res);
    });

    application.post("/noticia/salvar", 
    [

        body("titulo").not().isEmpty().withMessage("Não há título para a notícia."),
        body("resumo_noticia").not().isEmpty().withMessage("Obrigatório o resumo da notícia"),
        body("autor").not().isEmpty().withMessage("Obrigatório o autor da notícia"),
        body("data_noticia").not().isEmpty().withMessage("Obrigatório a data da notícia"),
        body("corpo_noticia").not().isEmpty().withMessage("Obrigatório o corpo noticia da notícia"),
        body("resumo_noticia").isLength({ min: 10, max: 200 }).withMessage("Resumo deve possuir tamanho de 10 à 200 caracteres"),
        body("autor").isLength({ min: 10, max: 100}).withMessage("Nome do autor deve possuir tamanho de 10 à 200 caracteres"),
        body("data_noticia").isDate({ format: "YYYY-MM-DD" }).withMessage("Formato da data da notícia está incorreta")
    
    ]
    , (req, res) => {
        const controller = new application.app.controllers.NoticiaController();
        controller.insertNoticia(application, req, res);
    })

}

module.exports = getRoutes;