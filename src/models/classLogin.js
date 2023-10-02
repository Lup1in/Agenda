class Login {   
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    register() {
        this.valida();
        if (this.errors.length > 0) return;
    }


    valida() {
        this.cleanUp();
        if (!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido');
        if (this.body.password.length < 3 || this.body.password.length > 13) {
            this.errors.push('a senha precisa ter entre 3 e 13 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}