/*
const HomeModel = require('../models/homemodel');
HomeModel.create({
    titulo: 'Titulo Teste 2023',
    descricao: 'Descrição teste 2023'
}).then(dados => console.log(dados))
    .catch(e => console.log(e));
*/

exports.homePage = (req, res) => {
    // console.log(req.flash('error'));
    res.render('index', {
       // titulo: '<span style = "color:red"> novo título </span> da página',
        // numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });
}
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};