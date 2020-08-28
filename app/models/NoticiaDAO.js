function NoticiaDAO(connection){

    this._connection = connection;

    NoticiaDAO.prototype.getNoticias = () => {

        return new Promise((resolve, reject) => {
            this._connection.query("SELECT *, DATE_FORMAT(data_criacao, '%d/%m/%Y') AS data_criacao_formatada FROM tbl_noticia ORDER BY data_criacao DESC", (error, result)=>{
                if(error) reject(error);
                resolve(result);
            });
        });
    
    }

    NoticiaDAO.prototype.getUltimasNoticias = () => {

        return new Promise((resolve, reject) => {
            this._connection.query("SELECT *, DATE_FORMAT(data_criacao, '%d/%m/%Y') AS data_criacao_formatada FROM tbl_noticia ORDER BY data_criacao DESC LIMIT 5", (error, result) => {
                if(error) reject(error);
                resolve(result);
            });
        });

    }
    
    NoticiaDAO.prototype.getDetalheNoticia = (noticiaId) => {
    
        console.log(noticiaId);
        return new Promise((resolve, reject) => {
            const SQL = "SELECT *, DATE_FORMAT(data_criacao, '%d/%m/%Y') AS data_criacao_formatada FROM tbl_noticia WHERE noticia_id = ?";
        
            this._connection.query({sql: SQL, values: noticiaId}, (error, result)=>{
                if(error) reject(error);
                resolve(result);
            });
        });
    
    }
    
    NoticiaDAO.prototype.insertNoticia = (noticia) => {
    
        return new Promise((resolve, reject)=>{
            this._connection.query("INSERT INTO tbl_noticia SET ?", noticia, (error) => {
                if(error) reject(error);
                resolve();
            })
        });
    
    }
    

}


module.exports = () => {

    return NoticiaDAO;

}