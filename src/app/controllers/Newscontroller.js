
class  NewsController {

    //GET /news
    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send(" Thong tin chi tiet")
    }



}


module.exports = new NewsController;