module.exports = {

    user:(app, req, res) => {

        req.assert('_name','O nome é obrigatório').notEmpty();
        req.assert('_email','O email é obrigatório').notEmpty().isEmail();

        let errors = req.validationsErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
}