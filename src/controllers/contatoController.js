const Contato = require('../models/contatoModel');

exports.index = (req, res) => {
    res.render('contato');
};

exports.register = async function (req, res) {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu contato foi registrado com sucesso!');
        req.session.save(function () {
            return res.redirect('back');
        });
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};