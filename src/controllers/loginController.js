const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.logup = (req, res) => {
    res.render('logup');
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }
        req.flash('success!', 'sua conta foi criada com sucesso, seja bem vindo.');
        req.session.save(() => {
            return res.redirect('back');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};