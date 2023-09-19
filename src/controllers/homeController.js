
const HomeModel = require('../models/homemodel');
HomeModel.create({
    titulo: 'Titulo Teste 2023',
    descricao: 'Descrição teste 2023'
}).then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.homePage = (req, res) => {
    res.render('index');
}
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};